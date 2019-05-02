import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Popover,
  PopoverBody
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./card.css";
class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle(e) {
    e.stopPropagation();
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div className="cardDimension">
        <Card>
          <CardImg
            width="200px"
            className="imageCard"
            src={this.props.imageUrl}
            alt="Card image cap"
          />
          <div className="iconDivLeft">
            <span id={`editPop${this.props.keyData}`} className="ml-1 btn">
              <FontAwesomeIcon icon="ellipsis-v" />
            </span>
            <Popover
              placement="bottom"
              isOpen={this.state.popoverOpen}
              target={`editPop${this.props.keyData}`}
              toggle={this.toggle}
            >
              <PopoverBody>
                <div className="">
                  <FontAwesomeIcon icon="edit" />
                </div>
                <div className="">
                  <FontAwesomeIcon icon="trash" />
                </div>
              </PopoverBody>
            </Popover>
          </div>
          <div className="iconDivRight">
            <span className="ml-1 btn">
              <FontAwesomeIcon icon="heart" />
            </span>
            <span className="ml-1 btn">
              <FontAwesomeIcon icon="share-alt" />
            </span>
            <span className="ml-1 btn">
              <FontAwesomeIcon icon="share" />
            </span>
          </div>

          <CardBody>
            {this.props.cardText ? (
              <CardText>{this.props.cardText}</CardText>
            ) : null}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardComponent;