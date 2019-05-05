import React, { Component } from "react";
import TabComponent from "./components/tab";
import AddModal from "./components/AddModal";
//import CarouselComponent from './components/carousel'
//import Label from './label'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      addModal: false
    };
  }
  addClick = () => {
    this.setState({
      addModal: true
    });
  };
  closeModal = () => {
    this.setState({
      addModal: false
    });
  };
  render() {
    return (
      <div className="App">
        <TabComponent />
        <h1 id="fixedAdd" onClick={this.addClick}>
          +
        </h1>
        {this.state.addModal ? (
          <AddModal
            display={this.state.addModal}
            closeModal={this.closeModal}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
