import React, { createContext, useState } from "react";
import ITaskInterface from "../interfaces/ITaskInterface";

// Create the context
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
// Create the context provider
const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<ITaskInterface[]>([]);

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
