import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NotePage = () => {

    let [note, setNote] = useState(null)

    const { id } = useParams()
    useEffect(() => {
        getNote()
    }, []);

    let getNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        ↩
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage