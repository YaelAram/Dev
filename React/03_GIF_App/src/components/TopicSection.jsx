import React from 'react';
import PropTypes from 'prop-types';

import { useFetch } from '../hooks/useFetch';
import { TopicSectionItem } from './TopicSectionItem';

export function TopicSection( { topic, onDeleteTopic } ) {
    const images = useFetch( topic );

    const handleOnClickDelete = () => {
        onDeleteTopic( topic );
    };

    return (
        <section>
            <h2>{ topic }</h2>
            <input type="button" value="Delete Topic" onClick={ handleOnClickDelete } />
            <div className="card-grid">
                { images.map( ( image ) => <TopicSectionItem key={ image.id } { ...image } /> ) }
            </div>
        </section>
    );
};

TopicSection.propTypes = {
    topic: PropTypes.string.isRequired,
    onDeleteTopic: PropTypes.func.isRequired
}
