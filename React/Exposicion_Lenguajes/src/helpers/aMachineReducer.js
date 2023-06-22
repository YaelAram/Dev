export const aMachineReducer = ( machine, { type } ) => {
    switch( type ) {
        case 'E0-0':
            return { state: 'E0', result: 1, position: ( machine.position + 1 ), tape: machine.tape };
        case 'E0-1':
            return { state: 'E0', result: 0, position: ( machine.position + 1 ), tape: machine.tape };
        case 'E0-B':
            return { state: 'E1', result: '', position: ( machine.position - 1 ), tape: machine.tape };
        case 'E1-0':
            return { state: 'E1', result: '', position: ( machine.position - 1 ), tape: machine.tape };
        case 'E1-1':
            return { state: 'E1', result: '', position: ( machine.position - 1 ), tape: machine.tape };
        case 'E1-B':
            return { state: 'E2', result: '' };
        default:
            return machine;
    }
};
