import React from 'react';

const DataContext = React.createContext();

export default function DataProvider(props) {
    const [data, setData] = React.useState({});
    return <DataContext.Provider values={data, setData} {...props}/>
}

export function useDataProvider() {
    const data = React.useContext(DataContext);

    if (!data) {
        throw new Error('useDataProvider must be used inside DataProvider.')
    }

    return data;
}