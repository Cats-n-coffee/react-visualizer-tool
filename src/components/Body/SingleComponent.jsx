// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { SingleComponentStyled } from './styles/componentStyles';

export default function SingleComponent(props) {
    const { component, setPopup, setType } = props;
    const [showOptions, setShowOptions] = React.useState(false);
console.log('singlecomp', component)

    function handleAddClick() {
        setPopup(true);
        setType("component-add-form");
    }

    function handleEditClick() {
        setPopup(true);
        setType("component-edit-form");
    }

    return (
        <article 
            css={ SingleComponentStyled }
            onMouseEnter={ () => setShowOptions(true) }
            onMouseLeave={ () => setShowOptions(false) }
        >
            <h3>{component.name}</h3>
            {
                component.props ? 
                <p>{component.props}</p>
                : null
            }
            {
                component.state ?
                <p>{component.state}</p>
                : null
            }
            {
                showOptions ?
                <div>
                    <button onClick={ () => handleAddClick() }>Add Component</button>
                    <button onClick={ () => handleEditClick() }>Edit Component</button>
                </div>
                : null
            }
        </article>
    )
}