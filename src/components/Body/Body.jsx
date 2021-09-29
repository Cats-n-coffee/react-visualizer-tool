// eslint-disable-next-line
import styles, { css } from 'styled-components/macro';
import React from 'react';
import ComponentTreeContainer from './ComponentTreeContainer';
import { BodyStyles } from './styles/bodyStyles';

export default function Body(props) {
    const { setPopup, setType } = props;
    
    return (
        <main css={ BodyStyles }>
            this is the body component
            <ComponentTreeContainer setPopup={ setPopup } setType={ setType }/>
        </main>
    )
}