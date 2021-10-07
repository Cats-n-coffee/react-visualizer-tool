// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import { findNodeAndRead } from '../../helpers/findNodeInTree';
import PopupForm from './PopupForm';
import { PopupStyles } from './styles/componentPopupStyles';

// This component is used in two places: Navbar and Body
export default function ComponentForm(props) {
    const { setPopup, type, nameToEdit = "" } = props;
    const { insertComponent, updateComponent, data } = useDataProvider();
    const [componentToEdit, setComponentToEdit] = React.useState(null);

    function handleSubmitNew(newComponent) {
        insertComponent(newComponent)
        console.log('submitted', newComponent)
        
    }

    function handleSubmitEdit(editedComponent) {
        console.log('edited component', editedComponent)
        updateComponent()
    }

    React.useEffect(() => {
        if (type === 'edit' && nameToEdit) {
            const node = findNodeAndRead(nameToEdit, data[0])
            console.log('%cNODE is ', 'color: green', node)
            setComponentToEdit(node)
        }  
    }, [nameToEdit, type, data]) 
        
    

    return (
        <div css={ PopupStyles }>
            <h2>Component Popup</h2>
            <button onClick={ () => setPopup(false) }>Close</button>
            <PopupForm 
                handleSubmitNew={ handleSubmitNew } 
                handleSubmitEdit={ handleSubmitEdit }
                componentToEdit={ componentToEdit }
                type={ type }
            />
        </div>
    )
}

// https://stackoverflow.com/questions/28695348/pushing-item-into-a-multi-dimensional-tree-like-structure-in-javascript