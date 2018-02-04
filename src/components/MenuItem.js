import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    updateActivation() {
        this.props.updateActiveMenuName(this.props.name);
    }
    
    getLink(name) {
        return "#" + (name ? name.toLowerCase() : "");
    }
    
    constructor(props) {
        super(props);
        this.updateActivation = this.updateActivation.bind(this);
        this.getLink = this.getLink.bind(this);
    }
    
    render(){
        return (
            <li className={this.props.active ? "active" : ""}><a href={this.getLink(this.props.name)} onClick={this.updateActivation}>{this.props.name}</a></li>
        );
    }
}

MenuItem.propTypes = {
    updateActiveMenuName: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default MenuItem;