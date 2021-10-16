// eslint-disable-next-line
import styles, { css } from "styled-components/macro";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import NewProjectBtn from "./NewProjectBtn";
import FilterComponents from "./FilterComponents";
import FilterInfo from "./FilterInfo";
import ComponentForm from "../Body/ComponentForm";
import SelectProject from "./SelectProject";
import { NavbarStyled } from "./styles/NavbarStyles";

export default function Navbar(props) {
  const [popup, setPopup] = React.useState(false);
  return (
    <nav css={NavbarStyled}>
      <h1>React Visualizer</h1>
      <div className="center navbar-sections">
        <section aria-label="add buttons" className="center navbar-add-buttons">
          <button className="btn" onClick={() => setPopup(true)}>
            Add Component
          </button>
          <NewProjectBtn />
          <SelectProject />
        </section>
        <section aria-label="filters" className="center navbar-filters">
          <FilterComponents />
          <FilterInfo />
        </section>
        {popup ? <ComponentForm setPopup={setPopup} type="new" /> : null}
        <ThemeToggle />
      </div>
    </nav>
  );
}
