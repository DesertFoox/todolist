import React, { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import TaskList from "../taskList/TaskList";
import ITaskInterface from "../../core/interfaces/ITaskInterface";

interface TaskBoardProps {
  tasks: ITaskInterface[];
  onDragEnd: (result: DropResult) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onDragEnd }) => {
  const statuses = ["notStarted", "inProgress", "completed", "testing"];

  const [selectedFilter, setSelectedFilter] = useState<string | "all">("all");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mb-4 w-[10rem]">
        <select
          id="filter"
          className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>


      <div className="flex justify-between mt-6">
        {/* Render Droppable TaskLists */}
        {statuses.map((status) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <>
                {/* Only render TaskList when selectedFilter matches the status or "all" */}
                {selectedFilter === status || selectedFilter === "all" ? (
                  <TaskList
                    tasks={tasks.filter((task) =>
                      selectedFilter === "all"
                        ? true
                        : task.status === selectedFilter
                    )}
                    status={status}
                  />
                ) : null}
                <div ref={provided.innerRef} {...provided.droppableProps} />
              </>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
