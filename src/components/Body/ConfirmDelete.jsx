import React from 'react';

export default function ConfirmDelete(props) {
    const { confirmDelete, setPopup } = props;

    return (
        <div>
            <p>Are you sure you want to delete this component?<br />
            Every children of this component and their children will be removed.</p>
            <button onClick={ () => setPopup(false) }>Cancel</button>
            <button onClick={ () => confirmDelete() }>Confirm</button>
        </div>
    )
}