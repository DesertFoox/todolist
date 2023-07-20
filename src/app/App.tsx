import React, { useState } from "react";

import TaskBoard from "../components/taskBoard/TaskBoard";
import ITaskInterface from "../core/interfaces/ITaskInterface";
import AddTaskModal from "../components/addTaskModal/AddTaskModal";
import { TaskProvider } from "../core/context/TaskContext";
import Task from "../pages/Task";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Task />
    </TaskProvider>
  );
};

export default App;
