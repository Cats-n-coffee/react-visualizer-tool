export function findNodeAndInsert(nodeName, childToInsert, parentNode) {
  if (parentNode.title === nodeName) {
    parentNode.children.push(childToInsert);
  } else {
    for (let i = 0; i < parentNode.children.length; i += 1) {
      findNodeAndInsert(nodeName, childToInsert, parentNode.children[i]);
    }
  }
  return [parentNode];
}

export function findNodeAndDelete(nodeName, parentNode) {
  // removing the root node will remove all the children, so we start over
  console.log("delete nodeName", nodeName, "parentNode", parentNode);
  if (parentNode.parent === null && parentNode.title === nodeName) {
    console.log("parent node deleting");
    return [];
  }
  // we need to inspect inside the children array to find the correct node
  else {
    console.log("deleting some other node");
    for (let i = 0; i < parentNode.children.length; i += 1) {
      if (parentNode.children[i].title === nodeName) {
        parentNode.children.splice(i, 1);
      } else {
        findNodeAndDelete(nodeName, parentNode.children[i]);
      }
    }
  }
  return [parentNode];
}

export function findNodeAndRead(nodeName, parentNode) {
  console.log("%cnodeName", "color: green", nodeName, "parentNode", parentNode);
  if (!parentNode) return "No component yet";
  if (parentNode.title === nodeName) {
    return parentNode;
  } else if (
    parentNode.title !== nodeName &&
    (!parentNode.children || parentNode.children.length === 0)
  ) {
    return "No match";
  } else {
    for (let i = 0; i < parentNode.children.length; i += 1) {
      return findNodeAndRead(nodeName, parentNode.children[i]);
    }
  }
}

export function findNodeAndUpdate(nodeName, editedNode, parentNode) {
  console.log(
    "%cinside findandUpdate",
    "color: purple",
    nodeName,
    "edit",
    editedNode,
    "parent",
    parentNode
  );
  if (parentNode.title === nodeName) {
    parentNode.title = editedNode.title;
    parentNode.props = editedNode.props;
    parentNode.state = editedNode.state;

    // we need to update the parent property of all the children in the array
    for (let i = 0; i < parentNode.children.length; i += 1) {
      let child = parentNode.children[i];
      child.parent = editedNode.title;
    }
  } else {
    for (let i = 0; i < parentNode.children.length; i += 1) {
      findNodeAndUpdate(nodeName, editedNode, parentNode.children[i]);
    }
  }
  return [parentNode];
}

export function nodeNameList(parent, nameList) {
  console.log("%cinside the helper", "color: green", parent);
  if (!parent) return null;
  else if (parent.parent === null && parent.children.length === 0) {
    // handles the case where we only have a root node
    nameList.push(parent.title);
  } else if (parent.children && parent.children.length > 0) {
    // handles the case where the root node has children
    if (nameList.indexOf(parent.title) === -1) {
      nameList.push(parent.title);
    }
    for (let i = 0; i < parent.children.length; i += 1) {
      nameList.push(parent.children[i].title);
      nodeNameList(parent.children[i], nameList);
    }
  }
  return nameList;
}
