import React from "react";

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
