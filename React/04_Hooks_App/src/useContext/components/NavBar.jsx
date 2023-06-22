import React from 'react';
import { NavLink } from 'react-router-dom';

const activeClass = ( { isActive } ) => ( isActive ) ? "active" : undefined;

export function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={ activeClass }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="about" className={ activeClass }>About</NavLink>
                </li>
                <li>
                    <NavLink to="login" className={ activeClass }>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}
