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