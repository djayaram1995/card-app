import React, { Component } from "react";
import TabComponent from "./components/tab";
import AddModal from "./components/AddModal";
//import CarouselComponent from './components/carousel'
//import Label from './label'
import "./App.css";

var response = {
  "Count": 14,
  "listitem": [
    {
      "view_count": 0,
      "listitem_type": "text",
      "listitem_id": 1,
      "listitem_content": "postman_21_5_listitem_53_updated_1_0707",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 0,
      "listitem_type": "image",
      "listitem_id": 2,
      "listitem_content": "postman_21_5_listitem_53_updated_1",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 0,
      "listitem_type": "video",
      "listitem_id": 4,
      "listitem_content": "postman_21_5_listitem_53_updated_1",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 0,
      "listitem_type": "doc",
      "listitem_id": 5,
      "listitem_content": "postman_21_5_listitem_53_updated_1",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "Y"
    },
    {
      "view_count": 0,
      "listitem_type": "image",
      "listitem_id": 6,
      "listitem_content": "postman_21_5_listitem_53_added_2",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 0,
      "listitem_type": "image",
      "listitem_id": 7,
      "listitem_content": "postman_21_5_listitem_53_added_2",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "Y"
    },
    {
      "view_count": 0,
      "listitem_type": "image",
      "listitem_id": 8,
      "listitem_content": "postman_21_5_listitem_53_added_2_updated_02",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "Y"
    },
    {
      "view_count": 0,
      "listitem_type": "image",
      "listitem_id": 11,
      "listitem_content": "Specification_list",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "Y"
    },
    {
      "view_count": 0,
      "listitem_type": "image",
      "listitem_id": 12,
      "listitem_content": "Specification_list_02",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "Y"
    },
    {
      "view_count": 0,
      "listitem_type": "text",
      "listitem_id": 103,
      "listitem_content": "1. use the api response to fetch the updated text and edit the array/state in browser",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 0,
      "listitem_type": "text",
      "listitem_id": 104,
      "listitem_content": "1. use the api response to fetch the updated is_favourite flag and view_count, and edit the array/state in browser",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 0,
      "listitem_type": "text",
      "listitem_id": 105,
      "listitem_content": "1. to make all the cards of same size",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 0,
      "listitem_type": "text",
      "listitem_id": 106,
      "listitem_content": "1. Username and Email are required paramters.",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    },
    {
      "view_count": 1,
      "listitem_type": "text",
      "listitem_id": 107,
      "listitem_content": "2. Django will consider email as username and same is required at the time of login. Also a new user can not use the email id that has been used by an already registered user since email is treated as user name and it should be unique.",
      "listitem_details": "https://www.feit.com/wp-content/uploads/2017/04/Aclearfilamant-800x570.jpg",
      "is_favourite": "N"
    }
  ]
}
const favItem = [];
const normalItem = [];
response.listitem.map((item, index) => {
  if (item.is_favourite === "Y") {
    favItem.push(item)
    
  } else {
    normalItem.push(item)
  }
  return null;
})
const fav= [];
const norm= [];
while(favItem.length > 0) {
  fav.push(favItem.splice(0,4));
}
while(normalItem.length > 0) {
  norm.push(normalItem.splice(0,4));
}
const listItem = [{
  tabKey: 1, cardsData: fav
},{
  tabKey: 2, cardsData: norm
},
]
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
    console.log(listItem);
    return (
      <div className="App">
        <TabComponent items={listItem} />
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
