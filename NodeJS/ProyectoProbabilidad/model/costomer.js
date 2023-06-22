const { model, Schema } = require( 'mongoose' );

const costomerSchema = Schema( {
    value: {
        type: Number,
        required: [ true, 'Value field required' ]
    },
    age: {
        type: Number,
        required: [ true, 'Age field required' ]
    },
    temperature: {
        type: Number,
        required: [ true, 'Temperature field required' ]
    },
    drink: {
        type: Number,
        required: [ true, 'Drink field required' ]
    }
} );

module.exports = model( 'Costumer', costomerSchema );
