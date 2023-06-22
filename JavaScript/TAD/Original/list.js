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
 * The Node class is the most important class of this projects because it represents the each node of the List
 * structure, in this case is has three attributes, value, previousNode and nextNode, the first one 
 * accepts any type so you can store whatever you want, the second attibute stores a reference to the 
 * previous node of the List and the third attribute a reference to the next node
 */
class Node{
    /**
     * @function constructor - Cretes a new instance of Node, by default previousNode and nextNode are set as undefined
     * @param { * } value - Store here whatever you want
     */
    constructor( value ){
        this.value = value;
        this.nextNode = undefined;
        this.previousNode = undefined;
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
     * @function getPreviousNode - Returns previousNode attribute
     * @returns { Node }
     */
    get getPreviousNode() {
        return this.previousNode;   
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

    /**
     * @function setPreviousNode - Sets a new value to previousNode
     * @param { Node } previousNode
     */
    set setPreviousNode( previousNode ) {
        if( TypeHelper.isNode( previousNode ) ) this.previousNode = previousNode;
        else TypeHelper.wrongType( 'previousNode', 'Node' );
    }
}

/**
 * @class
 * This class manage all the operations of the List, to create a new instance of List you should provide a
 * comparator function to compare the value of each Node
 */
class LinkedList{
    /**
    * @callback comparator - Comparator function is used to compare both node values
    * @param { Node } node1 - Node1 is one of the two nodes required by the comparatos function
    * @param { Node } node2 - Node2 is one of the two nodes required by the comparatos function
    * @returns { boolean } - If both node values are equal then return true, that comparator is provided by the user
    */

    /**
     * @function constructor - Creates a new instance of List
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
     * @function push - Adds 'n' nodes to the List
     * @param { ...Node } nodeList - List of nodes that will be appended to the List
     * @returns { boolean[] } - Return a boolean array, each value indicates if the value has been added
     */
    push( ...nodeList ){
        if( nodeList.every( TypeHelper.isNode ) ){
            const resultList = [];
            nodeList.forEach( ( node ) => {
                if( this.firstNode === undefined ) this.firstNode = node;
                else{
                    this.lastNode.setNextNode = node;
                    node.setPreviousNode = this.lastNode;
                }
                this.lastNode = node;
                this.length++;
                console.log( `Item ${ node.getValue } has been added` );
                resultList.push( true );
            } );
            return resultList;
        }
        else TypeHelper.wrongType( 'nodeList', 'NodeList' );
    }

    /**
     * @function pushValue - Add 'n' nodes to List, the function does not require node instances only the value of 
     * each node
     * @param { ...Node } valueList - List of values, each value can be of any type
     * @returns { boolean[] } - Returns a boolean array, each value indicates if the value has been added
     */
    pushValue( ...nodeValue ){
        return this.push( ...( nodeValue.map( value => new Node( value ) ) ) );
    }

    /**
     * @function removeFirst - Removes the first node of the list
     * @returns { Node } - Returns the removed node
     */
    removeFirst(){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return undefined;
        }
        else{
            console.log( `Item ${ this.firstNode.getValue } has been removed` );
            const nodeValue = this.firstNode.getValue;
            this.firstNode = this.firstNode.getNextNode;
            this.firstNode.getPreviousNode.setNextNode = undefined;
            this.firstNode.setPreviousNode = undefined;
            this.length--;
            return new Node( nodeValue );
        }
    }

    /**
     * @function removeLast - Removes the last node of the List
     * @returns { Node } - Returns the removed node
     */
    removeLast(){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return undefined;
        }
        else{
            console.log( `Item ${ this.lastNode.getValue } has been removed` );
            const nodeValue = this.lastNode.getValue;
            this.lastNode = this.lastNode.getPreviousNode;
            this.lastNode.getNextNode.setPreviousNode = undefined;
            this.lastNode.setNextNode = undefined;
            this.length--;
            return new Node( nodeValue );
        }
    }

