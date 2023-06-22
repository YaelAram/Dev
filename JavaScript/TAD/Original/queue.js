/**
 * @class 
 * That class contains useful methods to data type validation, isNumber, isNode and isFunction are those methods,
 * additionally is has wrongType method which thow a new TypeError if you require it
 */
class TypeHelper{
    /**
     * @static
     * @function isNumber - Test if its argument is a number
     * @param { * } value - Value argument is tested to know if it is a number
     * @returns {boolean} - Returns the result of test if the value argument is a number
     */
    static isNumber( value ){
        return typeof value === 'number';
    }

    /**
     * @static
     * @function isNode - Test if its argument is a Node instance
     * @param { * } node - Node argument is tested to know if it is a Node instance
     * @returns {boolean} - Returns the result of test if the node argument is a Node instance
     */
    static isNode ( node ){
        return ( node instanceof Node ) || node === undefined;
    }

    /**
     * @static
     * @function isFunction - Test if its argument is a function
     * @param { * } fun - Fun argument is tested to know if it is a function
     * @returns {boolean} - Returns the result of test if the fun argument is a function
     */
    static isFunction( fun ){
        return typeof fun === 'function';
    }

    /**
     * @static
     * @function wrongType - Throw a TypeError and shows a message using the parameters provided
     * @param { string } parameter - Parameter argument is used to indicate which parameter caused the error
     * @param { string } type - Type argument shows the type of parameter have to be
     */
    static wrongType( parameter, type ){
        throw new TypeError( `${ parameter } have to be ${ type } type` );
    }
}

/**
 * @class
 * The Node class is the most important class of this projects because it represents the each node of the Queue
 * structure, in this case is has two attributes, value and nextNode, the first one accepts any type so
 * you can store whatever you want, the second attibute stores a reference no the next node of the Queue
 */
class Node{
    /**
     * @function constructor - Cretes a new instance of Node, by default nextNode is set as undefined
     * @param { * } value - Store here whatever you want
     */
    constructor( value ){
        this.value = value;
        this.nextNode = undefined;
    }

    /**
     * @function getValue - Returns the value attribute
     * @returns { * }
     */
    get getValue() {
        return this.value;
    }

    /**
     * @function getNextNode - Returns nextNode attribute
     * @returns { Node }
     */
    get getNextNode() {
        return this.nextNode;
    }

    /**
     * @function setValue - Sets a new value to value property
     * @param { * } value 
     */
    set setValue( value ) {
        this.value = value;
    }

    /**
     * @function setNextNode - Sets a new value to nextNode
     * @param { Node } nextNode
     */
    set setNextNode( nextNode ) {
        if( TypeHelper.isNode( nextNode ) ) this.nextNode = nextNode;
        else TypeHelper.wrongType( 'nextNode', 'Node' );
    }
}

/**
 * @class
 * This class manage all the operations of the Queue, to create a new instance of Queue you should provide a
 * comparator function to compare the value of each Node
 */
class Queue{
    /**
    * @callback comparator - Comparator function is used to compare both node values
    * @param { Node } node1 - Node1 is one of the two nodes required by the comparatos function
    * @param { Node } node2 - Node2 is one of the two nodes required by the comparatos function
    * @returns { boolean } - If both node values are equal then return true, that comparator is provided by the user
    */

    /**
     * @function constructor - Creates a new instance of Queue
     * @param { comparator } comparator - Comparator used in equals method and other to compare two nodes
     */
    constructor( comparator ){
        if( !TypeHelper.isFunction( comparator ) ) TypeHelper.wrongType( 'comparator', 'Function' );
        this.firstNode = undefined;
        this.lastNode = undefined;
        this.length = 0;
        this.comparator = comparator;
    }

