export function findNodeAndInsert(nodeName, childToInsert, parentNode) {
    if (parentNode.name === nodeName) {
        parentNode.allChildren.push(childToInsert);
    }
    else {
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            findNodeAndInsert(nodeName, childToInsert, parentNode.allChildren[i])
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
                console.log('found the node, splicing it')
                parentNode.allChildren.splice(i, 1);
            }
            else {
                findNodeAndDelete(nodeName, parentNode.allChildren[i])
            }
        }
    }
    return [parentNode];
}

export function findNodeAndRead(nodeName, parentNode) {
    console.log('%cnodeName', 'color: green', nodeName, 'parentNode', parentNode)
    let currentNode;
    if (parentNode.name === nodeName) { 
        currentNode = parentNode;
        console.log('%cmatching node', 'color: green',  currentNode)
        return currentNode;
    }
    else {
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            return findNodeAndRead(nodeName, parentNode.allChildren[i])
        }
    }
}