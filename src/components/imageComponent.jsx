import React, { Component } from "react";
class ImageClass extends Component {
  state = {};
  render() {
    const styleImg = {
      display: this.props.hidden
    };
    return (
      <React.Fragment>
        <div style={styleImg}>
          <img src={this.props.img} alt={this.props.img} />
        </div>
      </React.Fragment>
    );
  }
}

export default ImageClass;
