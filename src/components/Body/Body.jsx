// eslint-disable-next-line
import styles, { css } from 'styled-components/macro';
import React from 'react';
import ComponentTreeContainer from './ComponentTreeContainer';
import { BodyStyles } from './styles/bodyStyles';
import { useDataProvider } from '../../context/DataProvider';
import NewComponentForm from './NewComponentForm';

export default function Body(props) {
    const { data } = useDataProvider();
    const [popup, setPopup] = React.useState(false);
    const [popupType, setPopupType] = React.useState('');
    console.log('body rendering')

    function handleAddClick() {
        setPopup(true);
        setPopupType("new");
    }

    function handleEditClick() {
        setPopup(true);
        setPopupType("edit");
    }

    React.useEffect(() => {
        if (popup === false) {
            setPopupType('');
        }
    }, [popup])

    return (
        <main css={ BodyStyles }>
            this is the body component
            <ComponentTreeContainer 
                handleAddClick={ handleAddClick }
                handleEditClick={ handleEditClick }
                data={ data }
            />
            {
                popup ?
                <NewComponentForm setPopup={ setPopup } type={ popupType } />
                : null
            }
        </main>
    )
}