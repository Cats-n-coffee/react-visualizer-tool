import { css } from "styled-components";

export const FormStyled = css`
  h2 {
    text-transform: capitalize;
  }

  form {
    fieldset {
      border: none;
      display: flex;
      justify-content: space-between;
      gap: 0.5em;
      padding: 0.5em 0;
      label {
      }
      input {
        max-width: 150px;
      }
    }

    .fieldset__list {
      flex-direction: column;
      gap: 0;

      .fieldset__row {
        display: flex;

        .fieldset__row__single {
          flex-shrink: 1;
        }
      }

      .btn__form__delete {
        padding: 0.5em;
        background: var(--form-button);
        width: auto;
      }

      .btn__form__list {
        padding: 0.5em;
        background: var(--form-button);
        max-width: 50px;
      }
    }
  }

  .submit-btn {
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
  }
`;