    /**
     * @function removeNode - Removes each Node in the nodeList array ( if it is in the List )
     * @param { ...Node } - List of Nodes to remove
     * @returns { Node[] } - An array with all the removed nodes, if the List is empty then will 
     * return an empty array
     */
    removeNode( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else if( nodeList.every( TypeHelper.isNode ) ){
            const resultList = [];
            for ( let node of nodeList ) {
                if( this.equals( node, this.firstNode ) ) resultList.push( this.removeFirst( node ) );
                else if( this.equals( node, this.lastNode ) ) resultList.push( this.removeLast( node ) );
                else{
                    let firstNodeAux = this.firstNode.getNextNode,
                        flag = true;
                    for( let index = 1 ; index<=( this.length - 2 ) ; index++ ){
                        if( this.equals( node, firstNodeAux ) ){
                            console.log( `Item ${ firstNodeAux.getValue } has been removed` );
                            firstNodeAux.getPreviousNode.setNextNode = firstNodeAux.getNextNode;
                            firstNodeAux.getNextNode.setPreviousNode = firstNodeAux.getPreviousNode;
                            firstNodeAux.setPreviousNode = undefined;
                            firstNodeAux.setNextNode = undefined;
                            this.length--;
                            flag = !flag;
                            resultList.push( firstNodeAux );
                            break;
                        }
                        firstNodeAux = firstNodeAux.getNextNode;
                    }
                    if( flag ) resultList.push( undefined );
                }
            }
            return resultList;
        }
        else TypeHelper.wrongType( 'nodeList', 'Nodelist' );
    }

    /**
     * @function removeValue - Removes each value in the nodeValue array ( if it is in the List )
     * @param { ...Node } - List of values to remove
     * @returns { Node[] } - An array with all the removed nodes, if the List is empty then will 
     * return an empty array
     */
    removeValue( ...nodeValue ){
        return this.removeNode( ...( nodeValue.map( value => new Node( value ) ) ) );
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
            const array = this.value();
            this.length = 0;
            this.firstNode = undefined;
            this.lastNode = undefined;
            return array;
        }
    }

    /**
     * @function contains - Checks if the nodes are in the List, it uses the comparator provided by the user and
     * only compares the node value
     * @param  { ...Node } nodeList - Node items searched
     * @returns { boolean[] } - Each value of the array indicates if the Node is on the List, if the List is empty
     * then will return an empty array
     */
    contains( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else if( nodeList.every( TypeHelper.isNode ) ){
            let resultList = [];
            nodeList.forEach( node => {
                if( this.equals( node, this.firstNode ) || this.equals( node, this.lastNode ) ) resultList.push( true );
                else{
                    let flag = true,
                        firstNodeAux = this.firstNode.getNextNode;
                    for( let index = 1 ; index<=( this.length - 2 ) ; index++ ){
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
     * @function containsValue - Checks if the node values are in the List, it uses the comparator provided 
     * by the user and only compares the node value
     * @param  { ...any } valueList - Node values searched
     * @returns { boolean[] } - Each value of the array indicates if the value is on the List, if the List is empty
     * then will return an empty array
     */
    containsValue( ...nodeValue ){
        return this.contains( ...( nodeValue.map( value => new Node( value ) ) ) );
    }

    /**
     * @function searchNode - Search each node enteed by the user and returns the position of the first
     * element that passes the equal method
     * @param { ...Node } nodeList - Array of 'n' elements that will be searched
     * @returns { number[] } - Returns an array with the position of each Node inside the List, if the Node is not
     * in the List or the List is empty will return -1
     */
    searchNode( ...nodeList ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
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
     * @returns { number[] } - Returns an array with the position of each node value inside the List, if the Node 
     * is not in the List or the List is empty will return -1
     */
    searchByNodeValue( ...nodeValue ){
        return this.searchNode( ...( nodeValue.map( value => new Node( value ) ) ) );
    }

    /**
     * @function at - Returns each Node that be in the position provided by the user
     * @param { ...number } positions - Array of positions to query
     * @returns { Node[] } - Array with each Node founded, if the List is empty will return an empty array
     */
    at( ...positions ){
        if( this.length === 0 ){
            console.log( 'List is empty' );
            return [];
        }
        else if( positions.every( TypeHelper.isNumber ) ){
            let resultList = [];
            positions.forEach( position => {
                if( position<0 || position>=this.length ){
                    console.log( `Index out of range, current length ${ this.length }` );
                    resultList.push( undefined );
                }
                else if( position === 0 ) resultList.push( this.firstNode );
                else if( position === ( this.length - 1) ) resultList.push( this.lastNode );
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
     * @returns { *[] } - Returns each node value, no matters data type of the node value, if the List is empty
     * then will return an empty array, the order is reversed to  ease rebuild the List with the pushValue method
     */
    value(){
        if( this.length === 0 ){
            console.log( 'List is empty' );
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
     * @function showList - Prints each value of the List
     */
    showList(){
        if( this.length === 0 ) console.log( 'List is empty' );
        else{
            let firstNodeAux = this.firstNode;
            for( let index = 0 ; index<this.length ; index++ ){
                console.log( `Item ${ firstNodeAux.getValue }` );
                firstNodeAux = firstNodeAux.getNextNode;
            }
        }
    }
}

const list = new LinkedList( ( node1, node2 ) => ( node1.getValue === node2.getValue ) );
