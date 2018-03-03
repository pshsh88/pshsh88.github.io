import React from 'react';
import PropTypes from 'prop-types';

var listGroupItemStyle = {
    borderRadius: '0',
    border: '1'
}

const NoteAsideListItem = ({noteId, selectItem, noteMenuTitle}) => {
    const getNoteName = (nId) => {
        return "#note" + nId;
    }

    const handleClickItem = () => {
        selectItem(noteId, noteMenuTitle);
    }

    return (
        <div>
            <a href={getNoteName(noteId)} 
                className="list-group-item" 
                style={listGroupItemStyle} 
                onClick={handleClickItem}>{noteMenuTitle}</a>
        </div>
    );
}

NoteAsideListItem.propTypes = {
    selectItem: PropTypes.func.isRequired,
    noteId: PropTypes.string.isRequired,
    noteMenuTitle: PropTypes.string
}

export default NoteAsideListItem;