import React from "react";

const StatusPill = ({ children, type }) => {
  const renderColour = () => {
    if (type === "success") return "--success";
    if (type === "pending") return "--pending";
  };

  return (
    <div className={`status-pill status-pill${renderColour()}`}>{children}</div>
  );
};

export default StatusPill;
