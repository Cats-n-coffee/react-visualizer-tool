import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';

export default function FormComponent(props) {
    const { handleSubmitNew, handleSubmitEdit, type, componentToEdit = {} } = props;

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

    // will use Formik to use:
    // - form pre-fill for type === 'edit'
    // - ability to add multiple props or state

    // function submitForm(event) {
    //     event.preventDefault();
    //     if (type === 'new') {
    //         const newData = { componentName, componentProps, componentState, parent: componentParent };
    //         handleSubmitNew(newData)
    //     }
    //     else if (type === 'edit') {
    //         const editData = {}
    //         handleSubmitEdit(editData)
    //     }
    // }

    return (
        <section>
            <h2>{ type }</h2>
            <Formik
                initialValues={ initialValues }
                validateOnChange={ true }
                enableReinitialize={ true }
                onSubmit={(data, { setSubmitting }) => {
                    console.log('submitting', data)
                    if (type === 'new') {
                        //const newData = { name, props, state, parent };
                        handleSubmitNew(data)
                    }
                    else if (type === 'edit') {
                        //const editData = {}
                        handleSubmitEdit(nameBeforeEdit, data)
                    }
                }}
            >
                {
                    ({values, isSubmitting}) => (
                        <Form>
                            <fieldset>
                                <label htmlFor="component-name">Component Name</label>
                                <Field type="text" id="component-name" name="name" value={values.name}/>
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