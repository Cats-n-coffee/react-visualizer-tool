// eslint-disable-next-line
import styles, { css } from "styled-components/macro";
import React from "react";
import { FilterInfoStyled } from "./styles/FilterInfoStyles";

// Filters are checkboxes so the user can add and remove what they would like to see
export default function FilterInfo(props) {
  return (
    <form css={FilterInfoStyled}>
      <div className="checkbox-wrapper">
        <input type="checkbox" id="show-state" />
        <label htmlFor="show-state">Show State</label>
      </div>
      <div className="checkbox-wrapper">
        <input type="checkbox" id="show-props" />
        <label htmlFor="show-props">Show Props</label>
      </div>
    </form>
  );
}

// These filters will allow to remove information from the screen as needed
// and allow for more readability when necessary
