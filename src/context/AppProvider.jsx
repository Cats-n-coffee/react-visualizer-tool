import React from 'react';
import ThemeProvider from './ThemeProvider';
import DataProvider from './DataProvider';
import { GlobalStyles } from '../styles/GlobalStyles';

// Wrapper component for all contexts at the top level
// of the app.
export default function AppProvider({children}) {
    return (
        <> 
            <ThemeProvider>
                <GlobalStyles />
                <DataProvider>
                    { children }
                </DataProvider>
            </ThemeProvider>
        </>
    )
}