    /**
     * @function equals - This functions uses the comparator provided by the user in the constructor
     * @param { Node } - First Node to compare
     * @param { Node } - Second Node to compare
     * @returns { boolean } - True if both node values are equal according with the comaprator
     */
    equals( node1, node2 ){
        if( !TypeHelper.isNode( node1 ) ) TypeHelper.wrongType( 'node1', 'Node' );
        else if( !TypeHelper.isNode( node2 ) ) TypeHelper.wrongType( 'node2', 'Node' );
        else{
            return this.comparator( node1, node2 );
        }
    }

    /**
     * @function push - Adds 'n' nodes to the Queue
     * @param { ...Node } nodeList - List of nodes that will be appended to the Queue
     * @returns { boolean[] } - Return a boolean array, each value indicates if the value has been added
     */
    push( ...nodeList ){
        if( nodeList.every( TypeHelper.isNode ) ){
            let resultList = [];
            nodeList.forEach( newNode => {
                if( this.firstNode === undefined ) this.firstNode = newNode;
                else this.lastNode.setNextNode = newNode;
                this.lastNode = newNode;
                this.length++;
                console.log( `Item ${ newNode.getValue } has been added` );
                resultList.push( true );
            } );
            return resultList;
        }
        else TypeHelper.wrongType( 'nodeList', 'NodeList' );
    }

    /**
     * @function pushValue - Add 'n' nodes to Queue, the function does not require node instances only the value of 
     * each node
     * @param { ...Node } valueList - List of values, each value can be of any type
     * @returns { boolean[] } - Returns a boolean array, each value indicates if the value has been added
     */
    pushValue( ...valueList ){
        return this.push( ...( valueList.map( value => new Node( value ) ) ) );
    }

