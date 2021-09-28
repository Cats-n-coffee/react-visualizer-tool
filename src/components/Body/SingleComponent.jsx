// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { SingleComponentStyled } from './styles/componentStyles';

export default function SingleComponent(props) {
    const { component } = props;

    return (
        <article css={ SingleComponentStyled }>
            <h3>{component.componentName}</h3>
            {
                component.componentProps ? 
                <p>{component.componentProps}</p>
                : null
            }
            {
                component.componentState ?
                <p>{component.componentState}</p>
                : null
            }
        </article>
    )
}