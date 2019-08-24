import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div className="preview-wrapper">
        <h3>Output Area</h3>
        <div id="preview" />
      </div>
    );
  }
}

export default Preview;
