import React from 'react';

const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
    const [theme, setTheme] = React.useState('light');

    return <ThemeContext.Provider values={theme, setTheme} {...props} />
}

export function useThemeProvider() {
    const theme = React.useContext(ThemeContext);

    if (!theme) {
        throw new Error('useThemeProvider must be used inside ThemeProvider')
    }

    return theme;
}