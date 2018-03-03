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
    marginLeft: '15px'
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
                    <p style={{color:'#4169E1'}}><b>1. IE8 이하에서의 Date Object 생성</b></p>
                    <p>IE8 이하의 IE 브라우저에서는 Date를 String Parsing하지 못하고 year, month, date,.. 를 각각 파라미터로 넘겨주어 생성해야 한다. 그렇지 않은 경우 NaN 결과가 리턴 된다.</p>
                    <p>*참고 Link<br/>
                        <a href="http://stackoverflow.com/questions/11020658/javascript-json-date-parse-in-ie7-ie8-returns-nan" target="blank">Link1</a>,&nbsp;
                        <a href="http://archer0001.blog.me/110168590373" target="blank">Link2</a>
                    </p>
                
                    <br/>
                    <p style={{color:'#4169E1'}}><b>2. Firefox 한글 Key event 발생 안하는 이슈(keyup, keydown, keypress..)</b></p>
                    <p>firefox 한글 key event 이슈 (일본어도 마찬가지)</p>
                    <p>*참고 Link<br/>
                    <a href="https://github.com/nhnent/fe.javascript/wiki/%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5%EC%8B%9C-%ED%82%A4%EC%9D%B4%EB%B2%A4%ED%8A%B8%EA%B0%80-%EC%9D%B4%EC%83%81%ED%95%B4%EC%9A%94" target="blank">Link1</a>
                    </p>
                    
                    <br/>
                    <p style={{color:'#4169E1'}}><b>3. alert 이후 input 포커싱이 제대로 동작하지 않는 이슈와 setTimeout Trick 참고 자료 </b></p>
                    <p> 
                        input에 입력 값이 없는 경우 alert을 띄우고 다시 input에 포커싱 하는 로직이 크롬에서는 alert이 계속해서 발생, IE 및 Firefox에서는 input에 포커싱이 되지 않는 이슈가 있음<br/>
                        setTimeout Trick을 이용하여 해결
                    </p>
                    <p>*참고 Link<br/>
                    <a href="https://stackoverflow.com/questions/39789997/javascript-i-cant-stop-the-alert-method-in-chrome" target="blank">Link1</a>,&nbsp;
                    <a href="https://www.quora.com/What-does-setTimeout-with-a-0ms-delay-do-Is-this-some-trick-to-spawn-a-new-thread-but-why?page_id=1#!n=18" target="blank">Link2</a>
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
            noteMenuTitle:'JavaScript Tip'
        }
        this.selectItem = this.selectItem.bind(this);
        this.getNoteSection = this.getNoteSection.bind(this);
    }
    
    render(){
         return (
            <div className="container">
                <aside style={asideStyle}>
                    <div className="list-group">
                        <NoteAsideListItem noteId="1" selectItem={this.selectItem} noteMenuTitle="JavaScript Tip"/>
                        <NoteAsideListItem noteId="2" selectItem={this.selectItem} noteMenuTitle="ES6 정리"/>
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