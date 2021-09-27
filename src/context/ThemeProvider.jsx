import React from 'react';

const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
    const [theme, setTheme] = React.useState(
        () => window.localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme])

    const values = {theme, setTheme}

    return <ThemeContext.Provider value={values} {...props} />
}

export function useThemeProvider() {
    const theme = React.useContext(ThemeContext);

    if (!theme) {
        throw new Error('useThemeProvider must be used inside ThemeProvider')
    }

    return theme;
}