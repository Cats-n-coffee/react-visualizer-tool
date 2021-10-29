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

  .rst__rowToolbar {
    align-items: center;
  }

  .node__details {
    background: var(--button-hover-green);
    position: absolute;
    border: 1px solid var(--component-background);
    padding: 1em;
    border-radius: 5px;
    width: auto;
    min-width: 200px;
    z-index: 1;

    h3 {
      text-align: center;
      color: white;
    }

    .details__content {
      border-top: 1px solid var(--component-background);
      padding-bottom: 0.4em;
      color: white;
      h4 {
        font-size: 1.2rem;
        color: var(--component-background);
      }
    }

    .details__items {
      color: white;
    }
  }

  .btn__node__icon {
    background: none;
    width: auto;
    padding-right: 0;

    svg {
      width: 20px;
      height: 20px;
      path {
        fill: black;
      }
    }
  }

  .btn__node__icon:hover {
    svg {
      path {
        fill: var(--component-border);
      }
    }
  }
`;
