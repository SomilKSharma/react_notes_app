import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton';

const NotesListPage = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, []);

    let getNotes = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()
        console.log(data)
        setNotes(data)
    }

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
            <AddButton />
        </div>
    )
}

export default NotesListPage