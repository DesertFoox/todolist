import React, { useState } from "react";
import AddTaskForm from "../taskForm/AddTaskForm";
import ITaskInterface from "../../core/interfaces/ITaskInterface";

interface AddTaskModalProps {
  onAddTask: (task: ITaskInterface) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onAddTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 absolute bg-[#1C1A42] right-20 bottom-10 text-white font-bold rounded-md focus:outline-none"
      >
        Add Task
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-[#1C1A42] p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold text-center text-white mb-4">
              Add New Task
            </h2>
            <AddTaskForm onAddTask={onAddTask} closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default AddTaskModal;
