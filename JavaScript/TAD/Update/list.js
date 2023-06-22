/**
 * @class
 * This class manage all the operations of the List
 */
class List{
    #array;
    
    /**
     * @function constructor - Creates a new instance of List
     */
    constructor(){
        this.length = 0;
        this.#array = [];
    }

    /**
     * @function push - Adds 'n' values to the List
     * @param { ...* } nodeList - List of values that will be appended to the List
     * @returns { number } - Returns the new length of the List
     */
    push( ...nodeList ){
        this.length = this.#array.push( ...nodeList );
        return this.length;
    }

    /**
     * @function removeFirst - Removes the first value of the list
     * @returns { * } - Returns the removed value
     */
    removeFirst(){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return undefined;
        }
        else{
            this.length--;
            return this.#array.shift();
        }
    }

    /**
     * @function removeLast - Removes the last value of the List
     * @returns { * } - Returns the removed value
     */
    removeLast(){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return undefined;
        }
        else{
            this.length--;
            return this.#array.pop();
        }
    }

    /**
     * @function remove - Removes each value in the nodeList array ( if it is in the List )
     * @param { ...* } - List of value to remove
     * @returns { *[] } - An array with all the removed values, if the List is empty then will 
     * return an empty array
     */
    remove( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else{
            const resultList = [];
            nodeList.forEach( value => {
                const index = this.#array.indexOf( value );
                if( index !== -1 ) resultList.push( this.#array.splice( index, 1 ) );
                else resultList.push( undefined );
            } );
            this.length = this.#array.length;
            return resultList.flat();
        }
    }

    /**
     * @function removeAll - Clean the entire List
     * @returns { *[] } - Returns an array with each node value, if the List is empty then returns an empty array
     */
    removeAll(){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else{
            const array = this.values();
            this.length = 0;
            this.#array = [];
            return array;
        }
    }

    /**
     * @function contains - Checks if the nodes are in the List
     * @param  { ...* } nodeList - value items searched
     * @returns { boolean[] } - Each value of the array indicates if the value is on the List, if the List is empty
     * then will return an empty array
     */
    contains( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else{
            let resultList = [];
            nodeList.forEach( value => resultList.push( this.#array.includes( value ) ) );
            return resultList;
        }
    }

    /**
     * @function search - Search each node enteed by the user and returns the position of the first
     * equal element
     * @param { ...* } nodeList - Array of 'n' elements that will be searched
     * @returns { number[] } - Returns an array with the position of each value inside the List, if the Values is not
     * in the List or the List is empty will return -1
     */
    search( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [ -1 ];
        }
        else{
            let resultList = [];
            nodeList.forEach( value => resultList.push( this.#array.indexOf( value ) ) );
            return resultList;
        }
    }

    /**
     * @function at - Returns each value that be in the position provided by the user
     * @param { ...number } positions - Array of positions to query
     * @returns { *[] } - Array with each value founded, if the List is empty will return an empty array
     */
    at( ...positions ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else{
            let resultList = [];
            positions.forEach( position => resultList.push( this.#array[ position ] ) );
            return resultList;
        }
    }

    /**
     * @function values - Gets every node value and puts them inside an array
     * @returns { *[] } - Returns each node value, no matters data type of the node value, if the List is empty
     * then will return an empty array, the order is reversed to  ease rebuild the List with the pushValue method
     */
    values(){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else return [ ...this.#array ];
    }

    /**
     * @function showList - Prints each value of the List
     */
    showList(){
        if( this.length === 0 ) console.log( 'List is empty' );
        else this.#array.forEach( value => console.log( `Item ${ value }` ) );
    }
}

const list = new List();
