import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import CarouselComponent from "./carousel";
import "./tab.css";

export default class TabComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
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
                  cardsData={tab.cardsData}
                  tabId={tab.tabKey}
                />
              </TabPane>
            ))}
        </TabContent>
      </div>
    );
  }
}
