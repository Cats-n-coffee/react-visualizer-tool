import React from 'react';

const DataContext = React.createContext();
DataContext.displayName = 'DataContext';

export default function DataProvider(props) {
    const [data, setData] = React.useState({});

    function insertComponent(component) {
        const { componentName, componentProps, componentState } = component;
        let newComponent = {};
    
        // State is empty, this is the first component we add
        if (Object.keys(data).length === 0) {
            newComponent = {
                root: {
                    name: componentName,
                    parent: null,
                    props: componentProps,
                    state: componentState,
                    children: []
                }
            }
            setData(newComponent)
        }
        // State already had children
        else {
            // we need to add the parent to this incoming child, lookup?
            // we need to update the parent's children with this incoming child
            
        }
    }

    // Need a function to insert multiple children to one parent

    function updateComponent(component) {
        console.log('update')
    }

    function removeComponent(component) {

    }

    const values = {data, setData, insertComponent};

    return <DataContext.Provider value={values} {...props}/>
}

export function useDataProvider() {
    const data = React.useContext(DataContext);

    if (!data) {
        throw new Error('useDataProvider must be used inside DataProvider.')
    }

    return data;
}