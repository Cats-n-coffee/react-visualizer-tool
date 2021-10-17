import { css } from "styled-components";

export const FilterInfoStyled = css`
  width: 100%;

  .checkbox-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5em;

    input {
      border: 1px solid var(--sidebar-input-border);
    }

    label {
      color: var(--text-primary);
      font-size: 1rem;
    }
  }
`;
