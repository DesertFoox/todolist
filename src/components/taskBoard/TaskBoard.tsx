import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import TaskList from "../taskList/TaskList";
import ITaskInterface from "../../core/interfaces/ITaskInterface";

interface TaskBoardProps {
  tasks: ITaskInterface[];
  onDragEnd: (result: DropResult) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onDragEnd }) => {
  const statuses = ["notStarted", "inProgress", "completed", "testing"];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-between mt-6">
        {statuses.map((status) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <>
                <TaskList tasks={tasks} status={status} />
                <div ref={provided.innerRef} {...provided.droppableProps} />
              </>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
