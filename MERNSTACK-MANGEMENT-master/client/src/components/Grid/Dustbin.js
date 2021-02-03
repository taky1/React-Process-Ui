import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

import Flow from './FlowP'
const style = {
    height: '100%',
    width: '100%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
export const Dustbin = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const offset = monitor.getClientOffset();
            if (offset) {
                let listOfOffset = props.list
                let ObjToset ={
                    offset,
                    item,
                     
                }
                if(listOfOffset!==undefined)
                listOfOffset.push(ObjToset)
                 props.setList(listOfOffset)
             }
          },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
 
    return (<div ref={drop} style={{ ...style }}>



<Flow list={props.list}/>


        
 		</div>);
};
