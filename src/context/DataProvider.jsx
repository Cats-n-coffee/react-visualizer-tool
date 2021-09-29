import React from 'react';
import { findNodeInTree } from '../helpers/findNodeInTree';

const DataContext = React.createContext();
DataContext.displayName = 'DataContext';

export default function DataProvider(props) {
    const [data, setData] = React.useState({});

    function insertComponent(component) {
        const { componentName, componentProps, componentState, parent } = component;
        //let newComponent = {};
    console.log('this is context')
        // State is empty, this is the first component we add
        if (Object.keys(data).length === 0) {
            let newComponent = {
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
            console.log('adding a child')
            let currentData = data.root;
            console.log('currentData', currentData)
            let newComponent = {
                    name: componentName,
                    parent,
                    props: componentProps,
                    state: componentState,
                    children: []
            }
            // we need to loop throught the current tree to find the matching parent
            // once found, we need to push the new node to the array of children of that parent node
            // BFS to loop throught all the children
            const newData = findNodeInTree(parent, newComponent, data.root);
            //setData(newData)
            console.log('now', data)
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