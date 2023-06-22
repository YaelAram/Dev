require( 'dotenv' ).config();
const { inquirerMenu, pause, getData } = require( './model/inquirer' );

const {
    compute,
    showFirstAndLastCostumers,
    showColdHotDrinkProbability,
    showDistributionXY,
    showDistributionXYZ,
    showLikeliHoodXY_Z,
    getProbabilityBayes,
    finish
} = require( './helpers/queries' );

const main = async () => {
    // Compute Data
    const flag = await compute();

    if( flag ){
        let opt = 1;
        while( opt !== 7 ){
            opt = await inquirerMenu();
            switch( opt ){
                case 1:
                    const age = await getData( 'age' );
                    const temperature = await getData( 'temperature' );
                    await getProbabilityBayes( age, temperature );
                    break;
                case 2:
                    await showFirstAndLastCostumers();
                    break;
                case 3:
                    showColdHotDrinkProbability();
                    break;
                case 4:
                    showDistributionXY();
                    break;
                case 5:
                    showDistributionXYZ();
                    break;
                case 6:
                    showLikeliHoodXY_Z();
                    break;
            }
            console.log();
            if( opt !== 7 ) await pause();
        }
    }

    // Finish Process
    await finish();

    return '\nFin del Programa';
}

main();
