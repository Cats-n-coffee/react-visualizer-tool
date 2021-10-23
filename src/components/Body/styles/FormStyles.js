import { css } from "styled-components";

export const FormStyled = css`
  width: 100%;

  h2 {
    text-transform: capitalize;
    padding-bottom: 1em;
    color: var(--text-primary);
  }

  form {
    width: 100%;

    .label-title {
      color: var(--text-primary);
      font-size: 1.2rem;
      font-weight: 700;
    }

    .input-boxes {
      background: var(--form-background);
      border: none;
      border-bottom: 1px solid var(--sidebar-input-border);
      padding: 0 0.5em;
      color: var(--text-primary);
      font-family: var(--font-mukta);
      font-size: 0.9rem;
    }

    .submit-btn {
      margin-left: auto;
      margin-right: auto;
      margin-top: 1em;
    }

    .btn-form {
      width: auto;
      background: var(--form-button);
      font-size: 1.1rem;
      color: white;
      box-shadow: 1px 1px 2px var(--shadow);
    }

    fieldset {
      border: none;
      display: flex;
      justify-content: space-between;
      gap: 0.5em;
      padding: 0.5em 0;
    }

    .fieldset__list {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(2, auto);
      align-items: center;

      h3 {
        grid-row: 1;
        grid-column: 1;
      }

      .fieldset__row {
        grid-row: 2;
        grid-column: 1/ -1;
        display: flex;
        align-items: flex-end;

        .fieldset__row__single {
          label {
            color: var(--text-primary);
          }
          input {
            max-width: 150px;
          }
        }
      }

      .btn__form__delete {
        padding: 0.5em;
        background: var(--form-button);
        width: auto;
      }

      .btn__form__list {
        grid-row: 1;
        grid-column: 2;
        justify-self: end;
        padding: 0.5em;
        background: var(--form-button);
        max-width: 50px;
      }

      .btn__icon {
        background: none;
        width: auto;
        padding-right: 0;

        svg {
          width: 20px;
          height: 20px;
          path {
            fill: var(--text-primary);
          }
        }
      }

      .btn__icon:hover {
        svg {
          path {
            fill: var(--form-button);
          }
        }
      }
    }
  }
`;
