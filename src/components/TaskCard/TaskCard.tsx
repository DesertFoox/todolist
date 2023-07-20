import React, { useContext, useState } from "react";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TaskContext } from "../../core/context/TaskContext";
import ITaskInterface from "../../core/interfaces/ITaskInterface";
import EditTaskModal from "../editTaskModal/EditTaskModal";

const TaskCard: React.FC<ITaskInterface> = ({
  id,
  title,
  creator,
  tag,
  description,
  startDate,
  endDate,
  status,
}) => {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedTask: ITaskInterface) => {
    editTask(id, updatedTask);
    setIsEditing(false);
  };
  const truncateDescription = (
    description: string,
    wordLimit: number
  ): string => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <div key={id} className="bg-white rounded-lg p-4 shadow-md mb-2 ">
      {isEditing && (
        <EditTaskModal
          id={id}
          task={{
            id,
            title,
            creator,
            tag,
            description,
            startDate,
            endDate,
            status,
          }}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      )}

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#9B7B8A] text-sm mb-2 bg-[#F5E0E9] w-[5rem] text-center rounded px-2">
        {tag}
      </p>
      <p className="text-gray-500 text-sm mb-2 px-2">Creator: {creator}</p>
      <p className="text-gray-500 text-sm mb-2 px-2">
        {startDate} {"--->"} {endDate}
      </p>
      <p className="text-gray-700 text-sm mb-2 px-2">
        {truncateDescription(description, 7)}
      </p>
      <div className="px-2 mb-2 flex gap-2">
        <button
          className="text-blue-400"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FiEdit2 />
        </button>
        <button
          className="text-red-400"
          onClick={() => {
            deleteTask(id);
          }}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
