// eslint-disable-next-line
import styles, { css } from 'styled-components/macro';
import React from 'react';
import ComponentTreeContainer from './ComponentTreeContainer';
import { BodyStyles } from './styles/bodyStyles';
import { useDataProvider } from '../../context/DataProvider';

export default function Body(props) {
    const { data } = useDataProvider();
    const { setPopup, setType } = props;
    
    return (
        <main css={ BodyStyles }>
            this is the body component
            <ComponentTreeContainer 
                setPopup={ setPopup } 
                setType={ setType } 
                data={ data }
            />
        </main>
    )
}