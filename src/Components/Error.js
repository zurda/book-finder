import React from "react";

const Error = props => {
  return (
    <div className="error">
      <h3>There was an error fetching the data</h3>
      <p>{props.error}</p>
    </div>
  );
};

export default Error;
