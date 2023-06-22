import React from 'react';
import CounterApp from './components/Counter';
import Welcome from './components/Welcome';

/**
 * Everything that has no dependencies or hook from the component should be out of the function,
 * that improves the performance when React have to refresh the component
 */

function App(){
    return (
        <React.Fragment>
            <Welcome title="Hello World" subtitle="Goodbye World" message={ 123 }/>
        </React.Fragment>
    );
}

export default App;
