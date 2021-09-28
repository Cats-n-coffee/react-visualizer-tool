// eslint-disable-next-line
import styles, { css } from 'styled-components/macro';
import React from 'react';
import ComponentPopup from './ComponentPopup';
import ComponentTreeContainer from './ComponentTreeContainer';
import { BodyStyles } from './styles/bodyStyles';

export default function Body(props) {
    const { popup, setPopup } = props;
    return (
        <main css={ BodyStyles }>
            this is the body component
            {
                popup ? 
                <ComponentPopup
                    setPopup={ setPopup }
                />
                : null
            }
            <ComponentTreeContainer />
        </main>
    )
}