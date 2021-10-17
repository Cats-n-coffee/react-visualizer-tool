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
      gap: 1em;
      padding: 0.8em 0;
      label {
      }
      input {
      }
    }
  }

  .submit-btn {
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
  }
`;
