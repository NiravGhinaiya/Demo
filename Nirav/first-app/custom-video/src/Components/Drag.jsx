import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Drag = () => {
    return (
        <>
            <h1>hello</h1>
            <DragDropContext>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default Drag