import React from 'react';
import { useThemeProvider } from '../../context/ThemeProvider';

export default function ThemeToggle(props) {
    const {theme, setTheme} = useThemeProvider();

    function toggleTheme() {
        return theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <button onClick={ toggleTheme }>Theme Switcher</button>
    )
}