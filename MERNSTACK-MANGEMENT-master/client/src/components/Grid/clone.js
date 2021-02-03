import React, { Component } from "react";
import ReactFlow from "react-flow-renderer";

export default class Platform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duplicates: [],
      original: [
        {
          id: "original",
          data: { label: "original", duplicate: false },
          position: { x: 100, y: 100 },
          style: this.style
        }
      ]
    };
  }

  lastId = 0;
  style = { background: "#ccc", width: 50, height: 50, borderRadius: 50 };

  onNodeDragStart = (evt, node) => {};

  onNodeDragStop = (evt, node) => {
    if (!node.data.duplicate) {
      this.setState(prevState => ({
        original: prevState.original.map(n => {
          if (n.id !== node.id) return node;

          return {
            ...node,
            position: {
              x: node.position.x,
              y: node.position.y
            }
          };
        }),
        duplicates: [
          ...prevState.duplicates,
          {
            ...node,
            id: (this.lastId++).toString(10),
            data: {
              ...node.data,
              duplicate: true,
              label: "duplicate"
            }
          }
        ]
      }));
    }
  };

  render() {
    console.log("state: ", this.state);
    const elements = this.state.original.concat(this.state.duplicates);
    const graphStyles = { width: "100%", height: "800px" };

    return (
      <div>
        <ReactFlow
          onNodeDragStart={this.onNodeDragStart}
          onNodeDragStop={this.onNodeDragStop}
          style={graphStyles}
          elements={elements}
        />
      </div>
    );
  }
}
