import React from 'react';

const DataContext = React.createContext();
DataContext.displayName = 'DataContext';

export default function DataProvider(props) {
    const [data, setData] = React.useState({});

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