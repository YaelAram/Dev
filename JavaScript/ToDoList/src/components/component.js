import { ToDoItem, ToDoList } from "../classes";

export default class HTMLHelper{
    toDoCountHTML   = document.querySelector( 'strong' );
    toDoCountNumber = Number( this.toDoCountHTML.innerText );
    currentPage     = 'Todos';

    /**
     * @function constructor
     * Constructor method initialize toDoListSection ( HTMLUListElement ) where each ToDoItem is showed to the user
     * items showed depends of the filter applied
     * @param {HTMLUListElement} toDoListSection 
     * Section where ToDoItems are showed
     */
    constructor( toDoListSection ){
        this.toDoListSection = toDoListSection;
    }

    /**
     * @function createToDoItemHTML
     * This function creates an li HTML element that will be added to the list of ToDoItem showed to the user
     * @param {ToDoItem} toDoItem
     * toDo element constains the necessary information to fill the required information fro the HTML element
     * @returns {HTMLLIElement}
     * Returns an li HTML element that contains the information of the toDo element provided as argument
     */
    static createToDoItemHTML = ( toDoItem ) =>{
        const toDoHTML = 
        `<li class="${ ( toDoItem.getIsDone ) ? 'completed' : '' }" data-id="${ toDoItem.getId }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ ( toDoItem.getIsDone ) ? 'checked' : '' }>
                <label>${ toDoItem.getTitle }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

        const div = document.createElement( 'div' );
        div.innerHTML = toDoHTML;

        return div.firstElementChild;
    };

    /**
     * @function addNewToDoItemToHTML
     * Append an ul HTML element with the necessary information of the new ToDoItem, reset the input text and increment
     * the counter of pending items
     * @param {ToDoItem} toDoItem
     * toDoItem contains the necessary information to create a ToDoItem HTML element
     * @param {HTMLInputElement} inputTitle
     * inputTitle is the input field where the user wrote ToDoItem title, it is reset
     */
    addNewToDoItemToHTML = ( toDoItem ) => {
        this.toDoListSection.append( toDoItem.getHTMLElement() );
        if( !toDoItem.getIsDone ) this.toDoCountHTML.innerText = ++this.toDoCountNumber;
    };

    /**
     * @function changeIsDoneState
     * This function change the state on the ul HTML element ( that element represents each ToDoItem ), applies a
     * particular style and changes the counter of pending elements when it is necessary
     * @param {*} toDoGlobalElement
     * toDoGlobalElement is the ul HTML element that contains the necessary information of the ToDoItem to 
     * show to the user
     * @param {*} toDoItem 
     * toDoItem is used to make a query to our "database" and change the state correctly
     */
    changeIsDoneState = ( toDoGlobalElement, toDoItem ) => {
        toDoGlobalElement.classList.toggle( 'completed' );
        if( toDoItem.getIsDone ) this.toDoCountHTML.innerText = --this.toDoCountNumber;
        else this.toDoCountHTML.innerText = ++this.toDoCountNumber;
    };

    /**
     * @function removeToDoItemFromHTML
     * @param {*} toDoGlobalElement 
     * toDoGlobalElement is the ul HTML element that contains the necessary information of the ToDoItem to 
     * show to the user
     * @param {*} toDoItemRemoved
     * toDoItemRemoved is used to make a query to our "database" if the element was completed, if that is the case then
     * counter of pending items is not affected, otherwise it is decremented
     */
    removeToDoItemFromHTML = ( toDoGlobalElement, toDoItemRemoved ) => {
        if( !toDoItemRemoved.getIsDone ) this.toDoCountHTML.innerText = --this.toDoCountNumber;
        toDoGlobalElement.remove();
    };

    /**
     * @function updateHTMLListAfterDeleteDoneItem
     * This function update the UI removing all checked items ( items marked as completed )
     */
    updateHTMLListAfterDeleteDoneItem = () => {
        if( this.currentPage === 'Completados' ) this.toDoListSection.innerHTML = '';
        else if( this.currentPage === 'Todos' )
            this.updateHTMLListFromGeneralList( ToDoList.toDoList.flatMap( toDoItem => toDoItem.getId ) );
    };

    /**
     * @function updateHTMLListFilterApplied
     * This function update the elements showed at toDoListSection
     * @param {string} newPage
     * newPage help us to perform the update depending of the current page ( the current page sets the filter to 
     * apply )
     */
    updateHTMLListFilterApplied = ( newPage ) => {
        const isThereAnyCoincidence = ( newPage === 'Todos' ) ? true : false;
        if( this.currentPage === 'Todos' ){
            const predicate = ( newPage === 'Completados' ) ?  ToDoList.filterDoneItem : ToDoList.filterPendingItem;
            const list = ToDoList.toDoList.filter( predicate );
            this.updateHTMLListFromGeneralList( list.flatMap( toDoItem => toDoItem.getId ) );
        }
        else if( this.currentPage === 'Pendientes' )
            this.appendItems( ToDoList.toDoList.filter( ToDoList.filterDoneItem ), isThereAnyCoincidence );
        else
            this.appendItems( ToDoList.toDoList.filter( ToDoList.filterPendingItem ), isThereAnyCoincidence );
        this.currentPage = newPage;
    };
    
    /**
     * @function updateHTMLListFromGeneralList
     * This function is used to remove unnecessary items from the toDoListSection, the aprticular case in which
     * is used is when the user apply a filter and the current page is the wole list of ToDoItems
     * @param {ToDoItem[]} list
     * list parameter is a list of ToDoItem that contains all the ids of the ToDoItems that must remain in the list
     */
    updateHTMLListFromGeneralList = ( list ) => {
        for (let index = ( this.toDoListSection.children.length - 1 ); index >= 0; index--) {
            const liHTMLElement = this.toDoListSection.children[index];
            if( !list.includes( Number( liHTMLElement.dataset.id ) ) ) liHTMLElement.remove();
        }
    }
    
    /**
     * @function appendItems
     * Append ToDoItems that must be in the toDoListSection, it depends of the last filter applied and the current
     * filter selected by the user
     * @param {ToDoItem[]} list 
     * list of items that are appended
     * @param {boolean} isThereAnyCoincidence 
     * this parameter is true if there is any ToDoItem that is on the list returned by the last filter applied and
     * the current filter selected by the user
     */
    appendItems = ( list, isThereAnyCoincidence ) => {
        if( !isThereAnyCoincidence ) this.toDoListSection.innerHTML = '';
        for (const toDoItem of list) {
            this.toDoListSection.append( toDoItem.getHTMLElement() );
        }
    };
};
