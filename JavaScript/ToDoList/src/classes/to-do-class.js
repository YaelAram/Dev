import HTMLHelper from '../components/component';

/**
 * @class
 * ToDoItem class creates a new ToDoItem, it stores the basic information for each ToDoItem, that class contains 
 * basic methods getters and setters for each property, ToDoItem class has type verification
 */
export default class ToDoItem{

    static fromJSON( { title, id, isDone } ){
        const tempToDo = new ToDoItem( title );
        tempToDo.id = id;
        tempToDo.isDone = isDone;
        return tempToDo;
    }

    /**
     * @function constructor
     * Creates a new instance of ToDoItem
     * @param {string} title
     * title parameter indicates a brief description of the task
     */
    constructor( title = '' ){
        if( !this.isString( title ) ) this.notString( 'title' );
        else{
            this.title = title;
            this.isDone = false;
            this.id = new Date().getTime();
        }
    }

    /**
     * @function getId
     * Returns the id property
     * @returns {number}
     * id property is a primitive number type
     */
    get getId() {
        return this.id;
    }

    /**
     * @function getTitle
     * Returns title porperty
     * @returns {string}
     * title property is a primitive string type
     */
    get getTitle() {
        return this.title;
    }

    /**
     * @function getIsDone
     * Returns isDone property
     * @returns {boolean}
     * idDone property is primitive boolean type
     */
    get getIsDone() {
        return this.isDone;
    }

    /**
     * @function setIsDone
     * Sets a new value for isDone property
     * @param {boolean} isDone
     * isDone parameter could be the new value of isDone property if it pass isBoolean test
     */
    set setIsDone( isDone ) {
        if( this.isBoolean( isDone ) ) this.isDone = isDone;
        else this.notBoolean( 'isDone' );
    }

    /**
     * @function getHTMLElement
     * This function creates an li HTML element that will be added to the list of ToDoItem showed to the user
     * @returns {HTMLLIElement}
     * Returns an li HTML element that contains the information of the toDo element provided as argument
     */
    getHTMLElement(){
        return HTMLHelper.createToDoItemHTML( this );
    }

    /**
     * @function isString
     * Verify if the given argument is a primitive string
     * @param {*} value 
     * tested value
     * @returns {boolean}
     * returns true if ( typeof value === 'string' ) && ( value.length > 0 )
     */
    isString( value ){
        return ( typeof value === 'string' ) && ( value.length > 0 );
    }

    /**
     * @function notString
     * throws a new TypeError
     * @param {string} parameter
     * parameter must be the name of the variable, it shows a Type error with a message error indicating the
     * name of the parameter that does not satisfy isString test
     */
    notString( parameter ){
        throw new TypeError( `${parameter} parameter must be a string` );
    }

    /**
     * @function isBoolean
     * Verify if the given argument is a primitive boolean
     * @param {*} value 
     * tested value
     * @returns {boolean}
     * returns true if typeof value === 'boolean'
     */
    isBoolean( value ){
        return typeof value === 'boolean';
    }

    /**
     * @function notBoolean
     * throws a new TypeError
     * @param {string} parameter
     * parameter must be the name of the variable, it shows a Type error with a message error indicating the
     * name of the parameter that does not satisfy isBoolean test
     */
    notBoolean( parameter ){
        throw new TypeError( `${parameter} parameter must be a boolean` );
    }
};
