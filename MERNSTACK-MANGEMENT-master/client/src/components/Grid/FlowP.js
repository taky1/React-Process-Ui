import React, { useEffect, useState } from "react";
import ReactFlow, {
  removeElements,
  updateEdge,
  addEdge,
  MiniMap,
} from "react-flow-renderer";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";

import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";


const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const onElementClick = (event, elementt) => console.log('click', elementt);

const OverviewFlow = (p) => {
  console.log("p", p);

  const Elem = [
    {
      id: "1",
      type: "input",
      data: {
        label: <>W</>,
      },
      position: { x: 250, y: 250 },
    },
  ];

  const [elements, setElements] = useState(Elem);
  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
 

  useEffect(() => {
    console.log(elements);
    let el = [];
    p.list.map((items, index) => {
      let ObjeTopush = {
        id: index.toString(),
        type: "default",
        data: {
          label: (
            <>
              {items.item.name === "MailOutlineIcon" ? (
                <MailOutlineIcon style={{ fontSize: 20, color: "#002984" }} />
              ) : items.item.name === "CalendarTodayTwoToneIcon" ? (
                <CalendarTodayTwoToneIcon
                  style={{ color: "#eec360", fontSize: 20 }}
                />
              ) : items.item.name === "LaunchSharpIcon" ? (
                <LaunchSharpIcon style={{ fontSize: 20, color: "#93d2f0" }} />
              ) : items.item.name === "AssignmentIndTwoToneIcon" ? (
                <AssignmentIndTwoToneIcon
                  style={{ fontSize: 20, color: "#adee82" }}
                />
              ) : null}
            </>
          ),
        },
        position: { x: items.offset.x - 380, y: items.offset.y + 20 },
      };
      el.push(ObjeTopush);
    });
    setElements(el);

    console.log("success");
  }, [p]);
  return (
    <ReactFlow
      elements={elements}
      onElementClick={onElementClick}
      onEdgeUpdate={onEdgeUpdate}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#ff0072";
          return "#eee";
        }}

        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;
          return "#fff";
        }}
        nodeBorderRadius={2}
      />
    </ReactFlow>
  );
};
export default OverviewFlow;
