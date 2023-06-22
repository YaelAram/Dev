import { useReducer } from 'react';

import { cMachineReducer } from '../helpers';

export const useCMachine = ( tape ) => {
    const [ machine, dispatch ] = useReducer( cMachineReducer, { state: 'E0', result: '', position: 1, tape } );

    const handleAction = ( action ) => dispatch( { type: action } );
    const handleExit = () => dispatch( { type: 'EXIT' } );

    return {
        ...machine,
        handleAction,
        handleExit
    };
};
