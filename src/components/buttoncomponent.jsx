import React, { Component } from "react";
class Buttonclass extends Component {
  state = {
    name: this.props.name
  };
  someFn = () => {
    this.props.callbackFromParent(this.props.name);
    this.props.callbackFromParent2(this.props.image);
    this.props.callbackFromParent3(this.props.desc);
    this.props.callbackFromParent4(false);
  };

  clickHandler(names) {
    this.setState({ namess: names }, () => console.log(this.state.namess));
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.clickHandler(this.props.name);
            this.someFn();
          }}
        >
          {this.props.name}
        </button>
      </React.Fragment>
    );
  }
}

export default Buttonclass;
