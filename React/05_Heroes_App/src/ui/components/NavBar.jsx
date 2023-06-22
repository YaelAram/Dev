import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

const activeClass = ( { isActive } ) => ( isActive ) ? "active" : undefined;

export function NavBar() {
    const navigate = useNavigate();
    const { state, logout } = useContext( AuthContext );

    const handleLogout = () => {
        logout();
        navigate( '/', { replace: true } );
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="marvel" className={ activeClass }>Marvel</NavLink>
                </li>
                <li>
                    <NavLink to="dc" className={ activeClass }>DC</NavLink>
                </li>
                <li>
                    <NavLink to="search" className={ activeClass }>Search</NavLink>
                </li>
                <li>
                    <input 
                        type="button"
                        value={ `Logout ${ state.name }` }
                        className="logout-button"
                        onClick={ handleLogout } 
                    />
                </li>
            </ul>
        </nav>
    );
};
