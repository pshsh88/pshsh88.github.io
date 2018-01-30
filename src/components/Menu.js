import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    updateActiveItemName(itemName) {
        this.setState({
            activeItemName: itemName
        });
        this.props.updateActiveMenuName(itemName);
    }
    
    isActiveItem(itemName) {
        return itemName === this.state.activeItemName;
    }
    
    constructor(props) {
        super(props);
        this.state = {
            activeItemName: this.props.activeMenuName
        };
        this.updateActiveItemName = this.updateActiveItemName.bind(this);
        this.isActiveItem = this.isActiveItem.bind(this);
    }
    
    render(){
        return (
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <MenuItem name="Home" active={this.isActiveItem("Home")} updateActiveItemName={this.updateActiveItemName}/>
                    <MenuItem name="Note" active={this.isActiveItem("Note")} updateActiveItemName={this.updateActiveItemName}/>
                    <MenuItem name="Practice" active={this.isActiveItem("Practice")} updateActiveItemName={this.updateActiveItemName}/>
                    <MenuItem name="About" active={this.isActiveItem("About")} updateActiveItemName={this.updateActiveItemName}/>
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