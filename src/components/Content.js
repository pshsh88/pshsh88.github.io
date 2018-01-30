import React from 'react';

class Content extends React.Component {
    updateContentBy(menuName) {
        if (menuName === "Home") {
            return (
                <div className="jumbotron">
                    <div className="container">
                        <h1>Hello!</h1>
                        <p>This page is under construction. please visit again after the updated.</p>
                    </div>
                </div>
            );
        } else if (menuName === "Note") {
            return (
                <div style={{padding:48 + 'px'}}>
                    <h2>NOTE</h2>
                </div>
            );
        } else if (menuName === "Practice") {
            return (
                <div style={{padding:48 + 'px'}}>
                    <h2>PRACTICE</h2>
                </div>
            );
        } else if (menuName === "About") {
            return (
                <div style={{padding:48 + 'px'}}>
                    <h2>ABOUT</h2>
                </div>
            );
        }           
    }
    
    constructor(props) {
        super(props);
        this.state = {
          activeMenuName: this.props.activeMenuName 
        };
        this.updateContentBy = this.updateContentBy.bind(this);
    }
    
    render(){
        return (
                <div className="content">
                    {this.updateContentBy(this.props.activeMenuName)}
                </div>
        );
    }
}

export default Content;