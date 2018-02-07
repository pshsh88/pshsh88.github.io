import React from 'react';
import PropTypes from 'prop-types';

var listGroupItemStyle = {
    borderRadius: '0',
    border: '1'
}

class NoteAsideListItem extends React.Component {
    getNoteName(noteId) {
        return "#note" + noteId;
    }

    selectItem() {
        this.props.selectItem(this.props.noteId, this.props.noteMenuTitle);
    }
    
    constructor(props) {
        super(props);
        this.getNoteName = this.getNoteName.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }
    
    render() {
        return (
            <div>
                <a href={this.getNoteName(this.props.noteId)} 
                    className="list-group-item" 
                    style={listGroupItemStyle} 
                    onClick={this.selectItem}>{this.props.noteMenuTitle}</a>
            </div>
        );
    }
}

NoteAsideListItem.propTypes = {
    selectItem: PropTypes.func.isRequired,
    noteId: PropTypes.string.isRequired,
    noteMenuTitle: PropTypes.string
}

export default NoteAsideListItem;