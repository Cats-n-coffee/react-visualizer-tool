import { css } from "styled-components";

export const NavbarStyled = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--sidebar);
  padding: 1em;

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
