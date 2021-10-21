import React from "react";

export default function DetailsPopup(props) {
  const { node, setSelectedNode, setShowDetails } = props;
  console.log("node is", node);
  const depth = node.lowerSiblingCounts.length;
  const height = node.path[node.path.length - 1];
  const leftPosition = depth * 44 + 300;
  const topPosition = height * 62;

  console.log(
    "title",
    node.node.title,
    "left: ",
    depth,
    "top: ",
    topPosition,
    "height",
    height,
    "path",
    node.path
  );
  return (
    <section
      style={{
        position: "absolute",
        left: leftPosition + "px",
        top: topPosition + "px",
        width: "200px",
        zIndex: "1",
      }}
    >
      <h3>{node.node.title}</h3>
      <h4>Props</h4>
      <h4>State</h4>
      <button onClick={() => setShowDetails(false)}>Close</button>
    </section>
  );
}
