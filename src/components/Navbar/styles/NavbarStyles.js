import { css } from "styled-components";

export const NavbarStyled = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--sidebar);
  padding: 1em;
  z-index: 3;
  box-shadow: 3px 0px 10px var(--shadow);

  h1 {
    color: var(--sidebar-button);
  }

  .navbar-sections {
    width: 100%;
    height: 100%;
    gap: 3em;
  }

  .navbar-add-buttons {
    gap: 2em;
  }

  .navbar-filters {
    gap: 2em;
  }
`;
