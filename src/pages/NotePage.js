import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const NotePage = () => {

    let [note, setNote] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getNote()
    }, [id]);

    let getNote = async () => {
        if (id === 'new') {
            return
        }
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNode = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`, {
            method: "DELETE",
            'headers': {
                'Content-Type': 'application/json'
            }
        })

    }


    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to={'/'}>
                        ↩
                    </Link>

                </h3>
                <button onClick={deleteNode}>
                    ❌
                </button>
            </div>
            <textarea
                onChange={(e) => {
                    setNote({
                        ...note, 'body': e.target.value
                    })
                    updateNote()


                }} value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage