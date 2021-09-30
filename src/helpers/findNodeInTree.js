export function findNodeInTree(nodeName, childToInsert, parentNode) {
    console.log('nodeName', nodeName, 'parentNode', parentNode.name)
    if (parentNode.name === nodeName) {
        parentNode.allChildren.push(childToInsert);
    }
    else {
        for (let i = 0; i < parentNode.allChildren.length; i += 1) {
            findNodeInTree(nodeName, childToInsert, parentNode.children[i])
        }
    }
    return parentNode;
}