    /**
     * @function pop - Remove the last 'n' nodes of the Queue, by default the numberOfItems is 1, each node 
     * removed is returned inside a array, if the array is empty then the function will return an empty array
     * @param { number } numberOfItems - Represent the number of items to remove, it has to be greater than 0
     * @returns { Node[] } - Returns an array of the removed nodes
     */
    pop( numberOfItems = 1 ){
        if( !TypeHelper.isNumber( numberOfItems ) ) TypeError.wrongType( 'numberOfItems', 'Number' );
        else if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [];
        }
        else{
            let resultList = [];
            for( let index = 0 ; index<numberOfItems ; index++ ){
                console.log( `Item ${ this.firstNode.getValue } has been removed` );
                const removedNode = this.firstNode;
                this.firstNode = this.firstNode.getNextNode;
                this.length--;
                removedNode.setNextNode = undefined;
                resultList.push( removedNode );
            }
            return resultList;
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
            this.firstNode = undefined;
            this.lastNode = undefined;
            this.length = 0;
            console.log( 'Queue is now empty' );
            return array;
        }
    }

    /**
     * @function contains - Checks if the nodes are in the Queue, it uses the comparator provided by the user and
     * only compares the node value
     * @param  { ...Node } nodeList - Node items searched
     * @returns { boolean[] } - Each value of the array indicates if the Node is on the Queue, if the Queue is empty
     * then will return an empty array
     */
    contains( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [];
        }
        else if( nodeList.every( TypeHelper.isNode ) ){
            let resultList = [];
            nodeList.forEach( node => {
                if( this.equals( node, this.firstNode ) || this.equals( node, this.lastNode ) ) resultList.push( true );
                else{
                    let firstNodeAux = this.firstNode.getNextNode,
                        flag = true;
                    for( let index = 1 ; index<=( this.length - 2 ) ; index++  ){
                        if( this.equals( node, firstNodeAux ) ){
                            resultList.push( true );
                            flag = !flag;
                            break;
                        }
                        firstNodeAux = firstNodeAux.getNextNode;
                    }
                    if( flag ) resultList.push( false );
                }
            } );
            return resultList;
        }
        else TypeHelper.wrongType( 'nodeList', 'NodeList' );
    }

    /**
     * @function containsValue - Checks if the node values are in the Queue, it uses the comparator provided 
     * by the user and only compares the node value
     * @param  { ...any } valueList - Node values searched
     * @returns { boolean[] } - Each value of the array indicates if the value is on the Queue, if the Queue is empty
     * then will return an empty array
     */
    containsValue( ...valueList ){
        return this.contains( ...( valueList.map( value => new Node( value ) ) ) );
    }

    /**
     * @function searchNode - Search each node enteed by the user and returns the position of the first
     * element that passes the equal method
     * @param { ...Node } nodeList - Array of 'n' elements that will be searched
     * @returns { number[] } - Returns an array with the position of each Node inside the Queue, if the Node is not
     * in the Queue or the Queue is empty will return -1
     */
    searchNode( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [ -1 ];
        }
        else if( nodeList.every( TypeHelper.isNode ) ){
            let resultList = [];
            nodeList.forEach( node => {
                if( this.equals( node, this.firstNode ) ) resultList.push( 0 );
                else if( this.equals( node, this.lastNode ) ) resultList.push( this.length - 1 );
                else{
                    let firstNodeAux = this.firstNode.getNextNode,
                        flag = true;
                    for( let index = 1 ; index<=( this.length - 2 ) ; index++ ){
                        if( this.equals( node, firstNodeAux ) ){
                            resultList.push( index );
                            flag = !flag;
                            break;
                        }
                        firstNodeAux = firstNodeAux.getNextNode;
                    }
                    if( flag ) resultList.push( -1 );
                }
            } );
            return resultList;
        }
        else TypeHelper.wrongType( 'nodeList', 'NodeList' );
    }

    /**
     * @function searchByNodeValue - Search each node value enteed by the user and returns the position of the first
     * element that passes the equal method
     * @param { ...number } valueList - Array of 'n' elements that will be searched
     * @returns { number[] } - Returns an array with the position of each node value inside the Queue, if the Node 
     * is not in the Queue or the Queue is empty will return -1
     */
    searchByNodeValue( ...nodeValue ){
        return this.searchNode( ...( nodeValue.map( value => new Node( value ) ) ) );
    }

    /**
     * @function at - Returns each Node that be in the position provided by the user
     * @param { ...number } positions - Array of positions to query
     * @returns { Node[] } - Array with each Node founded, if the Queue is empty will return an empty array
     */
    at( ...positions ){
        if( this.length === 0 ){
            console.log( 'Queue is empty' );
            return [];
        }
        else if( positions.every( TypeHelper.isNumber ) ){
            let resultList = [];
            positions.forEach( position => {
                if( position > ( this.length - 1 ) || position < 0 ){
                    console.log( `Index out of range, current size ${this.length}` );
                    resultList.push( undefined );
                }
                else if( position === 0 ) resultList.push( this.firstNode );
                else if( position === ( this.length - 1 ) ) resultList.push( this.lastNode );
                else{
                    let firstNodeAux = this.firstNode.getNextNode;
                    for( let index = 1 ; index<position ; index++ )
                        firstNodeAux = firstNodeAux.getNextNode;
                    resultList.push( firstNodeAux );
                }
            } );
            return resultList;
        }
        else TypeHelper.wrongType( 'positions', 'NumberList' );
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
        else{
            let resultList = [],
                firstNodeAux = this.firstNode;
            for( let index = 0 ; index<this.length ; index++ ){
                resultList.push( firstNodeAux.getValue );
                firstNodeAux = firstNodeAux.getNextNode;
            }
            return resultList;
        }
    }

    /**
     * @function showQueue - Prints each value of the Queue
     */
    showQueue(){
        if( this.length === 0 ) console.log( 'Queue is empty' );
        else{
            let firstNodeAux = this.firstNode;
            for( let index = 0 ; index<this.length ; index++ ){
                console.log( `Item: ${firstNodeAux.getValue}` );
                firstNodeAux = firstNodeAux.getNextNode;
            }
        }
    }
}

const queue = new Queue( ( node1, node2 ) => node1.getValue === node2.getValue );
