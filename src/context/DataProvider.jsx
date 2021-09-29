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
                name: componentName,
                parent: null,
                props: componentProps,
                state: componentState,
                children: []
            }
        }
        // State already had children
        else {
            // we need to add the parent to this incoming child, lookup?
            // we need to update the parent's children with this incoming child
        }
    }

    function updateComponent(component) {
        console.log('update')
    }

    const values = {data, setData};

    return <DataContext.Provider value={values} {...props}/>
}

export function useDataProvider() {
    const data = React.useContext(DataContext);

    if (!data) {
        throw new Error('useDataProvider must be used inside DataProvider.')
    }

    return data;
}