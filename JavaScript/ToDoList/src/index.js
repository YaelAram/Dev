import './css/index.css';
import { ToDoItem, ToDoList } from './classes';
import HTMLHelper from './components/component';

const inputTitle           = document.querySelector( '.new-todo' ),
      toDoListSection      = document.querySelector( '.todo-list' ),
      filterSection        = document.querySelector( '.filters' ),
      clearCompletedButton = document.querySelector( '.clear-completed' ),
      list                 = new ToDoList(),
      htmlHelper           = new HTMLHelper( toDoListSection );

ToDoList.toDoList.forEach( toDoItem => htmlHelper.addNewToDoItemToHTML( toDoItem ) );

inputTitle.addEventListener( 'keyup', ( event ) => {
    if( event.key === 'Enter' ){
        const newToDoItem = new ToDoItem( inputTitle.value );
        list.addItem( newToDoItem );
        htmlHelper.addNewToDoItemToHTML( newToDoItem );
        inputTitle.value = '';
    }
} );

toDoListSection.addEventListener( 'click', ( event ) => {
    const elementName       = event.target.localName,
          toDoGlobalElement = event.target.parentElement.parentElement,
          toDoId            = Number( toDoGlobalElement.dataset.id );

    if( elementName.includes( 'input' ) )
        htmlHelper.changeIsDoneState( toDoGlobalElement, list.markAsCompleted( toDoId ) );
    else if( elementName.includes( 'button' ) )
        htmlHelper.removeToDoItemFromHTML( toDoGlobalElement, list.deleteItemById( toDoId ) );
} );

filterSection.addEventListener( 'click', ( event ) => {
    const button      = event.target,
          currentPage = button.innerText;
    htmlHelper.updateHTMLListFilterApplied( currentPage );
} );

clearCompletedButton.addEventListener( 'click', () => {
    list.deleteDoneItems();
    htmlHelper.updateHTMLListAfterDeleteDoneItem();
} );
