import React from 'react';
import PropTypes from 'prop-types';

function Welcome( { title, subtitle, message } ) {
    return (
        <React.Fragment>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <p>{ message }</p>
        </React.Fragment>
    );
};

Welcome.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    message: PropTypes.number.isRequired
};

export default Welcome;
