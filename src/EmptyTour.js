import React from "react";

const EmptyTour = ({ refresh }) => {
  return (
    <div className="empty-tour">
      <h1>No Tours Left</h1>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
};
export default EmptyTour;
