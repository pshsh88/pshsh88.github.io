import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    updateActiveMenuName(menuName) {
        this.props.updateActiveMenuName(menuName);
    }
    
    isActiveMenu(menuName) {
        return menuName === this.props.activeMenuName;
    }
    
    constructor(props) {
        super(props);
        this.updateActiveMenuName = this.updateActiveMenuName.bind(this);
        this.isActiveMenu = this.isActiveMenu.bind(this);
    }
    
    render(){
        return (
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <MenuItem name="Home" active={this.isActiveMenu("Home")} updateActiveMenuName={this.updateActiveMenuName}/>
                    <MenuItem name="Note" active={this.isActiveMenu("Note")} updateActiveMenuName={this.updateActiveMenuName}/>
                    <MenuItem name="Practice" active={this.isActiveMenu("Practice")} updateActiveMenuName={this.updateActiveMenuName}/>
                    <MenuItem name="About" active={this.isActiveMenu("About")} updateActiveMenuName={this.updateActiveMenuName}/>
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {
    updateActiveMenuName: PropTypes.func.isRequired,
    activeMenuName: PropTypes.string.isRequired
}

export default Menu;