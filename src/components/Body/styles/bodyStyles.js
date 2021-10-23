import { css } from "styled-components";

export const BodyStyles = css`
  background: var(--background);
  min-height: 100vh;

  .rst__rowContents {
    background-color: var(--component-background);
    border: 1px solid var(--component-border);
    border-radius: 5px;
    position: relative;
  }

  .rst__rowTitle {
    color: black;
  }

  .rst__lineHalfHorizontalRight::before,
  .rst__lineFullVertical::after,
  .rst__lineHalfVerticalTop::after,
  .rst__lineHalfVerticalBottom::after {
    background-color: var(--text-primary);
  }

  .rst__toolbarButton:not(:last-child) {
    margin-right: 10px;
  }

  .node__details {
    background: var(--sidebar);
    position: absolute;
    box-shadow: 1px 1px 2px var(--shadow), -1px -1px 2px var(--shadow);
    padding: 1em;
    border-radius: 5px;
    width: 200px;
    z-index: 1;

    h3 {
      text-align: center;
      color: var(--text-primary);
    }

    h4 {
      color: var(--text-primary);
    }

    .details__items {
      color: var(--text-primary);
    }
  }

  .btn__node {
    padding: 0 0.5em;
    background: var(--component-border);
    color: white;
  }

  .btn__node:hover {
    background: #297850;
  }
`;
