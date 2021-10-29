import { css } from "styled-components";

export const PopupStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--transparent-background);
  z-index: 4;

  .form-wrapper {
    max-width: 430px;
    width: 100%;
    background: var(--background);
    padding: 2em;
    border-radius: 8px;
  }

  .icon-close {
    background: none;
    width: auto;
    padding: 0;
    margin-left: auto;

    svg {
      width: 20px;
      height: 20px;
      path {
        fill: var(--text-primary);
      }
    }
  }

  .icon-close:hover {
    svg {
      path {
        fill: var(--form-button);
      }
    }
  }
`;
