import React, { useState } from "react";
import ITaskInterface from "../../core/interfaces/ITaskInterface";
import EditTaskForm from "../editTaskForm/EditTaskForm";

interface EditTaskModalProps {
  task: ITaskInterface;
  id: string;
  onSave: (task: ITaskInterface) => void;
  onCancel: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-[#1C1A42] p-8 rounded-lg   text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <EditTaskForm task={task} onSave={onSave} onCancel={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTaskModal;
