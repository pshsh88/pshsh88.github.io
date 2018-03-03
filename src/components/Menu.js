import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const Menu = ({activeMenuName, updateActiveMenuName}) => {
    const handleUpdateMenu = (menuName) => {
        updateActiveMenuName(menuName);
    }
    
    const isActiveMenu = (menuName) => {
        return menuName === activeMenuName;
    }
    
    return (
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <MenuItem name="Home" active={isActiveMenu("Home")} updateActiveMenuName={handleUpdateMenu}/>
                    <MenuItem name="Note" active={isActiveMenu("Note")} updateActiveMenuName={handleUpdateMenu}/>
                    <MenuItem name="Practice" active={isActiveMenu("Practice")} updateActiveMenuName={handleUpdateMenu}/>
                    <MenuItem name="About" active={isActiveMenu("About")} updateActiveMenuName={handleUpdateMenu}/>
                </ul>
            </div>
        );
}

Menu.propTypes = {
    updateActiveMenuName: PropTypes.func.isRequired,
    activeMenuName: PropTypes.string.isRequired
}

export default Menu;