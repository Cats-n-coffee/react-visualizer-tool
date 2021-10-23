import React from "react";

export default function DetailsPopup(props) {
  const { node, setShowDetails } = props;
  console.log("node is", node);

  // Explanations at the bottom of the file
  const depth = node.lowerSiblingCounts.length;
  const height = node.path[node.path.length - 1] + 1;
  const leftPosition = depth * 44 + 85;
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
              <div key={prop.propName} className="details__items">
                <span>{prop.propName}</span>= <span>{prop.propValue}</span>
              </div>
            ))
          : null}
      </div>
      <div>
        <h4>State</h4>
        {node.node.state?.length > 0
          ? node.node.state.map((item) => (
              <div key={item.stateName} className="details__items">
                <span>{item.stateName}</span>:<span>{item.stateHook}</span>
              </div>
            ))
          : null}
      </div>
    </section>
  );
}

/*

Explanation for positioning the details box. 
We are using the properties from the library, and the node's width, height and position from the library.

const depth = node.lowerSiblingCounts.length; 
--> indicates the level of nesting

const height = node.path[node.path.length - 1] + 1; 
--> indicates the number of collapsed nodes

const leftPosition = depth * 44 + 115; 
--> 44 is the width of each indentation block added by the library on children at each level, 
--> 230 (node width in library) / 2 = 115, 
--> 115 - 30 = 85 for a slight left indentation, so the details box shows slightly to the left of the info button

const topPosition = height * 62; 
--> 62 is the height of each row in the library

*/
