import React from 'react';
import ThemeToggle from './ThemeToggle';
import NewComponentBtn from './NewComponentBtn';
import NewProjectBtn from './NewProjectBtn';
import FilterComponents from './FilterComponents';
import FilterInfo from './FilterInfo';

export default function Navbar(props) {
    return (
        <nav>
            <ThemeToggle />
            <section aria-label="add buttons">
                <NewComponentBtn />
                <NewProjectBtn />
            </section>
            <section aria-label="filters">
                <FilterComponents />
                <FilterInfo />
            </section>
        </nav>
    )
}