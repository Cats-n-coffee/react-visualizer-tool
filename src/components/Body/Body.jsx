// eslint-disable-next-line
import styles, { css } from "styled-components/macro";
import React from "react";
import { useDataProvider } from "../../context/DataProvider";
import ComponentTreeContainer from "./ComponentTreeContainer";
import ComponentForm from "./ComponentForm";
import ConfirmDelete from "./ConfirmDelete";
import { BodyStyles } from "./styles/bodyStyles";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      There was an error:
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

export default function Body(props) {
  const { data, removeComponent } = useDataProvider();
  const [popup, setPopup] = React.useState(false);
  const [popupType, setPopupType] = React.useState("");
  const [nameToDelete, setNameToDelete] = React.useState("");
  const [nameToEdit, setNameToEdit] = React.useState("");
  console.log("body rendering");

  function handleAddClick() {
    setPopup(true);
    setPopupType("new");
  }

  function handleEditClick(name) {
    setPopup(true);
    setPopupType("edit");
    setNameToEdit(name);
  }

  function handleDelete(name) {
    setPopup(true);
    setPopupType("delete");
    console.log("%cpopup for ", "color: red", name);
    setNameToDelete(name);
  }

  function confirmDelete() {
    console.log("%cdeleting component", "color: red");
    setPopup(false);
    removeComponent(nameToDelete);
    setNameToDelete("");
  }

  React.useEffect(() => {
    if (popup === false) {
      setPopupType("");
      setNameToEdit("");
    }
  }, [popup]);

  return (
    <main css={BodyStyles}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ComponentTreeContainer
          handleAddClick={handleAddClick}
          handleEditClick={handleEditClick}
          handleDelete={handleDelete}
          data={data}
        />
      </ErrorBoundary>

      {popup && popupType === "new" ? (
        <ComponentForm setPopup={setPopup} type={popupType} />
      ) : null}
      {popup && popupType === "edit" ? (
        <ComponentForm
          setPopup={setPopup}
          type={popupType}
          nameToEdit={nameToEdit}
        />
      ) : null}
      {popup && popupType === "delete" ? (
        <ConfirmDelete
          confirmDelete={confirmDelete}
          setPopup={setPopup}
          nameToDelete={nameToDelete}
        />
      ) : null}
    </main>
  );
}
