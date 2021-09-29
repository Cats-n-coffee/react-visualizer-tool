import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import SingleComponent from './SingleComponent';


export default function ComponentTreeContainer(props) {
    const { data } = useDataProvider();
    const { setPopup, setType } = props;
    console.log(data)

    return (
        <div>
            this is the component tree container
            {
                Object.keys(data).length > 0 ?
                <SingleComponent 
                    component={ data.root } 
                    setPopup={ setPopup }
                    setType={ setType }
                />
                : null
            }
        </div>
    )
}