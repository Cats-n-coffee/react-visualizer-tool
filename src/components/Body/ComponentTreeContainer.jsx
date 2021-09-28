import React from 'react';
import { useDataProvider } from '../../context/DataProvider';
import SingleComponent from './SingleComponent';


export default function ComponentTreeContainer(props) {
    const { data } = useDataProvider()

    return (
        <div>
            this is the component tree container
            {
                data ?
                <SingleComponent component={ data } />
                : null
            }
        </div>
    )
}