const onSpan = document.querySelector( '#on' );
const offSpan = document.querySelector( '#off' );
const inputText = document.querySelector( '#message' );
const section = document.querySelector( 'section' );

const socket = io();
const dateFormat = new Intl.DateTimeFormat( 'es-MX', { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
} );

const createMessage = ( { message = '', time }, ownMessage = false ) => {
    const date = new Date( time );
    const div = document.createElement( 'div' );
    div.classList.add( ( ownMessage ) ? 'ownMessage' : 'newMessage' );
    div.innerHTML = `<p class="message">${ message }</p>
    <p class="date">${ dateFormat.format( date ) }</p>`;
    section.appendChild( div );
};

socket.on( 'connect', () => {
    onSpan.style.display = '';
    offSpan.style.display = 'none';
} );

socket.on( 'disconnect', () => {
    onSpan.style.display = 'none';
    offSpan.style.display = '';
} );

socket.on( 'receive', ( payload ) => {
    createMessage( payload, false );
} );

document.querySelector( '#send' ).addEventListener( 'click', ( event ) => {
    const payload = {
        message: inputText.value,
        time: new Date().getTime()
    };
    inputText.value = '';
    socket.emit( 'send', payload, ( id ) => {
        if( !id ) console.log( 'Error while sending message' );
        else createMessage( payload, true );
    } );

} );
