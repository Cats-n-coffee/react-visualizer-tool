// eslint-disable-next-line
import styles, { css } from "styled-components/macro";
import React from "react";
import { confirmDeleteStyled } from "./styles/confirmDeleteStyles";

export default function ConfirmDelete(props) {
  const { confirmDelete, setPopup } = props;

  return (
    <div css={confirmDeleteStyled}>
      <section className="center delete__section">
        <h3 className="delete__title">Delete ?</h3>
        <p className="delete__paragraph">
          Are you sure you want to delete this component?
          <br />
          Every children of this component and their children will be removed.
        </p>
        <div className="delete__buttons-container">
          <button
            className="btn delete__button-cancel"
            onClick={() => setPopup(false)}
          >
            Cancel
          </button>
          <button
            className="btn delete__button-confirm"
            onClick={() => confirmDelete()}
          >
            Confirm
          </button>
        </div>
      </section>
    </div>
  );
}
