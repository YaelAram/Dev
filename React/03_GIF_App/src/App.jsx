import React, { Fragment, useState } from 'react';

import { SearchBar } from './components/SearchBar';
import { TopicSection } from './components/TopicSection';

export function App() {
    const [ topics, setTopics ] = useState( [] );

    const handleAddTopic = ( newTopic ) => {
        setTopics( ( prevTopics ) => {
            const index = prevTopics.findIndex( ( topic ) => topic === newTopic );
            if( index === -1 ) return [ newTopic, ...prevTopics ];
            else if( index === 0 ) return [ ...prevTopics ];
            else{
                const [ repeatedTopic ] = prevTopics.splice( index, 1 );
                return [ repeatedTopic, ...prevTopics ];
            }
        } );
    };

    const handleRemoveTopic = ( topicDelete ) => {
        const updatedTopics = topics.filter( ( topic ) => topicDelete !== topic );
        setTopics( updatedTopics );
    };

    return (
        <Fragment>
            <h1>React GIF App</h1>
            <SearchBar onAddTopic={ handleAddTopic } />
            { topics.map( ( topic ) => <TopicSection key={ topic } topic={ topic } onDeleteTopic={ handleRemoveTopic } /> ) }
        </Fragment>
    );
};
