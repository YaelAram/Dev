import ToDoItem from './to-do-class';

/**
 * @class
 * ToDoList class manages an array of ToDoItem, it has a useful properties as filterDoneItem and filterPendingItem
 * predicates and essential methods as addItem, getItemById, deleteItemById, deleteDoneItems,
 * marckAsCompleted method, those methods has type verification
 */
export default class ToDoList{
    static toDoList;
    static key = 'toDo';

    /**
     * @function filterDoneItem
     * Public static predicate used for instance method filterList, use it as argument for that method or create 
     * your own personalized predicate, it return a list of ToDoItem that contains the completed tasks 
     * ( isDone property === true )
     * @param {ToDoItem} item 
     * item parameter used to test if the element will continue or not in the list
     * @returns {boolean}
     * boolean returned indicates if item parameter pass or not the test
     */
    static filterDoneItem = ( item ) => item.getIsDone;

    /**
     * @function filterPendingItem
     * Public static predicate used for instance method filterList, use it as argument for that method or create 
     * your own personalized predicate, it return a list of ToDoItem that contains the incomplete tasks 
     * ( isDone property === false )
     * @param {ToDoItem} item
     * item parameter used to test if the element will continue or not in the list
     * @returns {boolean}
     * boolean returned indicates if item parameter pass or not the test
     */
    static filterPendingItem = ( item ) => !( item.getIsDone );

    /**
     * @function constructor
     * Inicialize the toDoList array if that is undefined, oterwise just create a new instance
     */
    constructor(){
        this.loadData();
    }

    /**
     * @function addItem
     * This function insert a new ToDoItem to toDoList
     * @param {ToDoItem} item
     * item to insert
     */
    addItem( item = new ToDoItem( 'Generic Item' ) ){
        if( this.isToDoItem( item ) ){
            ToDoList.toDoList.push( item );
            this.saveData();
        }
        else this.notToDoItem();
    }

    /**
     * @function getElementById
     * Find a ToDoItem from the list using its id
     * @param {number} id 
     * id parameter used to perform the search
     * @returns {object}
     * returns an object with two elements, itemPosition and item, itemPosition contains the current position of the
     * ToDoItem inside the array and item return the ToDoItem. If the id is not finded then the function returns
     * a generic object, with itemPosition equal to -1 and item with that title 'Generic To Do Item'
     */
    getElementById( id ){
        if( this.isNumber( id ) ){
            for (const index in ToDoList.toDoList) {
                if( ToDoList.toDoList[index].getId === id )  
                    return { itemPosition: Number(index), item: ToDoList.toDoList[index] };
            }
            return { itemPosition: -1, item: new ToDoItem( 'Generic To Do Item' ) };
        }
        else this.notNumber( 'id' );
    }

    /**
     * @function deleteItemById
     * That functions internaly uses getElementById to get the current position of the element and then remove it
     * @param {number} id
     * id parameter used to perform the search
     * @returns {ToDoItem}
     * returns the element removed
     */
    deleteItemById( id ){
        const { itemPosition } = this.getElementById( id );
        let item = ToDoList.toDoList.splice( itemPosition, 1 )[0];
        this.saveData();
        return item;
    }

    /**
     * @function deleteDoneItems
     * That function uses internaly the filterList with the predicate filterPendingItem, the array returned then is 
     * assigned to the static list of this class ( toDoList )
     */
    deleteDoneItems(){
        ToDoList.toDoList = ToDoList.toDoList.filter( ToDoList.filterPendingItem );
        this.saveData();
    }

    /**
     * @function marckAsCompleted
     * That function toggles the boolean value of isDone property, internaly uses getElementById to get the 
     * ToDoItem and then change it
     * @param {number} id
     * id used to search the ToDoItem 
     * @returns {ToDoItem}
     * returns the modified ToDoItem
     */
    markAsCompleted( id ){
        const { item } = this.getElementById( id );
        item.setIsDone = !item.getIsDone;
        this.saveData();
        return item;
    }

    saveData(){
        localStorage.setItem( ToDoList.key, JSON.stringify( ToDoList.toDoList ) );
    }

    loadData(){
        ToDoList.toDoList = ( localStorage.getItem( ToDoList.key ) ) ? JSON.parse( localStorage.getItem( ToDoList.key ) ) : [];
        ToDoList.toDoList = ToDoList.toDoList.map( obj => ToDoItem.fromJSON( obj ) );
    }

    /**
     * @function isNumber
     * Verify if the given argument is the primitive value of a number
     * @param {*} value
     * tested value
     * @returns {boolean}
     * returns true if typeof value === 'number', otherwise false
     */
    isNumber( value ){
        return typeof value === 'number';
    }

    /**
     * @function notNumber
     * throws a new TypeError
     * @param {string} parameter
     * parameter must be the name of the variable, it shows a Type error with a message error indicating the
     * name of the parameter that does not satisfy isNumber test
     */
    notNumber( parameter = '' ){
        throw new TypeError( `${parameter} parameter must be a number` );
    }

    /**
     * @function isToDoItem
     * Verify if the given argument is an instance of ToDoItem
     * @param {*} item 
     * tested item
     * @returns {boolean}
     * returns true if item instanceof ToDoItem
     */
    isToDoItem( item ){
        return item instanceof ToDoItem;
    }

    /**
     * @@function notToDoItem
     * throws a new TypeError
     */
    notToDoItem(){
        throw new TypeError( 'Item parameter must be a instance of ToDoItem' );
    }
};
