// eslint-disable-next-line
import styles, { css } from 'styled-components/macro';
import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import ComponentTreeContainer from './ComponentTreeContainer';
import ComponentForm from './ComponentForm';
import ConfirmDelete from './ConfirmDelete';
import { BodyStyles } from './styles/bodyStyles';

export default function Body(props) {
    const { data, removeComponent } = useDataProvider();
    const [popup, setPopup] = React.useState(false);
    const [popupType, setPopupType] = React.useState('');
    const [nameToDelete, setNameToDelete] = React.useState('');
    const [nameToEdit, setNameToEdit] = React.useState('');
    console.log('body rendering')

    function handleAddClick() {
        setPopup(true);
        setPopupType("new");
    }

    function handleEditClick(name) {
        setPopup(true);
        setPopupType("edit");
        setNameToEdit(name);
    }

    function handleDelete(name) {
        setPopup(true);
        setPopupType('delete');
        console.log('%cpopup for ', 'color: red', name);
        setNameToDelete(name);
    }

    function confirmDelete() {
        console.log('%cdeleting component', 'color: red');
        setPopup(false);
        removeComponent(nameToDelete);
        setNameToDelete('');
    }

    React.useEffect(() => {
        if (popup === false) {
            setPopupType('');
            setNameToEdit('');
        }
    }, [popup])

    return (
        <main css={ BodyStyles }>
            this is the body component
            <ComponentTreeContainer 
                handleAddClick={ handleAddClick }
                handleEditClick={ handleEditClick }
                handleDelete={ handleDelete }
                data={ data }
            />
            {
                (popup && popupType === 'new') || (popup && popupType === 'edit') ?
                <ComponentForm 
                    setPopup={ setPopup } 
                    type={ popupType } 
                    nameToEdit={ nameToEdit }
                />
                : null
            }
            {
                popup && popupType === 'delete' ?
                <ConfirmDelete 
                    confirmDelete={ confirmDelete } 
                    setPopup={ setPopup } 
                    nameToDelete={ nameToDelete }
                />
                : null
            }
        </main>
    )
}