// eslint-disable-next-line
import styles, { css } from "styled-components/macro";
import React from "react";

export default function SelectProject(props) {
  function showAlert() {
    alert("Coming Soon!");
  }
  return (
    <button className="btn navbar-btn" onClick={showAlert}>
      Select Project
    </button>
  );
}

// Will allow the user to select a project stored previously (localStorage or Db)
