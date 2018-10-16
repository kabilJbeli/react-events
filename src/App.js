import React, { Component } from "react";
import "./App.css";
import Buttonclass from "./components/buttoncomponent";
import ImageClass from "./components/imageComponent";
import Nameclass from "./components/nameComponent";
import Descriptions from "./components/description";
class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: null,
      image: null,
      desc: null,
      display: "none"
    };
  }
  myCallback = dataFromChild => {
    this.setState({ listDataFromChild: dataFromChild });
  };

  myCallback2 = dataFromChild2 => {
    this.setState({ image: dataFromChild2 });
  };
  myCallback3 = dataFromChild3 => {
    this.setState({ desc: dataFromChild3 });
  };

  myCallback4 = dataFromChild4 => {
    this.setState({ display: dataFromChild4 });
  };
  render() {
    return (
      <div className="App">
        <div className="buttons">
          <Buttonclass
            callbackFromParent={this.myCallback}
            callbackFromParent2={this.myCallback2}
            callbackFromParent3={this.myCallback3}
            callbackFromParent4={this.myCallback4}
            name="Kabil"
            image="https://media.licdn.com/dms/image/C4D03AQHG45OIqV5pxg/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=rt10VF2TP9dEPY3U3l89-GRu2i9cqMcjmD7GNu7U7dM"
            desc="loreum ipsum"
          />
          <Buttonclass
            callbackFromParent={this.myCallback}
            callbackFromParent2={this.myCallback2}
            callbackFromParent3={this.myCallback3}
            callbackFromParent4={this.myCallback4}
            name="Test1"
            image="https://i.pinimg.com/736x/25/48/31/25483183a26a96adcc2b5a4002eda6ca--headshot-ideas-professional-photographer.jpg"
            desc="loreum ipsum"
          />
          <Buttonclass
            callbackFromParent={this.myCallback}
            callbackFromParent2={this.myCallback2}
            callbackFromParent3={this.myCallback3}
            callbackFromParent4={this.myCallback4}
            name="Test2"
            image="https://i.pinimg.com/originals/e8/7e/a5/e87ea5f1565b458bb866112909f1a62e.jpg"
            desc="loreum ipsum"
          />
        </div>
        <ImageClass hidden={this.state.display} img={this.state.image} />
        <Nameclass
          hidden={this.state.display}
          namess={this.state.listDataFromChild}
        />
        <Descriptions desc={this.state.desc} />
      </div>
    );
  }
}

export default App;
