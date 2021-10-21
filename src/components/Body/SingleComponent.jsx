// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import React from "react";
import { SingleComponentStyled } from "./styles/componentStyles";

export default function SingleComponent(props) {
  const { component, handleAddClick, handleEditClick, handleDelete } = props;
  const [showOptions, setShowOptions] = React.useState(false);
  console.log("single component", component);

  return (
    <article
      css={SingleComponentStyled}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      <h3 style={{ color: "green" }}>{component.title}</h3>
      {component.props && component.props.length > 0
        ? [
            <h4 key={component.title}>Props:</h4>,
            component.props.map((prop) => (
              <div key={prop.propName}>
                <span>{prop.propName}</span>=<span>{prop.propValue}</span>
              </div>
            )),
          ]
        : null}
      {component.state && component.props.length > 0
        ? [
            <h4 key={component.title}>State:</h4>,
            component.state.map((item) => (
              <div key={item.stateName}>
                <span>{item.stateName}</span>
                Hook
                <span>{item.stateHook}</span>
              </div>
            )),
          ]
        : null}
      {showOptions ? (
        <div>
          <button onClick={() => handleAddClick()}>Add Component</button>
          <button onClick={() => handleEditClick(component.title)}>
            Edit Component
          </button>
          <button onClick={() => handleDelete(component.title)}>Delete</button>
        </div>
      ) : null}
    </article>
  );
}

// https://stackoverflow.com/questions/60312340/render-multiple-components-with-a-single-ternary-operator
