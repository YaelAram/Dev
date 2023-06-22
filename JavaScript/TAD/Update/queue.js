/**
 * @class
 * This class manage all the operations of the Queue
 */
class Queue{
    #array;

    /**
     * @function constructor - Creates a new instance of Queue
     */
    constructor(){
        this.length = 0;
        this.#array = [];
    }

    /**
     * @function push - Adds 'n' nodes to the Queue
     * @param { ...* } nodeList - List of nodes that will be appended to the Queue
     * @returns { number } - Return the new length of the Pile
     */
    push( ...nodeList ){
        this.length = this.#array.push( ...nodeList );
        return this.length;
    }

    /**
     * @function pop - Remove the last 'n' nodes of the Queue, by default the numberOfItems is 1, each node 
     * removed is returned inside a array, if the array is empty then the function will return an empty array
     * @param { number } numberOfItems - Represent the number of items to remove, it has to be greater than 0
     * @returns { *[] } - Returns an array of the removed nodes
     */
    pop( numberOfItems = 1 ){
        if( numberOfItems<0 || numberOfItems>=( this.length ) ){
            console.log( 'NumberOfItems invalid' );
            return [];
        }
        else if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [];
        }
        else{
            const arrayAux = this.#array.splice( 0, numberOfItems );
            this.length = this.#array.length;
            return arrayAux;
        }
    }

    /**
     * @function removeAll - Clean the entire Queue
     * @returns { *[] } - Returns an array with each node value, if the Queue is empty then returns an empty array
     */
    removeAll(){
        if( this.length === 0 ){
            console.log( 'Queue is already empty' );
            return [];
        }
        else{
            const array = this.values();
            this.length = 0;
            this.#array = [];
            console.log( 'Queue is now empty' );
            return array;
        }
    }

    /**
     * @function contains - Checks if the nodes are in the Queue
     * @param  { ...* } nodeList - Value items searched
     * @returns { boolean[] } - Each value of the array indicates if the Value is on the Queue, if the Queue is empty
     * then will return an empty array
     */
    contains( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [];
        }
        else{
            let resultList = [];
            nodeList.forEach( node => resultList.push( this.#array.includes( node ) ) );
            return resultList;
        }
    }

    /**
     * @function search - Search each node enteed by the user and returns the position of the first
     * equal element
     * @param { ...* } nodeList - Array of 'n' elements that will be searched
     * @returns { number[] } - Returns an array with the position of each Value inside the Queue, if the Value is not
     * in the Queue or the Queue is empty will return -1
     */
    search( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [ -1 ];
        }
        else{
            let resultList = [];
            nodeList.forEach( node => resultList.push( this.#array.findIndex( node ) ) );
            return resultList;
        }
    }

    /**
     * @function at - Returns each Value that be in the position provided by the user
     * @param { ...number } positions - Array of positions to query
     * @returns { *[] } - Array with each Value founded, if the Queue is empty will return an empty array
     */
    at( ...positions ){
        if( this.length === 0 ){
            console.log( 'Queue is empty' );
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
     * @returns { *[] } - Returns each node value, no matters data type of the node value, if the Queue is empty
     * then will return an empty array, the order is reversed to  ease rebuild the Queue with the pushValue method
     */
    values(){
        if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [];
        }
        else return [ ...this.#array ];
    }

    /**
     * @function showQueue - Prints each value of the Queue
     */
    showQueue(){
        if( this.length === 0 ) console.log( 'Queue is empty' );
        else this.#array.forEach( value => console.log( `Item ${ value }` ) );
    }
}

const queue = new Queue();
