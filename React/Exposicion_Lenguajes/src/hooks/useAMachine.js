import { useReducer } from 'react';

import { aMachineReducer } from '../helpers';

export const useAMachine = ( tape ) => {
    const [ machine, dispatch ] = useReducer( aMachineReducer, { state: 'E0', result: '', position: 1, tape } );

    const handleAction = ( action ) => dispatch( { type: action } );

    return {
        ...machine,
        handleAction
    };
};
