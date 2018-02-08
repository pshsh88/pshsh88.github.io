import React from 'react';
import Jumbotron from './Jumbotron';
import NoteContent from './NoteContent';

var listGroupItemStyle = {
    borderRadius: '0',
    border: '1'
}

var asideStyle = { 
    minWidth: '150px',
    float: 'left'
}

var sectionStyle = {
    width: 'auto',
    float: 'left',
    marginLeft: '10px'
}

class Content extends React.Component {
    updateContentBy(menuName) {
        if (menuName === "Home") {
            return (
                <div>
                    <Jumbotron 
                            title="Story of PSH"
                            description="Hello. This page is under construction. Please visit again after the updated."/>
                    <div className="container">
                        <img src={require('../img/suzy.jpg')} style={{maxWidth:"100%",height:"auto"}} width="1742" height="1320" filemime="image/jpeg" />
                    </div>
                </div>
            );
        } else if (menuName === "Note") {
            return (
                <NoteContent />
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