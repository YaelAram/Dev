import React from 'react';
import { useAuthStore } from '../../hooks';

export function NavBar() {
    const { user, startLogOut } = useAuthStore();

    return (
        <div className='navbar navbar-dark bg-dark mb-4 px-4'>
            <span className='navbar-brand'>
                <i className='fas fa-calendar-alt'></i>
                &nbsp;
                { user.name }
            </span>
            <button className='btn btn-outline-danger' onClick={ () => startLogOut() }>
                <span className='fas fa-sign-out-alt'>Salir</span>
            </button>
        </div>
    );
};
