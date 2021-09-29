import React from 'react';

export default function PopupForm(props) {
    const { handleSubmit, type } = props;
    const [componentName, setComponentName] = React.useState('');
    const [componentProps, setComponentProps] = React.useState('');
    const [componentState, setComponentState] = React.useState('');

    return (
        <form onSubmit={ (e) => handleSubmit(e, { componentName, componentProps, componentState }) }>
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
            <button type="submit" >Add Component</button>
        </form>
    )
}