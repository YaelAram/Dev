const socketController = ( socket ) => {
    socket.on( 'send', ( payload, callback ) => {
        socket.broadcast.emit( 'receive', payload );
        callback( '1AS5A4S2A' );
    } );
};

module.exports = socketController;
