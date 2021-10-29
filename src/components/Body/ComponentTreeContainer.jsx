// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import React from "react";
import SortableTree from "@nosferatu500/react-sortable-tree";
import DetailsPopup from "./DetailsPopup";
import { EditIcon, DeleteIcon, InfoIcon } from "../Icons";

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
                className="btn btn__node__icon"
                onMouseOver={() => {
                  setShowDetails(true);
                  setSelectedNode(row);
                }}
                onMouseOut={() => {
                  setShowDetails(false);
                  setSelectedNode("");
                }}
              >
                <InfoIcon />
              </button>,
              <button
                type="button"
                className="btn btn__node__icon"
                onClick={() => handleEditClick(row.node.title)}
              >
                <EditIcon />
              </button>,
              <button
                type="button"
                className="btn btn__node__icon"
                onClick={() => handleDelete(row.node.title)}
              >
                <DeleteIcon />
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
