import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ReactSortable } from "react-sortablejs"
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

/* Assets */
import './styles/Kanban.css'

const useStyle = makeStyles({
    taskContainer: {
        marginTop: 10,
        display: 'flex'
    },
})

function Kanban(props) {
    const classes = useStyle()
    const [column, setColumn] = useState(props.columns)

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        let columns = [...column]
    
        if (source.droppableId !== destination.droppableId) {
          let sourceColumn = [];
          let destColumn = [];
          let sourceIdx, destIdx = null
    
          for (let i = 0; i < column.length; i++) {
            if (column[i].id === source.droppableId) {
              sourceColumn = column[i]
              sourceIdx = i
            } else if (column[i].id === destination.droppableId) {
              destColumn = column[i]
              destIdx = i
            }
          }
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
    
          sourceColumn.items = sourceItems
          destColumn.items = destItems
    
          columns[sourceIdx] = sourceColumn
          columns[destIdx] = destColumn
        } else {
          let idx = null
          let newColumn = []
    
          for(let i = 0; i < column.length; i++) {
            if (column[i].id === source.droppableId) {
              newColumn = column[i]
              idx = 1
            }
          }
    
          const copiedItems = [...newColumn.items]
          const [removed] = copiedItems.splice(source.index, 1)
          copiedItems.splice(destination.index, 0, removed)
    
          newColumn.items = copiedItems
          columns[idx] = newColumn
        }
    };

    return (
        <div>
            <DragDropContext onDragEnd={result => onDragEnd(result)}>
                <ReactSortable
                    animation={150}
                    easing="cubic-bezier(0.83, 0, 0.17, 1)"
                    ghostClass="ghost"
                    list={column}
                    setList={setColumn}
                    className={classes.taskContainer}
                >
                {column.map((column, index) => {
                    return (
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                        }}
                        key={column.id}  
                    >
                        
                        <h2>{column.name}</h2>

                        <div style={{ margin: 8 }}>
                        <Droppable droppableId={column.id} key={column.id}>
                            {(provided, snapshot) => {
                            return (
                                <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver
                                    ? "lightblue"
                                    : "lightgrey",
                                    padding: 4,
                                    width: 250,
                                    minHeight: 500
                                }}
                                >
                                {column.items.map((item, index) => {
                                    return (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => {
                                        return (
                                            <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                userSelect: "none",
                                                padding: 16,
                                                margin: "0 0 8px 0",
                                                minHeight: "50px",
                                                backgroundColor: snapshot.isDragging
                                                ? "#263B4A"
                                                : "#456C86",
                                                color: "white",
                                                ...provided.draggableProps.style
                                            }}
                                            >
                                            {item.content}
                                            </div>
                                        );
                                        }}
                                    </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                </div>
                            )
                            }}
                        </Droppable>
                        </div>
                    </div>
                    )
                })}
                </ReactSortable>
            </DragDropContext>
        </div>
    )
}

export default Kanban