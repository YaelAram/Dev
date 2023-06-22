const mongoose = require( 'mongoose' );

const Costumer = require( '../model/costomer' );

const conectToDataBase = require( '../database/config' );

const {
    print,
    printColdHotProbability,
    printDistributionXY,
    printDistributionXYZ,
    printBayesProbability
} = require( './show_rows' );

const FIELDS_NO_ID = 'value age temperature drink -_id';
const AGE_VALUES = [ 0, 1, 2 ];
const TEMPERATURE_VALUES = [ 0, 1, 2 ];
const DRINK_VALUES = [ 0, 1 ];
const coldHotProbability = [];
const distributionXY = [];
const distributionXYZ = [];
const likeliHoodXY_Z = [];

let LIMIT = 0;

// Defining Constant LIMIT
const setLimit = async () => {
    LIMIT = ( await Costumer.find() ).length;
    return true;
};

// Section 1
const showFirstAndLastCostumers = async () => {
    await firstFive();
    await lastFive();
    return true;
};

const firstFive = async () => {
    console.log( '\nPrimeros 5 registros' );
    const firstFiveCostumer = await Costumer.find( { value: { $lte: 4 } }, FIELDS_NO_ID ).exec();
    print( firstFiveCostumer );
    return true;
};

const lastFive = async () => {
    console.log( '\nUltimos 5 registros' );
    const lastFiveCostumers = await Costumer.find( { value: { $gte: ( LIMIT - 5 ) } },  FIELDS_NO_ID ).exec();
    print( lastFiveCostumers );
    return true;
};

// Section 3
const clasifyPeopleTemperature = async () => {
    // Section 3 Part 1
    await updateYoungPeople();
    await updateAdultPeople();
    await updateElderPeople();

    // Section 3 Part 2
    await updateCold();
    await updateWarm();
    await updateHot();

    return true;
};

// Age clasification
const updateYoungPeople = async () => {
    const res = await Costumer.updateMany( { age: { $lt: 18 } }, { age: 0 } );
    return true;
};

const updateAdultPeople = async () => {
    const res = await Costumer.updateMany( { age: { $gte: 18, $lt: 60 } }, { age: 1 } );
    return true;
};

const updateElderPeople = async () => {
    const res = await Costumer.updateMany( { age: { $gte: 60 } }, { age: 2 } );
    return true;
};

// Temperature clasification
const updateCold = async () => {
    const res = await Costumer.updateMany( { temperature: { $lte: 10 } }, { temperature: 0 } );
    return true;
};

const updateWarm = async () => {
    const res = await Costumer.updateMany( { temperature: { $gt: 10, $lt: 20 } }, { temperature: 1 } );
    return true;
};

const updateHot = async () => {
    const res = await Costumer.updateMany( { temperature: { $gte: 20 } }, { temperature: 2 } );
    return true;
};

// Section 5
const getColdHotDrinkProbability = async () => {
    const cold = ( await Costumer.find( { drink: 0 } ) ).length / LIMIT;
    const hot = 1.0 - cold;
    coldHotProbability.push( cold, hot );
    return true;
};

const showColdHotDrinkProbability = () => {
    printColdHotProbability( coldHotProbability );
};

// Section 6
const getDistributionXY = async () => {
    for( const i of AGE_VALUES ){
        const temperatures = [];
        for( const j of TEMPERATURE_VALUES ){
            const people = ( await Costumer.find( { age: i, temperature: j } ) ).length;
            temperatures.push( people / LIMIT );
        }
        distributionXY.push( temperatures );
    }

    return true;
};

const showDistributionXY = () => {
    printDistributionXY( distributionXY );
};

// Section 7
const getDistributionXYZ = async () => {
    for( const i of AGE_VALUES ){
        const temperatures = [], temperatures2 = [];
        for( const j of TEMPERATURE_VALUES ){
            const drinks = [], drinks2 = [];
            for( const k of DRINK_VALUES ){
                const people = ( await Costumer.find( { age: i, temperature: j, drink: k } ) ).length / LIMIT;
                drinks.push( people );
                drinks2.push( people / coldHotProbability[ k ] );
            }
            temperatures.push( drinks );
            temperatures2.push( drinks2 );
        }
        distributionXYZ.push( temperatures );
        likeliHoodXY_Z.push( temperatures2 );
    }
    return true;
};

const showDistributionXYZ = () => {
    printDistributionXYZ( distributionXYZ, '∩' );
};

const showLikeliHoodXY_Z = () => {
    printDistributionXYZ( likeliHoodXY_Z, '|' );
};

// Section 8
const getProbabilityBayes = async ( x, y ) => {
    const probabilityCold = ( coldHotProbability[ 0 ] * likeliHoodXY_Z[ x ][ y ][ 0 ] ) / distributionXY[ x ][ y ];
    printBayesProbability( x, y, 0, probabilityCold );
    printBayesProbability( x, y, 1, ( 1.0 - probabilityCold ) );

    if( probabilityCold > 0.5 ) console.log( '\n  La sugerencia es una bebida: Fria' );
    else if( probabilityCold < 0.5 ) console.log( '\n  La sugerencia es una bebida: Caliente' );
    else console.log( '\n  La sugerencia es una bebida: Ambas son igual de apropiadas' );

    return true;
};

// Compute Information
const compute = async () => {
    console.log( 'Por favor espera un momento, procesando informacion...' );
    await conectToDataBase();
    await setLimit();
    if( LIMIT !== 0 ){
        // Section 3
        await clasifyPeopleTemperature();

        // Section 5
        await getColdHotDrinkProbability();

        // Section 6
        await getDistributionXY();

        // Section 7
        await getDistributionXYZ();

        return true;
    }
    else{
        console.log( 'Los registros no han sido cargados por el usuario.' );
        return false;
    }
};

// Finish Process
const finish = async () => {
    // Delete Costumers ( To wait for new data )
    await Costumer.deleteMany( {} );

    // Close DB connection
    await mongoose.connection.close();
    
    return true;
};

module.exports = {
    compute,
    showFirstAndLastCostumers,
    showColdHotDrinkProbability,
    showDistributionXY,
    showDistributionXYZ,
    showLikeliHoodXY_Z,
    getProbabilityBayes,
    finish
};
