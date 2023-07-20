import React, { useContext } from "react";
import AddTaskModal from "../components/addTaskModal/AddTaskModal";
import TaskBoard from "../components/taskBoard/TaskBoard";
import { TaskContext } from "../core/context/TaskContext";

const Task: React.FC = () => {
  const { addTask, tasks, setTask } = useContext(TaskContext);
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
      <AddTaskModal onAddTask={addTask} />
      <TaskBoard tasks={tasks} onDragEnd={onDragEnd} />
    </>
  );
};

export default Task;
