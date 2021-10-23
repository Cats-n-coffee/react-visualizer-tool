// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import { findNodeAndRead, nodeNameList } from "../../helpers/findNodeInTree";
import { FormStyled } from "./styles/FormStyles";

export default function FormComponent(props) {
  const {
    handleSubmitNew,
    handleSubmitEdit,
    type,
    componentToEdit = {},
    data,
  } = props;

  const initialValues = {
    title: componentToEdit?.title || "",
    props: componentToEdit?.props || [],
    state: componentToEdit?.state || [],
    parent: componentToEdit?.parent || "",
  };

  const nameBeforeEdit = componentToEdit?.title || "";

  if (type === "edit") {
    console.log("%cpopup form received", "color: purple", componentToEdit);
  }
  const nodeList = nodeNameList(data[0], []);

  console.log(
    "%cnodeNameList is ",
    "color: orange",
    nodeList,
    "current data ",
    data[0]
  );

  function validateName(name) {
    if (type === "edit" && name === initialValues.title) return;
    const checkName = findNodeAndRead(name, data[0]);
    console.log("%cinside the validate", "color: red", checkName);
    if (checkName === "No match" || checkName === "No component yet") {
      console.log("%cAll good", "color: red");
      return null;
    } else {
      console.log("%cComponent name already used", "color: red", checkName);
      return "Component name already used";
    }
  }

  return (
    <section css={FormStyled} className="center">
      <h2>{type} Component</h2>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={false}
        enableReinitialize={true}
        onSubmit={(data, { setSubmitting }) => {
          console.log("submitting", data);
          if (type === "new") {
            handleSubmitNew(data);
          } else if (type === "edit") {
            handleSubmitEdit(nameBeforeEdit, data);
          }
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <fieldset>
              <label htmlFor="component-name">Component Name</label>
              <Field
                type="text"
                id="component-name"
                name="title"
                validate={validateName}
              />
              {errors.title && <div>{errors.title}</div>}
            </fieldset>
            <fieldset className="fieldset__list">
              <h3>Props:</h3>
              <FieldArray name="props">
                {(arrayHelpers) => (
                  <>
                    {values.props.map((prop, index) => {
                      return (
                        <div key={`props.${index}`} className="fieldset__row">
                          <div className="fieldset__row__single">
                            <label htmlFor={`props.${index}.propName`}>
                              Prop Name
                            </label>
                            <Field
                              type="text"
                              id={`props.${index}.propName`}
                              name={`props.${index}.propName`}
                            />
                          </div>
                          <div className="fieldset__row__single">
                            <label htmlFor={`props.${index}.propValue`}>
                              Prop Value
                            </label>
                            <Field
                              type="text"
                              id={`props.${index}.propValue`}
                              name={`props.${index}.propValue`}
                            />
                          </div>
                          <button
                            className="btn btn__form__delete"
                            onClick={() => arrayHelpers.remove(index)}
                            type="button"
                          >
                            D
                          </button>
                        </div>
                      );
                    })}
                    <button
                      className="btn btn__form__list"
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({ propName: "", propValue: "" })
                      }
                    >
                      Add prop
                    </button>
                  </>
                )}
              </FieldArray>
            </fieldset>
            <fieldset className="fieldset__list">
              <h3>State:</h3>
              <FieldArray name="state">
                {(arrayHelpers) => (
                  <>
                    {values.state.map((item, index) => {
                      return (
                        <div key={`state.${index}`} className="fieldset__row">
                          <div className="fieldset__row__single">
                            <label htmlFor={`state.${index}.stateName`}>
                              State Name
                            </label>
                            <Field
                              type="text"
                              id={`state.${index}.stateName`}
                              name={`state.${index}.stateName`}
                            />
                          </div>
                          <div className="fieldset__row__single">
                            <label htmlFor={`state.${index}.stateValue`}>
                              State Value
                            </label>
                            <Field
                              type="text"
                              id={`state.${index}.stateValue`}
                              name={`state.${index}.stateHook`}
                            />
                          </div>
                          <button
                            className="btn btn__form__delete"
                            onClick={() => arrayHelpers.remove(index)}
                            type="button"
                          >
                            D
                          </button>
                        </div>
                      );
                    })}
                    <button
                      className="btn btn__form__list"
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({ stateName: "", stateHook: "" })
                      }
                    >
                      Add state
                    </button>
                  </>
                )}
              </FieldArray>
            </fieldset>
            <fieldset>
              <label htmlFor="component-parent">Component Parent</label>
              {type === "new" ? (
                <Field as="select" id="component-parent" name="parent">
                  <option>Select a Parent</option>
                  {nodeList && nodeList.length
                    ? nodeList.map((node, index) => (
                        <option value={node} key={`${node}-index${index}`}>
                          {node}
                        </option>
                      ))
                    : null}
                </Field>
              ) : (
                <Field
                  as="select"
                  id="component-parent"
                  name="parent"
                  disabled
                />
              )}
            </fieldset>
            {type === "new" ? (
              <button type="submit" className="btn btn-form submit-btn">
                Add to Tree
              </button>
            ) : (
              <button type="submit" className="btn btn-form submit-btn">
                Edit Tree
              </button>
            )}
          </Form>
        )}
      </Formik>
    </section>
  );
}
