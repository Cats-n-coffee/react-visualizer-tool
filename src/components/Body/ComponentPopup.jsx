// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import { PopupStyles } from './styles/componentPopupStyles';
import PopupForm from './PopupForm';

export default function ComponentPopup(props) {
    const { setPopup } = props;
    const { data, setData } = useDataProvider();

    function handleSubmit(event, newComponent) {
        event.preventDefault();
        console.log('inner function', newComponent)
        if (Object.keys(data).length === 0) {
            console.log('data was empty')
            setData(newComponent)
        }
        console.log('submitted', newComponent)
        
    }

    return (
        <div css={ PopupStyles }>
            <h2>Component Popup</h2>
            <button onClick={ () => setPopup(false) }>Close</button>
            <PopupForm handleSubmit={ handleSubmit }/>
        </div>
    )
}