import React from 'react';
import PropTypes from 'prop-types';

export function TopicSectionItem( { title, url } ) {
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    );
};

TopicSectionItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
