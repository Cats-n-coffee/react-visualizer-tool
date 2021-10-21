// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import React from "react";
import SortableTree from "@nosferatu500/react-sortable-tree";
import SingleComponent from "./SingleComponent";

export default function ComponentTreeContainer(props) {
  const {
    handleAddClick,
    handleEditClick,
    handleDelete,
    data,
    parent = "",
    level = 0,
  } = props;
  const [currentData, setCurrentData] = React.useState(data);

  console.log("items are", data, "level", level);
  React.useEffect(() => {
    if (!data || !data.length) return [];
    if (data) {
      setCurrentData(data);
    }
  }, [data]);

  return (
    <div style={{ height: 500 }}>
      <SortableTree
        treeData={currentData}
        onChange={(currentData) => setCurrentData(currentData)}
        generateNodeProps={(row) => {
          console.log("inside the generate", row);
          return {
            title: row.node.title,
            buttons: [
              <button
                type="button"
                className="btn btn-outline-success"
                style={{
                  verticalAlign: "middle",
                }}
                onMouseOver={() => console.log(row)}
              >
                ℹ
              </button>,
            ],
          };
        }}
      />
    </div>
  );
}

// https://stackoverflow.com/questions/54040222/recursively-render-react-component
// https://kyleshevlin.com/recursive-react-components
// https://betterprogramming.pub/recursive-rendering-with-react-components-10fa07c45456
// https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children
// https://medium.com/@swatisucharita94/recursive-rendering-in-react-42666102eae2

// {/* <>
//       {data.map((item) => (
//         <div key={item.title}>
//           <SingleComponent
//             component={item}
//             handleAddClick={handleAddClick}
//             handleEditClick={handleEditClick}
//             handleDelete={handleDelete}
//           />
//           <ComponentTreeContainer
//             data={item.allChildren}
//             parent={item.title}
//             level={level + 1}
//             handleAddClick={handleAddClick}
//             handleEditClick={handleEditClick}
//             handleDelete={handleDelete}
//           />
//         </div>
//       ))}
//     </> */}
