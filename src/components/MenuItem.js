import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({name, active, updateActiveMenuName}) => {
    const updateActivation = () => {
        updateActiveMenuName(name);
    }
    
    const getLink = (name) => {
        return "#" + (name ? name.toLowerCase() : "");
    }
    
    return (
        <li className={active ? "active" : ""}><a href={getLink(name)} onClick={updateActivation}>{name}</a></li>
    );
}

MenuItem.propTypes = {
    updateActiveMenuName: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default MenuItem;