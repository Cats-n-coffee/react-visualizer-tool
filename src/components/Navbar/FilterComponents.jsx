// eslint-disable-next-line
import styles, { css } from "styled-components/macro";
import React from "react";
import { FilterComponentsStyled } from "./styles/FilterComponentsStyles";

export default function FilterComponents(props) {
  return (
    <form css={FilterComponentsStyled} className="center">
      <label htmlFor="select-section">Select Section</label>
      <select id="select-section">
        <option value="default">Select Component</option>
      </select>
    </form>
  );
}

// These filters will allow the user to display only a portion
// of the component tree
