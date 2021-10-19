import React from "react";
import {
  findNodeAndInsert,
  findNodeAndDelete,
  findNodeAndUpdate,
} from "../helpers/findNodeInTree";

const DataContext = React.createContext();
DataContext.displayName = "DataContext";

export default function DataProvider(props) {
  const [data, setData] = React.useState([]);

  function insertComponent(component) {
    let { name, props, state, parent } = component;

    let newComponent = {
      name,
      parent: parent ? parent : null,
      props,
      state,
      allChildren: [],
    };
    // State is empty, this is the first component we add
    if (data.length === 0) {
      setData((oldData) => [...oldData, newComponent]);
      console.log("%c FIRST COMPONENT", "color: orange", newComponent);
    }
    // State already had children
    // We need to add the parent to this incoming child
    // We need to update the parent's children with this incoming child
    else {
      let currentData = data[0]; // this is only valid for the root node being the parent
      // if no parent is specified, we assign the first component to be the parent
      if (!newComponent.parent) {
        console.log("we assigned a parent anyway!", currentData.name);
        parent = currentData.name;
        newComponent.parent = parent;
      }
      console.log("adding a child", "currentData", currentData);
      // we need to loop throught the current tree to find the matching parent
      // once found, we need to push the new node to the array of children of that parent node
      const newData = findNodeAndInsert(parent, newComponent, currentData);
      setData(newData);
    }
  }

  function updateComponent(nodeName, component) {
    console.log("update");
    let currentData = data[0];
    const afterUpdate = findNodeAndUpdate(nodeName, component, currentData);
    console.log("%cafterUpdate in provider", "color: purple", afterUpdate);
    setData(afterUpdate);
  }

  function removeComponent(component) {
    console.log("remove", component);
    let currentData = data[0];
    const afterDeleteData = findNodeAndDelete(component, currentData);
    console.log("after delete", afterDeleteData);
    setData(afterDeleteData);
  }

  const values = { data, insertComponent, updateComponent, removeComponent };

  return <DataContext.Provider value={values} {...props} />;
}

export function useDataProvider() {
  const data = React.useContext(DataContext);

  if (!data) {
    throw new Error("useDataProvider must be used inside DataProvider.");
  }

  return data;
}
