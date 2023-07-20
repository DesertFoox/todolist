import React from "react";
import { Draggable } from "react-beautiful-dnd";

import TaskCard from "../TaskCard/TaskCard";
import ITaskInterface from "../../core/interfaces/ITaskInterface";

interface TaskListProps {
  tasks: ITaskInterface[];
  status: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status }) => {
  let color = "";

  switch (status) {
    case "notStarted":
      color = "bg-notstarted";
      break;
    case "inProgress":
      color = "bg-inProgress";
      break;
    case "completed":
      color = "bg-completed";
      break;
    case "testing":
      color = "bg-testing";
      break;
    default:
      color = ""; 
      break;
  }

  return (
    <div className={`w-1/4 ${status === "notStarted" ? "" : "ml-4"}`}>
      <h2
        className={`text-center text-white text-lg font-semibold mb-2 ${color}  bg-opacity-75 rounded-lg p-4`}
      >
        {status === "notStarted" ? "Not Started" : status}
      </h2>
      {tasks.map((task, index) => {
        if (task.status === status) {
          return (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard
                    id={task.id}
                    title={task.title}
                    creator={task.creator}
                    tag={task.tag}
                    description={task.description}
                    startDate={task.startDate}
                    endDate={task.endDate}
                    status={status}
                  />
                </div>
              )}
            </Draggable>
          );
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
