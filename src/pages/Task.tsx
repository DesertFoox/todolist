import React, { useContext } from "react";

import AddTaskModal from "../components/addTaskModal/AddTaskModal";
import TaskBoard from "../components/taskBoard/TaskBoard";
import { TaskContext } from "../core/context/TaskContext";

const Task: React.FC = () => {
  const { tasks, setTask, addTask } = useContext(TaskContext);
  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    console.log(result);
    if (source.dragDropContext === destination.dragDropContext) {
      const draggedTask: any = tasks.find(
        (task) => task.id === result.draggableId
      );
      draggedTask.status = destination.droppableId;
      setTask(tasks);
    }
  };
  return (
    <>
      <div className="mx-auto bg-[#1C1A42] w-[1300px] h-a rounded-md mt-10 p-3">
        <h1 className="text-center text-white text-3xl font-bold mt-3">
          Todolist
        </h1>
        <TaskBoard tasks={tasks} onDragEnd={onDragEnd} />
      </div>
      <AddTaskModal onAddTask={addTask} />
    </>
  );
};

export default Task;
