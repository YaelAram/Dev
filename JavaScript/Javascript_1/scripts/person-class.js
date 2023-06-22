export default class Person{
    #name;
    #lastName;
    #age;

    /**
     * @param {string | String} name 
     * @param {string | String} lastName 
     * @param {number | Number} age 
     */
    constructor( name, lastName, age ){
        if( this.isString( name ) ) throw new TypeError( 'Name parameter must be a string' );
        else if( this.isString( lastName ) ) throw new TypeError( 'LastName aprameter must be a string' );
        else if( this.isValidNumber( age ) ) throw new TypeError( 'Age parameter must be a number, range (0 - 100)' );
        else{
            this.#name = name;
            this.#lastName = lastName;
            this.#age = age;
        }
    }

    /**@returns {string} */
    get getName() {
        return this.#name;
    }

    /**@param {string | String} name */
    set setName( name ) {
        if( this.isString( name ) ) this.#name = name;
        else throw new TypeError( 'Name parameter must be a string' );
    }

    /**@returns {string} */
    get getLastName() {
        return this.#lastName;
    }

    /**@param {string | String} lastName */
    set setLastName( lastName ) {
        if( this.isString( lastName ) ) this.#lastName = lastName;
        else this.#lastName = lastName;
    }

    /**@returns {number} */
    get getAge() {
        return this.#age;
    }

    /**@param {number | Number} age */
    set setAge( age ) {
        if( this.isValidNumber( age ) ) this.#age = age;
        else throw new TypeError( 'Age parameter must be a number, range (0 - 100)' )
    }

    /**@returns {string} */
    toString(){
        return `${this.#name} ${this.#lastName} is ${this.#age} years old`;
    }

    /**
     * @param {*} value 
     * @returns {boolean}
     */
    isString( value ){
        return ( value instanceof String ) || ( typeof value === 'string' );
    }

    /**
     * @param {*} value 
     * @returns {boolean}
     */
    isValidNumber( value ){
        return ( ( value instanceof Number ) || ( typeof value === 'number' ) ) && ( value > 0 && value <= 100 );
    }
}