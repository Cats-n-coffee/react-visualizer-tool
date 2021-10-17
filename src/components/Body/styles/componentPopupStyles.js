import { css } from "styled-components";

export const PopupStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  .form-wrapper {
    max-width: 500px;
    background: var(--form-background);
    padding: 2em;
    border-radius: 8px;
  }

  .btn-form {
    width: auto;
    background: var(--form-button);
    color: var(--text-secondary);
  }
`;
