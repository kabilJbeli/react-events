import React, { Component } from "react";
class Nameclass extends Component {
  render() {
    const styleImg = {
      display: this.props.hidden
    };
    return (
      <React.Fragment>
        <div className="nameClass" style={styleImg}>
          <span>{this.props.namess}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Nameclass;
