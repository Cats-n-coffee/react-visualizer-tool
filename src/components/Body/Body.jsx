import React from 'react';
import ComponentPopup from './ComponentPopup';

export default function Body(props) {
    const { popup, setPopup } = props;
    return (
        <main>
            this is the body component
            {
                popup ? 
                <ComponentPopup
                    setPopup={ setPopup }
                />
                : null
            }
        </main>
    )
}