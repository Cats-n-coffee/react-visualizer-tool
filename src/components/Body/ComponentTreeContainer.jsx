// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import React from "react";
import SortableTree from "@nosferatu500/react-sortable-tree";
import DetailsPopup from "./DetailsPopup";

export default function ComponentTreeContainer(props) {
  const { handleEditClick, handleDelete, data } = props;
  const [currentData, setCurrentData] = React.useState(data);
  const [showDetails, setShowDetails] = React.useState(false);
  const [selectedNode, setSelectedNode] = React.useState(null);

  React.useEffect(() => {
    if (!data || !data.length) return setCurrentData([]);
    if (data) {
      setCurrentData(data);
    }
  }, [data]);

  return (
    <div style={{ height: 500, position: "relative" }}>
      {showDetails ? (
        <DetailsPopup node={selectedNode} setShowDetails={setShowDetails} />
      ) : null}
      <SortableTree
        treeData={currentData}
        onChange={(currentData) => setCurrentData(currentData)}
        generateNodeProps={(row) => {
          return {
            title: row.node.title,
            buttons: [
              <button
                type="button"
                className="btn btn__node"
                onMouseOver={() => {
                  setShowDetails(true);
                  setSelectedNode(row);
                }}
                onMouseOut={() => {
                  setShowDetails(false);
                  setSelectedNode("");
                }}
              >
                ℹ
              </button>,
              <button
                type="button"
                className="btn btn__node"
                onClick={() => handleEditClick(row.node.title)}
              >
                Edit
              </button>,
              <button
                type="button"
                className="btn btn__node"
                onClick={() => handleDelete(row.node.title)}
              >
                Delete
              </button>,
            ],
            className: "node",
          };
        }}
        canDrag={false}
      />
    </div>
  );
}
