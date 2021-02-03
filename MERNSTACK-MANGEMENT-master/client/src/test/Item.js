import React, { Component } from "react";
import "./Dialog.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diffX: 0,
      diffY: 0,
      dragging: false,
      radius: this.props.radius,
      color: this.props.color,
      icon: this.props.children,
      color1: this.props.couleur1,
      styles: {},
    };

    this._dragStart = this._dragStart.bind(this);
    this._dragging = this._dragging.bind(this);
    this._dragEnd = this._dragEnd.bind(this);
  }

  _dragStart(e) {
    this.setState({
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    });
  }

  _dragging(e) {
    if (this.state.dragging) {
      var left = e.screenX - this.state.diffX;
      var top = e.screenY - this.state.diffY;

      this.setState({
        styles: {
          left: left,
          top: top,
        },
      });
    }
  }

  _dragEnd() {
    this.setState({
      dragging: false,
    });
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  removeNode(node) {
    node.parentNode.removeChild(node);
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var isLeft =
      "drag1" === data ||
      "drag2" === data ||
      "drag3" === data ||
      "drag4" === data;
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "img" + ev.target.id;

    if (isLeft) {
      if (ev.target.nodeName === "IMG") {
        ev.target.parentNode.appendChild(nodeCopy);
        this.removeNode(ev.target);
      } else ev.target.appendChild(nodeCopy);
    } else {
      if (ev.target.nodeName !== "IMG") {
        this.removeNode(document.getElementById(data));
        ev.target.appendChild(nodeCopy);
      }
    }
    ev.stopPropagation();
    return false;
  }

  changeRadius = (a, b, c, d) => {
    this.setState({ radius: a });
    this.setState({ color: b });
    this.setState({ icon: c });
    this.setState({ color1: d });
  };
  
  render() {
    return (
      <div>
        <div id="divLeft">
          <p> TOOLS </p>
          <div
            style={{ paddingTop: 20 }}
            draggable="true"
            onDragStart={event => this.drag(event)}
            id="drag1"
          >
            <MailOutlineIcon
              style={{ fontSize: 60, color: "#bb8fe5", padding: 10 }}
            />
          </div>
        </div>
        <div
          id="divRight"
          onDragStart={event => this.drag(event)}
          draggable="true"
          onDrop={event => this.drop(event)}
          onDragOver={event => this.allowDrop(event)}
        >
          <div>
            <div
              id="divRight1"
              onDragStart={event => this.drag(event)}
              draggable="true"
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight2"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight3"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
   
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
          </div>
          <div>
            <div
              id="divRight6"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight7"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight9"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight8"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
          </div>
          <div>
            <div
              id="divRight7"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight9"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight8"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight8"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight8"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
          </div>
          <div>
            <div
              id="divRight7"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight9"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight8"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight7"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight9"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
          </div>
          <div>
            <div
              id="divRight7"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight9"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight8"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight7"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight9"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight4"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
            <div
              id="divRight5"
              onDragStart={event => this.drag(event)}
              onDrop={event => this.drop(event)}
              onDragOver={event => this.allowDrop(event)}
            />
          </div>
        
        </div>
      </div>
    );
  }
}
