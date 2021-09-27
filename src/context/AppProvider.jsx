import React from 'react';
import ThemeProvider from './ThemeProvider';
import DataProvider from './DataProvider';

// Wrapper component for all contexts at the top level
// of the app.
export default function AppProvider({children}) {
    return (
        <>
            <ThemeProvider>
                <DataProvider>
                    { children }
                </DataProvider>
            </ThemeProvider>
        </>
    )
}