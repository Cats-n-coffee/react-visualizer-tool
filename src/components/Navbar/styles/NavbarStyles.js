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
    color: var(--text-primary);
    text-align: center;
    line-height: 2.1rem;
    font-size: 2rem;
  }

  .navbar-sections {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    gap: 3em;
    padding: 4em 0 2em 0;
  }

  .navbar-add-buttons {
    gap: 2em;
  }

  .navbar-filters {
    gap: 3em;
  }
`;
