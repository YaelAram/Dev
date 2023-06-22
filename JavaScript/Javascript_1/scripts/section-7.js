function Person( name, lastName, age ){
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.printfValues = () => console.log( `${ this.name } ${ this.lastName } is ${ this.age } years.` );
    this.isAnAdult = () => this.age >= 18;
}

const yael = new Person( 'Yael', 'Castillo', 21 );
const kareli = new Person( 'Kareli', 'Alvarez', 19 );

yael.printfValues();
kareli.printfValues();

console.log( `${ yael.name } ${ ( yael.isAnAdult() ) ? 'is' : 'is not' } an adult.` );
console.log( `${ kareli.name } ${ ( kareli.isAnAdult() ) ? 'is' : 'is not' } an adult.` );

console.log( '=============================' );

class Pet{
    /**
     * @param {Pet} firstPet - firstPet used to extract age property
     * @param {Pet} secondPet - secondPet used to extract age property
     * @returns {number} - both ages are substracted and return a number, works as compare interface in java or js
     */
    static comparePetAge( firstPet, secondPet ){
        if( !firstPet instanceof Pet ) throw new TypeError( 'First parameter is no a Pet Object' );
        else if( !secondPet instanceof Pet ) throw new TypeError( 'Second parameter is not a Pet Object' );
        else return firstPet.getAge - secondPet.getAge;
    }

    #name;
    #age;
    #color;

    /**
     * creates a new Pet instance
     * @param {string | String} name
     * @param {number | Number} age
     * @param {string | String} color
     */
    constructor( name, age, color ){
        if( !( this.#isString( name ) ) ) throw new TypeError( 'Name parameter must be a string' );
        else if( !( this.#isNumber( age ) ) ) throw new TypeError( 'Age must be a Number' );
        else if( age < 0 || age > 50 ) throw new RangeError( 'Age paramater must be between 0 and 50' );
        else if( !( this.#isString( color ) ) ) throw new TypeError( 'Color parameter must be a string' );
        else{
            this.#name = name || 'Without name';
            this.#age = ( age < 0 || age > 30 ) ? 0 : age;
            this.#color = color || 'Black and White';
        }
    }

    /**@returns {string | String} - returns name property of the instance */
    get getName() {
        return this.#name;
    }

    /**@param {string | String} name - updates name property only if name parameter is a String */
    set setName( name ) {
        if( this.#isString( name ) ) this.#name = name;
        else throw new TypeError( 'Name parameter must be a string' );
    }

    /**@returns {number} - returns age property of the instance */
    get getAge() {
        return this.#age;
    }

    /**@param {number | Number} age - updates age property only if age parameter is a Number and is between 0 and 50 */
    set setAge( age ) {
        if( !( this.#isNumber( age ) ) ) throw new TypeError( 'Age parameter must be a Number' );
        else if( age < 0 && age > 50 ) throw new RangeError( 'Age must be between 0 and 50' );
        else this.#age = age;
    }

    /**@returns {string} - returns color property of the instance */
    get getColor() {
        return this.#color;
    }

    /**@param {string | String} color - updates color property only if color parameter is a String */
    set setColor( color ) {
        if( this.#isString( color ) ) this.#color = color;
        else throw new TypeError( 'Color parameter must be a String' );
    }

    /**@returns {boolean} - returns true if age property is greater or equal to 18, otherwise false */
    isOld(){
        return this.#age > 10;
    }

    /**@returns {string} - returns a String with all the properties separated by ',' */
    toString(){
        return `${ this.#name }, ${ this.#age }, ${ this.#color }`;
    }

    /**
     * @param {string | String} data
     * @returns {boolean}
     */
    #isString( data ){
        return ( ( typeof data === 'string' ) || ( data instanceof String ) );
    }

    /**
     * @param {number | number} data
     * @returns {boolean}
     */
    #isNumber( data ){
        return ( ( typeof data === 'number' ) || ( data instanceof Number ) );
    }
}

const blue = new Pet( 'Blue', 11, 'Black, White' );
const cophie = new Pet( 'Cophie', 5, 'White' );
const blacky = new Pet( 'Blacky', 3, 'Black' );

blacky.setColor = blacky.getColor.concat( ' and White' );
blue.setColor = blue.getColor.concat( ' and Grey' );

console.log( blue.toString() );
console.log( `${ blue.getName } ${ ( blue.isOld() ? 'is' : 'is not' ) } old` );

console.log( cophie.toString() );
console.log( `${ cophie.getName } ${ ( cophie.isOld() ? 'is' : 'is not' ) } old` );

console.log( blacky.toString() );
console.log( `${ blacky.getName } ${ ( blacky.isOld() ? 'is' : 'is not' ) } old` );

const compareResult = Pet.comparePetAge( blue, blacky );
console.log( `Compare result: ${compareResult}` );

console.log( '=============================' );

class Connection{
    static instance;
    #password;
    
    /**@param {string | String} password */
    constructor( password ) {
        if( this.isString( password ) ){
            if( !!Connection.instance ) return Connection.instance;
            else{
                Connection.instance = this;
                this.#password = password;
            }
        }
        else throw new TypeError( 'Password parameter must be a String' );
    }

    /**@returns {string} */
    get getPassword() {
        return this.#password;
    }

    /**@param {string | String} password */
    set setPassword( password ) {
        if( this.isString( password ) ) this.#password = password;
        else throw new TypeError( 'Password parameter must be a String' );
    }

    /**@returns {boolean} */
    isString( text ){
        return ( typeof text === 'string' ) || ( text instanceof String );
    }
}

const con = new Connection( '123456' );
const con2 = new Connection( '3456' );

console.log( con.getPassword );
console.log( con2.getPassword );

con.setPassword = '098098';

console.log( con.getPassword );
console.log( con2.getPassword );

console.log( '=============================' );
