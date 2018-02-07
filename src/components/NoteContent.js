import React from 'react';
import PropTypes from 'prop-types';
import NoteAsideListItem from './NoteAsideListItem'

var asideStyle = { 
    minWidth: '150px',
    float: 'left'
}

var sectionStyle = {
    width: 'calc(100% - 200px)',
    float: 'left',
    marginLeft: '10px'
}

class NoteContent extends React.Component {
    selectItem(noteId, noteMenuTitle) {
        this.setState({
            noteId:noteId,
            noteMenuTitle:noteMenuTitle
        });
    }
   
    getNoteSection() {
        if (this.state.noteId === '1') {    // JAVA
            return (
                <div>
                    <br/>
                    <p style={{color:'#4169E1'}}><b>[TIP] IE8 이하에서의 Date Object 생성</b></p>
                    <p>IE8 이하의 IE 브라우저에서는 Date를 String Parsing하지 못하고 year, month, date,.. 를 각각 파라미터로 넘겨주어 생성해야 한다. 그렇지 않은 경우 NaN 결과가 리턴 된다.</p>
                    <p>*참고 Link<br/>
                        <a href="http://stackoverflow.com/questions/11020658/javascript-json-date-parse-in-ie7-ie8-returns-nan" target="blank">Link1</a>,&nbsp;
                        <a href="http://archer0001.blog.me/110168590373" target="blank">Link2</a>
                    </p>
                </div>
            );
        } else if (this.state.noteId === '2') {
            return (
                <div>
                    <p></p>
                </div>
            );
        }  else if (this.state.noteId === '3') {
            return (
                <div>
                    <p></p>
                </div>
            );
        }
    }
    
    constructor(props) {
        super(props);
        this.state = {
            noteId:'1',
            noteMenuTitle:'JavaScript'
        }
        this.selectItem = this.selectItem.bind(this);
        this.getNoteSection = this.getNoteSection.bind(this);
    }
    
    render(){
         return (
            <div className="container">
                <aside style={asideStyle}>
                    <div className="list-group">
                        <NoteAsideListItem noteId="1" selectItem={this.selectItem} noteMenuTitle="JavaScript"/>
                        <NoteAsideListItem noteId="2" selectItem={this.selectItem} noteMenuTitle="React"/>
                        <NoteAsideListItem noteId="3" selectItem={this.selectItem} noteMenuTitle="Git"/>
                    </div>
                </aside>
                <section style={sectionStyle}>
                    <h2>{this.state.noteMenuTitle}</h2>
                    {this.getNoteSection()}
                </section>
            </div>
        );
    }
}

export default NoteContent;