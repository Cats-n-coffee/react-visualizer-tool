import React from 'react';

export default function ConfirmDelete(props) {
    const { confirmDelete, setPopup } = props;

    return (
        <div>
            <p>Are you sure you want to delete this component?</p>
            <button onClick={ () => setPopup(false) }>Cancel</button>
            <button onClick={ () => confirmDelete() }>Confirm</button>
        </div>
    )
}