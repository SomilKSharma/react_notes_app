import React from 'react'
import notes from '../assets/data'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NotePage = () => {
    const { id } = useParams()
    const note = notes.find(note => Number(note.id) === Number(id))
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        ↩
                    </Link>
                </h3>
            </div>
            <textarea value={note.body}>

            </textarea>
        </div>
    )
}

export default NotePage