import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import classnames from "classnames";
import CarouselComponent from "./carousel";
import "./tab.css";

export default class TabComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      modal: false,
      card: {}
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  toggleViewModal = card => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      card: card
    }));
  };

  render() {
    return (
      <div>
        <Nav tabs>
          {this.props.items &&
            this.props.items.map(tab => (
              <NavItem key={tab.tabKey}>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === tab.tabKey
                  })}
                  onClick={() => {
                    this.toggle(tab.tabKey);
                  }}
                >
                  Tab{tab.tabKey}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.props.items &&
            this.props.items.map(tab => (
              <TabPane key={tab.tabKey} tabId={tab.tabKey}>
                <CarouselComponent
                  toggleViewModal={this.toggleViewModal}
                  cardsData={tab.cardsData}
                  tabId={tab.tabKey}
                />
              </TabPane>
            ))}
        </TabContent>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleViewModal}
          className={this.props.className}
          backdrop={true}
        >
          <ModalHeader toggle={this.toggleViewModal}>Card</ModalHeader>
          <ModalBody>
            <img
              width="200px"
              className="imageCard"
              alt={this.state.card.listitem_content}
              src={this.state.card.listitem_details}
            />
            <div>{this.state.card.listitem_content}</div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
