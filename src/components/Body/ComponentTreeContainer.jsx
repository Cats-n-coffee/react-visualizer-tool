import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import SingleComponent from './SingleComponent';


export default function ComponentTreeContainer(props) {
    const { data } = useDataProvider();
    const { setPopup, setType } = props;
    console.log('inside the tree container', data)

    return (
        <div>
            this is the component tree container
            { // not working, need to add a component in the middle to handle the recursion
                data.length > 0 ?
                data.map(item => (
                    <SingleComponent
                    key={ item.name } 
                    component={ item } 
                    setPopup={ setPopup }
                    setType={ setType }
                />
                ))
                
                : null
            }
        </div>
    )
}

// https://stackoverflow.com/questions/54040222/recursively-render-react-component