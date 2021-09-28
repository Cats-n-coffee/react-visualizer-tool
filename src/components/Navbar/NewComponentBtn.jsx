import React from 'react';


export default function NewComponentBtn(props) {
    const { setPopup } = props;
    return (
        <button onClick={ () => setPopup(true) }>Add Component</button>
    )
}

/*
This component allows to add a component to the tree
It shows a popup that promps the user where they would like
to add the new component.
If the new component is the first one, it is automatically added
as the root component.
*/