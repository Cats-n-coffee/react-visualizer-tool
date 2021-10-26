import { css } from "styled-components";

export const confirmDeleteStyled = css`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--transparent-background);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .delete__section {
    max-width: 400px;
    width: 100%;
    background: var(--cancel-background);
    border-radius: 5px;
    padding: 2em;
  }

  .delete__title {
    font-size: 1.3rem;
    padding-bottom: 0.7em;
  }

  .delete__paragraph {
    border-top: 1px solid grey;
    padding: 1em 0;
  }

  .delete__buttons-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }

  .delete__button-cancel {
    max-width: 100px;
    font-weight: 700;
    font-size: 1rem;
    border: 1px solid black;
  }

  .delete__button-confirm {
    max-width: 100px;
    font-weight: 700;
    font-size: 1rem;
    background: var(--cancel-button);
    color: white;
  }
`;
