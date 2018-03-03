import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';

const Header = ({title, activeMenuName, updateContent}) => {
    const updateActiveMenuName = (menuName) => {
        updateContent(menuName);
    }
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
                        <a className="navbar-brand" href="javascript:void(0);">{title}</a>
                    </div>
                    <Menu activeMenuName={activeMenuName} updateActiveMenuName={updateActiveMenuName}/>
                </div>
            </nav>
        </div>
    );
}

Header.propTypes = {
    updateContent: PropTypes.func.isRequired,
    activeMenuName: PropTypes.string.isRequired,
    title : PropTypes.string
}

export default Header;