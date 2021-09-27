import React from 'react';
import { useThemeProvider } from '../../context/ThemeProvider';

export default function ThemeToggle(props) {
    const {theme, setTheme} = useThemeProvider();

    function toggleTheme() {
        console.log('theme switch')
    }

    return (
        <button onClick={ toggleTheme }>Theme Switcher</button>
    )
}