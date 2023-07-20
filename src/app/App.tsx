import React, { useState } from "react";
import TaskBoard from "../components/taskBoard/TaskBoard";
import ITaskInterface from "../core/interfaces/ITaskInterface";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITaskInterface[]>([
    {
      id: `item1`,
      title: "Create Task Management",
      creator: "Salar",
      tag: "Project",
      description:
        "Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem illum repudiandae recusandae maxime debitis quod rem et veniam, possimus libero quaerat optio, eaque dolorem ex cupiditate accusantium, sunt aspernatur.",
      startDate: "1402/2/3",
      endDate: "1402/2/3",
      status: "notStarted",
    },
    {
      id: `item2`,
      title: "Create Task Management",
      creator: "Salar",
      tag: "Project",
      description:
        "Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem illum repudiandae recusandae maxime debitis quod rem et veniam, possimus libero quaerat optio, eaque dolorem ex cupiditate accusantium, sunt aspernatur.",
      startDate: "1402/2/3",
      endDate: "1402/2/3",
      status: "notStarted",
    },
    {
      id: `item3`,
      title: "Create Task Management",
      creator: "Salar",
      tag: "Project",
      description:
        "Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem illum repudiandae recusandae maxime debitis quod rem et veniam, possimus libero quaerat optio, eaque dolorem ex cupiditate accusantium, sunt aspernatur.",
      startDate: "1402/2/3",
      endDate: "1402/2/3",
      status: "inProgress",
    },
  ]);
  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const newTasks = Array.from(tasks);
      const [draggedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, draggedTask);

      setTasks(newTasks);
    } else {
      const newTasks = Array.from(tasks);
      const [draggedTask] = newTasks.splice(source.index, 1);
      draggedTask.status = destination.droppableId;
      newTasks.splice(destination.index, 0, draggedTask);

      setTasks(newTasks);
    }
  };

  return (
    <div className="mx-auto bg-[#1C1A42] w-[1300px] h-a rounded-md mt-10 p-3">
      <h1 className="text-center text-white text-3xl font-bold mt-3">
        Todolist
      </h1>
      <TaskBoard tasks={tasks} onDragEnd={onDragEnd} />
    </div>
  );
};

export default App;
