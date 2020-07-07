import React from "react";

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="lines">
        <div className="thumb pulse"></div>
        <div className="line pulse"></div>
        <div className="line pulse"></div>
        <div className="line pulse"></div>
      </div>
    </div>
  );
};

export default Skeleton;
