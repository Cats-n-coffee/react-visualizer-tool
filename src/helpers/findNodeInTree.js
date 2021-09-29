export function findNodeInTree(nodeName, childToInsert, parentNode) {
    console.log('nodeName', nodeName, 'parentNode', parentNode.name)
    if (parentNode.name === nodeName) {
        parentNode.children.push(childToInsert);
    }
    else {
        for (let i = 0; i < parentNode.children.length; i += 1) {
            findNodeInTree(nodeName, childToInsert, parentNode.children[i])
        }
    }
}