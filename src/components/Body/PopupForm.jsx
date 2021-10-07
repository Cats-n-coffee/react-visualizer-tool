import React from 'react';

export default function PopupForm(props) {
    const { handleSubmitNew, handleSubmitEdit, type, componentToEdit = {} } = props;
    const [componentName, setComponentName] = React.useState('');
    const [componentProps, setComponentProps] = React.useState('');
    const [componentState, setComponentState] = React.useState('');
    const [componentParent, setComponentParent] = React.useState('');

    if (type === 'edit') {
        console.log('%cpopup form received', 'color: purple', componentToEdit)
    }

    // will use Formik to use:
    // - form pre-fill for type === 'edit'
    // - ability to add multiple props or state

    function submitForm(event) {
        event.preventDefault();
        if (type === 'new') {
            const newData = { componentName, componentProps, componentState, parent: componentParent };
            handleSubmitNew(newData)
        }
        else if (type === 'edit') {
            const editData = {}
            handleSubmitEdit(editData)
        }
    }

    return (
        <form onSubmit={ (e) => submitForm(e) }>
            <h3>{type}</h3>
            <div>
                <label htmlFor="component-name">Component Name</label>
                <input 
                    type="text"
                    value={ componentName }
                    onChange={ (e) => setComponentName(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="component-props">Props</label>
                <input 
                    type="text" 
                    value={ componentProps }
                    onChange={ (e) => setComponentProps(e.target.value)}
                />
                {/* add the ability to add multiple props, store in an array */}
            </div>
            <div>
                <label htmlFor="component-state">State(s)</label>
                <input 
                    type="text" 
                    value={ componentState } 
                    onChange={ (e) => setComponentState(e.target.value) }
                />
                {/* add the ability to add multiple states, store in an array */}
            </div>
            <div>
                <label htmlFor="parent">Select Parent</label>
                <input type="text" value={ componentParent} onChange={ (e) => setComponentParent(e.target.value) }/>
            </div>
            {
                type === 'new' ?
                <button type="submit" >Add to Tree</button>
                : <button type="submit" >Edit Tree</button>
            }
            
        </form>
    )
}