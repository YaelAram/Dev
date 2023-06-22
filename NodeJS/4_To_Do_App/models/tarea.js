const { v4: uuidv4 } = require( 'uuid' );

class Tarea{
    constructor( descripcion = '' ){
        this.id = uuidv4();
        this.descripcion = descripcion;
        this.completado = false;
    }

    get getID(){
        return this.id;
    }

    get getDescripcion(){
        return this.descripcion;
    }
    
    get getCompletado() {
        return this.completado;
    }

    set setCompletado( completado ) {
        this.completado = completado;
    }

    fromObject( { id, descripcion, completado } ){
        this.id = id;
        this.descripcion = descripcion;
        this.completado = completado;
    }

    getInquirerItem( estado = false ){
        if( estado ){
            return {
                value: this.id,
                name: this.descripcion,
                checked: this.completado
            }
        }
        else{
            return {
                value: this.id,
                name: this.descripcion
            }
        }
    }
};

module.exports = Tarea;
