import { css } from "styled-components";

export const ThemeToggleStyled = css`
  width: 50px;
  height: 26px;
  background: var(--toggle-background);
  border-radius: 30px;
  border: 1px solid var(--shadow);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background: var(--toggle-knob);
    border-radius: 50%;
    transition: 500ms;
  }

  &.toggle {
    &::before {
      transform: translateX(23px);
    }
  }
`;
