import React, { useState } from "react";

import TaskBoard from "../components/taskBoard/TaskBoard";
import ITaskInterface from "../core/interfaces/ITaskInterface";
import AddTaskModal from "../components/addTaskModal/AddTaskModal";
import { TaskProvider } from "../core/context/TaskContext";
import Task from "../pages/Task";

const App: React.FC = () => {

  return (
    <TaskProvider>
      <div className="mx-auto bg-[#1C1A42] w-[1300px] h-a rounded-md mt-10 p-3">
        <h1 className="text-center text-white text-3xl font-bold mt-3">
          Todolist
        </h1>
        <Task />
      </div>
    </TaskProvider>
  );
};

export default App;
