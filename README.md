# React Visualizer Tool

This is a tool to help visualize a component tree when designing or building a React Project.

## Using Context to share data

The components added by the user will be stored in Context to be available across the app.

## Allow to add parent/children

If no components are added to the screen yet, the first one added will be the root by default (equivalent to index.js)
Components can be added in different ways:

- clicking on one element to add a child: it can be the first child, or one of multiple already there,
- using the form in the sidebar

## Allow to add props

## Allow to add state

## Builds a tree

Under the hood it build a general tree and performs all the operations on it when adding components, removing or editing the tree.

## Filter the information to be displayed

Set some filters to show/remove some information from the screen, allowing the user to see only what they need to see and improve readability.

## Popup

Popups have their open/close state managed inside the `App.js` component. Each popup takes the entire screen which disables any clicks outside of the popup.

## Flow for Edit, Add and Delete

`ComponentForm` is a container for the form, and passes in props for the type and methods for submitting. <br>
`FormComponent` is the actual form. There is one form template, so we have only one component, that changes depending on the type of form needed.

### Add

This action is performed from the navbar to open the popup. In `ComponentForm`, we use `handleSubmitNew` to use the `useData` hook and modify context.<br>

### Edit

This action is performed from the component node. In `ComponentForm`, we use the `handleSubmitEdit` to use the `useData` hook and modify context.<br>

### Delete

This action is performed from the component node. The handler is directly in `Body` to open the `ConfirmDelete` component. The `confirmDelete` handler inside the `Body` uses the methods imported from the `useData` hook and modify context.

## Credits

Icons are from Font Awesome.

## References

https://stackoverflow.com/questions/54040222/recursively-render-react-component<br>
https://kyleshevlin.com/recursive-react-components<br>
https://betterprogramming.pub/recursive-rendering-with-react-components-10fa07c45456<br>
https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children<br>
https://medium.com/@swatisucharita94/recursive-rendering-in-react-42666102eae2<br>
