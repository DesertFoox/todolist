import React, { createContext, useState } from "react";
import ITaskInterface from "../interfaces/ITaskInterface";

// Create the context
interface TaskContextProps {
  tasks: ITaskInterface[];
  addTask: (task: ITaskInterface) => void;
  setTask: any;
}

interface Props {
  children: React.ReactNode;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  setTask: () => {},
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

  const setTask = (data: any) => setTasks(data);
  return (
    <TaskContext.Provider value={{ tasks, addTask, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
