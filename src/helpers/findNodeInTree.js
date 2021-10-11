export function findNodeAndInsert(nodeName, childToInsert, parentNode) {
    if (parentNode.name === nodeName) {
        parentNode.allChildren.push(childToInsert);
    }
    else {
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            findNodeAndInsert(nodeName, childToInsert, parentNode.allChildren[i]);
        }
    }
    return [parentNode];
}

export function findNodeAndDelete(nodeName, parentNode) {
    // removing the root node will remove all the children, so we start over
    console.log('delete nodeName', nodeName, 'parentNode', parentNode);
    if (parentNode.parent === null && parentNode.name === nodeName) {
        console.log('parent node deleting')
        return [];
    }
    // we need to inspect inside the allChildren array to find the correct node
    else {
        console.log('deleting some other node')
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            if (parentNode.allChildren[i].name === nodeName) {
                parentNode.allChildren.splice(i, 1);
            }
            else {
                findNodeAndDelete(nodeName, parentNode.allChildren[i]);
            }
        }
    }
    return [parentNode];
}

export function findNodeAndRead(nodeName, parentNode) {
    console.log('%cnodeName', 'color: green', nodeName, 'parentNode', parentNode)
    if (!parentNode) return 'No component yet';
    if (parentNode.name === nodeName) { 
        return parentNode;
    }
    else if (parentNode.name !== nodeName && (!parentNode.allChildren || parentNode.allChildren.length === 0)) {
        return "No match";
    }
    else {
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            return findNodeAndRead(nodeName, parentNode.allChildren[i]);
        }
    }
}

export function findNodeAndUpdate(nodeName, editedNode, parentNode) {
    console.log('%cinside findandUpdate', 'color: purple', nodeName, 'edit', editedNode, 'parent', parentNode);
    if (parentNode.name === nodeName) {
        parentNode.name = editedNode.name;
        parentNode.props = editedNode.props;
        parentNode.state = editedNode.state;
        
        // we need to update the parent property of all the children in the array
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            let child = parentNode.allChildren[i];
            child.parent = editedNode.name;
        }
    }
    else {
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            findNodeAndUpdate(nodeName, editedNode, parentNode.allChildren[i]);
        }
    }
    return [parentNode];
}


export function nodeNameList(parent, nameList) {
    console.log('%cparent inside the helper', 'color: orange', parent, 'name list array', nameList)
    if (!parent) return null;
    else if (parent.parent === null && parent.allChildren.length === 0) {
        console.log('%conly the root', 'color: orange')
        nameList.push(parent.name);
    }
    else if (parent.allChildren && parent.allChildren.length > 0) {
        nameList.push(parent.name); // not the way to do it. big bug
        for (let i = 0; i < parent.allChildren.length; i += 1) {
            console.log('%clooking through the children ', 'color: orange', parent.allChildren[i].name)
            nameList.push(parent.allChildren[i].name);
            console.log('name list is before recursion ', nameList)
            nodeNameList(parent.allChildren[i], nameList)
        }
    }
    return nameList;
}