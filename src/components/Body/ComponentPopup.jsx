// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import { Popup } from './styles/componentPopupStyles';

export default function ComponentPopup(props) {
    const { setPopup } = props;
    const { data, setData } = useDataProvider();

    return (
        <div css={ Popup }>
            <h2>Component Popup</h2>
            <button onClick={ () => setPopup(false) }>Close</button>
        </div>
    )
}