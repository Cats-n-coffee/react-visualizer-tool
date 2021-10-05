import React from 'react';
import ThemeToggle from './ThemeToggle';
import NewProjectBtn from './NewProjectBtn';
import FilterComponents from './FilterComponents';
import FilterInfo from './FilterInfo';
import NewComponentForm from '../Body/NewComponentForm';

export default function Navbar(props) {
    const [popup, setPopup] = React.useState(false);
    return (
        <nav>
            <ThemeToggle />
            <section aria-label="add buttons">
                <button onClick={() => setPopup(true) }>Add Component</button>
                <NewProjectBtn />
            </section>
            <section aria-label="filters">
                <FilterComponents />
                <FilterInfo />
            </section>
            {
                popup ?
                <NewComponentForm setPopup={ setPopup } type="new"/>
                : null
            }
        </nav>
    )
}