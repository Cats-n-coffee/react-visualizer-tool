import React from "react";

export default function DetailsPopup(props) {
  const { node, setShowDetails } = props;
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
      className="node__details"
      style={{
        left: leftPosition + "px",
        top: topPosition + "px",
      }}
    >
      <h3>{node.node.title}</h3>
      <div>
        <h4>Props</h4>
        {node.node.props?.length > 0
          ? node.node.props.map((prop) => (
              <div key={prop.propName}>
                <span>{prop.propName}</span>= <span>{prop.propValue}</span>
              </div>
            ))
          : null}
      </div>
      <div>
        <h4>State</h4>
        {node.node.state?.length > 0
          ? node.node.state.map((item) => (
              <div key={item.stateName}>
                <span>{item.stateName}</span>:<span>{item.stateHook}</span>
              </div>
            ))
          : null}
      </div>

      <button
        className="btn btn__details"
        onClick={() => setShowDetails(false)}
      >
        Close
      </button>
    </section>
  );
}
