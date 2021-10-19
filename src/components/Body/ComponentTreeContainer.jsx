// eslint-disable-next-line
import styled, { css } from "styled-components/macro";
import React from "react";
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

  console.log("items are", data, "level", level);
  if (!data || !data.length) return null;

  return (
    <>
      {data.map((item) => (
        <div key={item.name}>
          <SingleComponent
            component={item}
            handleAddClick={handleAddClick}
            handleEditClick={handleEditClick}
            handleDelete={handleDelete}
          />
          <ComponentTreeContainer
            data={item.allChildren}
            parent={item.name}
            level={level + 1}
            handleAddClick={handleAddClick}
            handleEditClick={handleEditClick}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </>
  );
}

// https://stackoverflow.com/questions/54040222/recursively-render-react-component
// https://kyleshevlin.com/recursive-react-components
// https://betterprogramming.pub/recursive-rendering-with-react-components-10fa07c45456
// https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children
// https://medium.com/@swatisucharita94/recursive-rendering-in-react-42666102eae2
