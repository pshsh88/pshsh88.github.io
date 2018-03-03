import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({title, description}) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

Jumbotron.propTypes = {
}

export default Jumbotron;