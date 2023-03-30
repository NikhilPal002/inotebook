import React from 'react'
import { Link } from 'react-router-dom';

function NoteItem(props) {
    const { note } = props;          // distructuring method
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-item-center'>
                        <h5 className="card-title">{ }note.title</h5>
                        <i className="fa-solid fa-trash-can mx-2"></i>
                        <i className="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                    <p className="card-text"> {note.description} </p>
                    <Link to="#" className="btn btn-primary my-2">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
