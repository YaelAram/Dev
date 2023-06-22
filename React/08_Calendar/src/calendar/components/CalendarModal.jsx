import React, { useState, useEffect } from 'react';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

import { addHours, differenceInSeconds } from 'date-fns';
import es from 'date-fns/locale/es';

import Modal from 'react-modal';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";

import { useUIStore, useCalendarStore } from '../../hooks';

registerLocale( 'es', es );

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement( '#root' );

export function CalendarModal() {
    const { isDateModalOpen, closeDateModal } = useUIStore();
    const { activeEvent, setActiveEvent, startSavingEvent } = useCalendarStore();
    const [ formValues, setFormValues ] = useState( {
        title: '',
        notes: '',
        start: new Date(),
        end: addHours( new Date(), 2 )
    } );

    useEffect( () => {
        if( activeEvent ) setFormValues( { ...activeEvent } );
    }, [ activeEvent ] );

    const handleInputChange = ( { target } ) => {
        setFormValues( {
            ...formValues,
            [ target.name ]: target.value
        } );
    };

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const difference = differenceInSeconds( formValues.end, formValues.start )

        if( isNaN( difference ) || difference < 1 ) {
            Swal.fire( 'Date error', 'End date must happen after Start date', 'error' );
            return;
        }

        if( !formValues.title.length ) {
            Swal.fire( 'Title field error', 'Title field is required', 'error' );
            return;
        }

        await startSavingEvent( formValues );
        closeDateModal();
    };

    const onDateChange = ( event, changing ) => {
        setFormValues( {
            ...formValues,
            [ changing ]: event
        } );
    };

    const onCloseModal = () => {
        if( !activeEvent?._id ) setActiveEvent( null );
        closeDateModal();
    };

    return (
        <Modal
            isOpen={ isDateModalOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 } >
            
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={ handleSubmit }>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker 
                        selected={ formValues.start }
                        className="form-control"
                        onChange={ ( event ) => onDateChange( event, 'start' ) }
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora' />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker 
                        minDate={ formValues.start }
                        selected={ formValues.end }
                        className="form-control"
                        onChange={ ( event ) => onDateChange( event, 'end' ) }
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora' />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ formValues.notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
            
        </Modal>
    );
};
