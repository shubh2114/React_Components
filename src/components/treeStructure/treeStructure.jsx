import React, { useState } from "react";
import "./treeStructure.css";
import greaterThan from "../../public/svg/angle-right-svgrepo-com.svg";
import downArrow from "../../public/svg/angle-down-svgrepo-com.svg";

// this data structure is called as recurssion

const TreeStructure = ({ files }) => {
  const [showExpanded, setShowExpanded] = useState(false);
  console.log(showExpanded);
  return (
    <div>
      <div
        onClick={() => setShowExpanded(!showExpanded)}
        style={{ display: "flex", alignItems: "center" }}
      >
        {files.isFolder && (
          <img
            src={`${showExpanded ? downArrow : greaterThan}`}
            alt=""
            width={"20px"}
          />
        )}
        <div>{files.name}</div>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        {showExpanded &&
          files.isFolder &&
          files.children.map((fl) => {
            return <TreeStructure files={fl} />;
          })}
      </div>
    </div>
  );
};

export default TreeStructure;
