import React, { createContext, useState } from "react";
import ITaskInterface from "../interfaces/ITaskInterface";

// Create the context
interface TaskContextProps {
  tasks: ITaskInterface[];
  addTask: (task: ITaskInterface) => void;
}

interface Props {
  children: React.ReactNode;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
});
// Create the context provider
const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<ITaskInterface[]>([]);

  const addTask = (task: ITaskInterface) => {
    const newTask = { ...task, id: `item${tasks.length + 1}`, status: "notStarted" };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
