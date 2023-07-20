import React, { createContext, useState } from "react";

import ITaskInterface from "../interfaces/ITaskInterface";
interface TaskContextProps {
  tasks: ITaskInterface[];
  addTask: (task: ITaskInterface) => void;
  setTask: any;
  editTask: (id: string, updatedTask: ITaskInterface) => void;
  deleteTask: (id: string) => void;
  findTask: any;
}

interface Props {
  children: React.ReactNode;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  setTask: () => {},
  editTask: () => {},
  deleteTask: () => {},
  findTask: () => {},
});
const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<ITaskInterface[]>([
    {
      title: "create todo list",
      creator: "salar",
      description: "i should create todo list and push it into github",
      tag: "project",
      startDate: "2023-07-20",
      endDate: "2023-07-22",
      id: "item1",
      status: "notStarted",
    },
    {
      title: "create todo list",
      creator: "salar",
      description: "i should create todo list and push it into github",
      tag: "project",
      startDate: "2023-07-20",
      endDate: "2023-07-22",
      id: "item2",
      status: "inProgress",
    },
    {
      title: "create todo list",
      creator: "salar",
      description: "i should create todo list and push it into github",
      tag: "project",
      startDate: "2023-07-20",
      endDate: "2023-07-22",
      id: "item3",
      status: "completed",
    },
    {
      title: "create todo list",
      creator: "salar",
      description: "i should create todo list and push it into github",
      tag: "project",
      startDate: "2023-07-20",
      endDate: "2023-07-22",
      id: "item4",
      status: "testing",
    },
  ]);

  const addTask = (task: ITaskInterface) => {
    const newTask = {
      ...task,
      id: `item${tasks.length + 1}`,
      status: "notStarted",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (id: string, updatedTask: ITaskInterface) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const setTask = (data: any) => setTasks(data);

  const findTask = (id: string) => tasks.filter((task) => task.id === id);
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, setTask, editTask, deleteTask, findTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
