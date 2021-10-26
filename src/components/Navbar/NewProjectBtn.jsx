import React from "react";

export default function NewProjectBtn(props) {
  function showAlert() {
    alert("Coming Soon!");
  }
  return (
    <button className="btn navbar-btn" onClick={showAlert}>
      New Project
    </button>
  );
}
