// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import { PopupStyles } from './styles/componentPopupStyles';
import PopupForm from './PopupForm';

export default function NewComponentForm(props) {
    const { setPopup, type } = props;
    const { insertComponent } = useDataProvider();

    function handleSubmit(event, newComponent) {
        event.preventDefault();
        insertComponent(newComponent)
        console.log('submitted', newComponent)
        
    }

    return (
        <div css={ PopupStyles }>
            <h2>Component Popup</h2>
            <button onClick={ () => setPopup(false) }>Close</button>
            <PopupForm handleSubmit={ handleSubmit } type={ type }/>
        </div>
    )
}

// https://stackoverflow.com/questions/28695348/pushing-item-into-a-multi-dimensional-tree-like-structure-in-javascript