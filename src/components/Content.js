import React from 'react';
import Jumbotron from './Jumbotron';

class Content extends React.Component {
    updateContentBy(menuName) {
        if (menuName === "Home") {
            return (
                <div>
                    <Jumbotron 
                            title="Hello!"
                            description="This page is under construction. please visit again after the updated."/>
                    <div className="container">
                        <img src={require('../img/suzy.jpg')} style={{maxWidth:"100%",height:"auto"}} width="1742" height="1320" filemime="image/jpeg" />
                    </div>
                </div>
            );
        } else if (menuName === "Note") {
            return (
                <div>
                    <div className="left-nav" style={{maxWidth:'20%', minWidth:'200px'}}>
                        <div className="list-group">
                            <a href="#" className="list-group-item">note1</a>
                            <a href="#" className="list-group-item">note2</a>
                            <a href="#" className="list-group-item">note3</a>
                        </div>
                    </div>
                    <div className="note-area">
                    </div>
                </div>
            );
        } else if (menuName === "Practice") {
            return (
                <div>
                    <h2>PRACTICE</h2>
                </div>
            );
        } else if (menuName === "About") {
            return (
                <div>
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
                <div className="content" style={{minHeight:'800px'}}>
                    {this.updateContentBy(this.props.activeMenuName)}
                </div>
        );
    }
}

export default Content;