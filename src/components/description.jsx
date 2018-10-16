import React, { Component } from "react";

class Descriptions extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="descrClass">{this.props.desc}</p>
      </React.Fragment>
    );
  }
}

export default Descriptions;
