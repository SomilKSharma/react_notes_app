import React from 'react'
import { Link } from 'react-router-dom'


const AddButton = () => {
    return (
        <Link to="/note/new" className='floating-button'>
            ➕
        </Link>
    )
}

export default AddButton