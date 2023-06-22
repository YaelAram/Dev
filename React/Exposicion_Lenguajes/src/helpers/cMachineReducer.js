export const cMachineReducer = ( machine, { type } ) => {
    switch( type ) {
        case 'E0-0':
            return { state: 'E0', result: 1, position: ( machine.position + 1 ), tape: machine.tape };
        case 'E0-1':
            return { state: 'E0', result: 0, position: ( machine.position + 1 ), tape: machine.tape };
        case 'E0-B':
            return { state: 'E1', result: '', position: ( machine.position - 1 ), tape: machine.tape };
        case 'EXIT':
            return { ...machine, [ 'state' ]: 'E2' };
        default:
            return machine;
    }
};
