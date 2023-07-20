import React, { useContext } from "react";
import AddTaskModal from "../components/addTaskModal/AddTaskModal";
import TaskBoard from "../components/taskBoard/TaskBoard";
import { TaskContext } from "../core/context/TaskContext";

const Task: React.FC = () => {
  const { addTask,tasks } = useContext(TaskContext);
  const handleDragEnd = (result: any) => {
    // Handle drag and drop logic here
  };
  return (
    <>
      <AddTaskModal onAddTask={addTask} />
      <TaskBoard tasks={tasks} onDragEnd={handleDragEnd} />
    </>
  );
};

export default Task;
