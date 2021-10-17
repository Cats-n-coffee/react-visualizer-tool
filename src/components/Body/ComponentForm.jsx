// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import React from "react";
import { useDataProvider } from "../../context/DataProvider";
import { findNodeAndRead } from "../../helpers/findNodeInTree";
import { PopupStyles } from "./styles/componentPopupStyles";
import FormComponent from "./FormComponent";

// This component is used in two places: Navbar and Body
export default function ComponentForm(props) {
  const { setPopup, type, nameToEdit = "" } = props;
  const { insertComponent, updateComponent, data } = useDataProvider();
  const [componentToEdit, setComponentToEdit] = React.useState(null);

  function handleSubmitNew(newComponent) {
    insertComponent(newComponent);
    console.log("submitted", newComponent);
  }

  function handleSubmitEdit(nameBeforeEdit, editedComponent) {
    console.log("edited component", editedComponent);
    updateComponent(nameBeforeEdit, editedComponent);
  }

  React.useEffect(() => {
    if (type === "edit" && nameToEdit) {
      const node = findNodeAndRead(nameToEdit, data[0]);
      console.log("%cNODE is ", "color: green", node);
      setComponentToEdit(node);
    }
  }, [nameToEdit, type, data]);

  return (
    <div css={PopupStyles}>
      <div className="form-wrapper">
        <button className="btn btn-form" onClick={() => setPopup(false)}>
          Close
        </button>
        <FormComponent
          handleSubmitNew={handleSubmitNew}
          handleSubmitEdit={handleSubmitEdit}
          componentToEdit={componentToEdit}
          data={data}
          type={type}
        />
      </div>
    </div>
  );
}

// https://stackoverflow.com/questions/28695348/pushing-item-into-a-multi-dimensional-tree-like-structure-in-javascript
