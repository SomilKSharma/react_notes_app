import notes from '../assets/data'
import React from 'react'
import ListItem from '../components/ListItem'


const NotesListPage = () => {
    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className="notes-title">
                    &#9782; NOTES
                </h2>
                <p className="notes-count">
                    {notes.length}
                </p>
            </div>

            <div className='notes-list'>
                {notes.map((note, index) => (
                    <h2 key={index}>
                        <ListItem note={note} />
                    </h2>
                ))}
            </div>
        </div>
    )
}

export default NotesListPage