/**
 * @class
 * This class manage all the operations of the Pile
 */
class Pile{
    #array;

    /**
     * @function constructor - Creates a new instance of List
     */
    constructor(){
        this.#array = [];
        this.length = 0;
    }

    /**
     * @function push - Adds 'n' values to the Pile
     * @param { ...* } nodeList - List of values that will be appended to the Pile
     * @returns { number } - Return the new length of the Pile
     */
    push( ...nodeList ){
        this.length = this.#array.push( ...nodeList );
        return this.length;
    }

    /**
     * @function pop - Remove the last 'n' nodes of the Pile, by default the numberOfItems is 1, each node 
     * removed is returned inside a array, if the array is empty then the function will return an empty array
     * @param { number } numberOfItems - Represent the number of items to remove, it has to be greater than 0
     * @returns { *[] } - Returns a array of the removed nodes
     */
    pop( numberOfItems = 1 ){
        if( numberOfItems<0 || numberOfItems>=( this.length ) ){
            console.log( 'NumberOfItems invalid' );
            return [];
        }
        else if( this.length === 0 ){
            console.log( 'Pile is empty' );
            return [];
        }
        else{
            const arrayAux = this.#array.splice( ( this.length - numberOfItems ), numberOfItems );
            this.length = this.#array.length;
            return arrayAux.reverse();
        }
    }

    /**
     * @function removeAll - Clean the entire Pile
     * @returns { *[] } - Returns an array with each node value, if the Pile is empty then returns an empty array
     */
    removeAll(){
        if( this.length === 0 ){
            console.log( 'Pile is already empty' );
            return [];
        }
        else{
            const arrayAux = this.values();
            this.length = 0;
            this.#array = [];
            console.log( 'Pile is now empty' );
            return arrayAux;
        }
    }

    /**
     * @function contains - Checks if the nodes are in the Pile
     * @param  { ...* } nodeList - Value items searched
     * @returns { boolean[] } - Each value of the array indicates if the Value is on the Pile, if the Pile is empty
     * then will return an empty array
     */
    contains( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'Pile is empty' );
            return [];
        }
        else{
            let resultList = [];
            nodeList.forEach( node => resultList.push( this.#array.includes( node ) ) );
            return resultList;
        }
    }

    /**
     * @function search - Search each node entered by the user and returns the position of the first
     * equal element
     * @param { ...* } nodeList - Array of 'n' elements that will be searched
     * @returns { number[] } - Returns an array with the position of each Value inside the Pile, if the Value is not
     * in the Pile or the Pile is empty will return -1
     */
    search( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'Pile is empty' );
            return [ -1 ];
        }
        else{
            let resultList = [];
            nodeList.forEach( node => resultList.push( this.#array.indexOf( node ) ) );
            return resultList;
        }
    }

    /**
     * @function at - Returns each Value that be in the position provided by the user
     * @param { ...number } positions - Array of positions to query
     * @returns { *[] } - Array with each Value founded, if the Pile is empty will return an empty array
     */
    at( ...positions ){
        if( this.length === 0 ){
            console.log( 'Pile is empty' );
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
     * @returns { *[] } - Returns each node value, no matters data type of the node value, if the Pile is empty
     * then will return an empty array, the order is reversed to  ease rebuild the Pile with the pushValue method
     */
    values(){
        if( this.length === 0 ){
            console.log( 'Pile is empty' );
            return [];
        }
        else return [ ...this.#array ];
    }

    /**
     * @function showPile - Prints each value of the Pile, take into account that the order is 'reversed',
     * if you call pushValue(1, 2, 3) then will print 3, 2, 1, beacuse the Pile is a LIFO structure
     */
    showPile(){
        if( this.length === 0 ) console.log( 'Pile is empty' );
        else [ ...this.#array ].reverse().forEach( value => console.log( `Item ${ value }` ) );
    }
}

const pile = new Pile();
