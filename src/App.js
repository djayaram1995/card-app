import React, { Component } from "react";
import TabComponent from "./components/tab";
import AddModal from "./components/AddModal";
//import CarouselComponent from './components/carousel'
//import Label from './label'
import "./App.css";
const items = [
  {
    tabKey: 1,
    cardsData: [
      {
        key: 1,
        cardData: [
          {
            keyData: 1,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "This is a bulb"
          },
          {
            keyData: 2,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "This is a latest invention please check for issues"
          }
        ]
      },
      {
        key: 2,
        cardData: [
          {
            keyData: 1,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Finished bulb drawing"
          },
          {
            keyData: 2,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Imported the image"
          },
          {
            keyData: 3,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Done building"
          }
        ]
      }
    ]
  },
  {
    tabKey: 2,
    cardsData: [
      {
        key: 1,
        cardData: [
          {
            keyData: 1,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "This is a bulb"
          },
          {
            keyData: 2,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "This is a latest invention please check for issues"
          }
        ]
      },
      {
        key: 2,
        cardData: [
          {
            keyData: 1,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Finished bulb drawing"
          },
          {
            keyData: 2,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Imported the image"
          },
          {
            keyData: 3,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Done building"
          }
        ]
      }
    ]
  },
  {
    tabKey: 3,
    cardsData: [
      {
        key: 1,
        cardData: [
          {
            keyData: 1,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "This is a bulb"
          },
          {
            keyData: 2,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "This is a latest invention please check for issues"
          }
        ]
      },
      {
        key: 2,
        cardData: [
          {
            keyData: 1,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Finished bulb drawing"
          },
          {
            keyData: 2,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Imported the image"
          },
          {
            keyData: 3,
            imageUrl:
              "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
            cardText: "Done building"
          }
        ]
      }
    ]
  }
  
];
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
        <TabComponent items={items} />
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
