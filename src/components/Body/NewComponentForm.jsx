// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import { PopupStyles } from './styles/componentPopupStyles';
import PopupForm from './PopupForm';

// This component is used in two places: Navbar and Body
export default function NewComponentForm(props) {
    const { setPopup, type } = props;
    const { insertComponent, updateComponent } = useDataProvider();

    function handleSubmitNew(newComponent) {
        insertComponent(newComponent)
        console.log('submitted', newComponent)
        
    }

    function handleSubmitEdit(editedComponent) {
        console.log('edited component', editedComponent)
        updateComponent()
    }

    return (
        <div css={ PopupStyles }>
            <h2>Component Popup</h2>
            <button onClick={ () => setPopup(false) }>Close</button>
            <PopupForm 
            handleSubmitNew={ handleSubmitNew } 
            handleSubmitEdit={ handleSubmitEdit }
            type={ type }
            />
        </div>
    )
}

// https://stackoverflow.com/questions/28695348/pushing-item-into-a-multi-dimensional-tree-like-structure-in-javascript