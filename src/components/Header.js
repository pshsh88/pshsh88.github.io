import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';

class Header extends React.Component {
    updateActiveMenuName(menuName) {
        this.props.updateContent(menuName);
    }
    
    constructor(props) {
        super(props);
        this.updateActiveMenuName = this.updateActiveMenuName.bind(this);
    }
    
    render(){
        return (
            <div className="header">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="javascript:void(0);">{this.props.title}</a>
                        </div>
                        <Menu activeMenuName={this.props.activeMenuName} updateActiveMenuName={this.updateActiveMenuName}/>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    updateContent: PropTypes.func.isRequired,
    activeMenuName: PropTypes.string.isRequired,
    title : PropTypes.string
}

export default Header;