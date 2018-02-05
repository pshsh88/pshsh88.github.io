import React from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

Jumbotron.propTypes = {
}

export default Jumbotron;