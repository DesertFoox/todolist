import React from "react";

interface TaskCardProps {
  id: string;
  title: string;
  creator: string;
  tag: string;
  description: string;
  startDate: string;
  endDate: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  creator,
  tag,
  description,
  startDate,
  endDate,
}) => {
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
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#9B7B8A] text-sm mb-2 bg-[#F5E0E9] w-[5rem] text-center rounded px-2">
        {tag}
      </p>
      <p className="text-gray-500 text-sm mb-2 px-2">Creator: {creator}</p>
      <p className="text-gray-500 text-sm mb-2 px-2">
        {startDate} {"--->"} {endDate}
      </p>
      <p className="text-gray-700 text-sm px-2">
        {truncateDescription(description, 7)}
      </p>
    </div>
  );
};

export default TaskCard;
