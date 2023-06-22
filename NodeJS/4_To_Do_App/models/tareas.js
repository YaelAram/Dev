const Tarea = require("./tarea");
const { leerArchivoSync } = require( '../helpers/db-manager' );

class Tareas{
    constructor(){
        this.lista = {};
        try{
            const db = leerArchivoSync();
            const json = JSON.parse( db );
            for( const clave in json ){
                const aux = new Tarea();
                aux.fromObject( json[ clave ] );
                this.lista[ clave ] = aux;
            }
        }
        catch( error ){}
    }

    vacio(){
        return Object.values( this.lista ).length === 0;
    }

    crearTarea( descripcion = '' ){
        const tarea = new Tarea( descripcion );
        this.lista[ tarea.id ] = tarea;
    }

    completar( ...tareas ){
        for( const clave in this.lista ){
            if( tareas.includes( clave ) ) this.lista[ clave ].setCompletado = true;
            else this.lista[ clave ].setCompletado = false;
        }
    }

    borrarTarea( id ){
        delete this.lista[ id ];
    }

    getInquirerChoices( estado = false ){
        let choices = [];
        for( const tarea in this.lista ){
            choices.push( this.lista[tarea].getInquirerItem( estado ) );
        }
        return choices;
    }

    getInquirerChoicesCompletadas(){
        let choices = [];
        for( const tarea in this.lista ){
            if( this.lista[tarea].completado ) choices.push( this.lista[tarea].getInquirerItem() );
        }
        return choices;
    }

    getInquirerChoicesPendientes(){
        let choices = [];
        for( const tarea in this.lista ){
            if( !this.lista[tarea].completado ) choices.push( this.lista[tarea].getInquirerItem() );
        }
        return choices;
    }
}

module.exports = Tareas;
