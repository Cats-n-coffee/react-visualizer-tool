import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { findNodeAndRead } from '../../helpers/findNodeInTree';

export default function FormComponent(props) {
    const { handleSubmitNew, handleSubmitEdit, type, componentToEdit = {}, data } = props;

    const initialValues = {
        name: componentToEdit?.name || "",
        props: componentToEdit?.props || "",
        state: componentToEdit?.state || "",
        parent: componentToEdit?.parent || ""
    }

    const nameBeforeEdit = componentToEdit?.name || "";

    if (type === 'edit') {
        console.log('%cpopup form received', 'color: purple', componentToEdit)
    }

    function validateName(name) {
        const checkName = findNodeAndRead(name, data[0]);
        console.log('%cinside the validate', 'color: red', checkName)
        if ((checkName === 'No match') || (checkName === 'No component yet')) {
            console.log('%cAll good', 'color: red')
            return null;
        }
        else {
            console.log('%cComponent name already used', 'color: red', checkName)
            return 'Component name already used';
        }
    }

    return (
        <section>
            <h2>{ type }</h2>
            <Formik
                initialValues={ initialValues }
                validateOnBlur={ true }
                validateOnChange={ false }
                enableReinitialize={ true }
                onSubmit={(data, { setSubmitting }) => {
                    console.log('submitting', data)
                    if (type === 'new') {
                        handleSubmitNew(data)
                    }
                    else if (type === 'edit') {
                        handleSubmitEdit(nameBeforeEdit, data)
                    }
                }}
            >
                {
                    ({values, isSubmitting, errors}) => (
                        <Form>
                            <fieldset>
                                <label htmlFor="component-name">Component Name</label>
                                <Field 
                                type="text" 
                                id="component-name" 
                                name="name" 
                                validate={ validateName }
                                />
                                {errors.name && <div>{ errors.name }</div>}
                            </fieldset>
                            <fieldset>
                                <label htmlFor="component-props">Component Props</label>
                                <Field type="text" id="component-props" name="props"/>
                            </fieldset>
                            <fieldset>
                                <label htmlFor="component-state">Component State</label>
                                <Field type="text" id="component-state" name="state"/>
                            </fieldset>
                            <fieldset>
                                <label htmlFor="component-parent">Component Parent</label>
                                {
                                    type === 'new' ?
                                    <Field type="text" id="component-parent" name="parent"/>
                                    : <Field type="text" id="component-parent" name="parent" disabled/>
                                }
                                
                            </fieldset>
                            {
                                type === 'new' ?
                                <button type="submit" >Add to Tree</button>
                                : <button type="submit" >Edit Tree</button>
                            }
                        </Form>
                    )
                }
            </Formik>
        </section>
    )
}