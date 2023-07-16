import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "../components/TaskCard/TaskCard";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: `item1`,
      title: "Create Task Management",
      creator: "Salar",
      tag: "Project",
      description:
        "Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem illum repudiandae recusandae maxime debitis quod rem et veniam, possimus libero quaerat optio, eaque dolorem ex cupiditate accusantium, sunt aspernatur.",
      startDate: "1402/2/3",
      endDate: "1402/2/3",
      status: "notStarted",
    },
    {
      id: `item2`,
      title: "Create Task Management",
      creator: "Salar",
      tag: "Project",
      description:
        "Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem illum repudiandae recusandae maxime debitis quod rem et veniam, possimus libero quaerat optio, eaque dolorem ex cupiditate accusantium, sunt aspernatur.",
      startDate: "1402/2/3",
      endDate: "1402/2/3",
      status: "notStarted",
    },
    {
      id: `item3`,
      title: "Create Task Management",
      creator: "Salar",
      tag: "Project",
      description:
        "Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem illum repudiandae recusandae maxime debitis quod rem et veniam, possimus libero quaerat optio, eaque dolorem ex cupiditate accusantium, sunt aspernatur.",
      startDate: "1402/2/3",
      endDate: "1402/2/3",
      status: "inProgress",
    },
  ]);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    console.log(result);
    if (source.dragDropContext === destination.dragDropContext) {
      const draggedTask: any = tasks.find(
        (task) => task.id === result.draggableId
      );
      draggedTask.status = destination.droppableId;
      setTasks(tasks);
    }
  };

  return (
    <div className="mx-auto bg-[#1C1A42] w-[1300px] h-a rounded-md mt-10 p-3">
      <h1 className="text-center text-white text-3xl font-bold mt-3">
        Todolist
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-between mt-6">
          <Droppable droppableId="notStarted">
            {(provided) => (
              <div className="w-1/4">
                <h2 className="text-center bg-red-500 rounded-lg bg-opacity-75 p-4 text-red-100 text-lg font-semibold mb-2">
                  Not Started
                </h2>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks.map((task, index) => {
                    if (task.status === "notStarted") {
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskCard
                                id={task.id}
                                title={task.title}
                                creator={task.creator}
                                tag={task.tag}
                                description={task.description}
                                startDate={task.startDate}
                                endDate={task.endDate}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    }
                    return null;
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          <Droppable droppableId="inProgress">
            {(provided) => (
              <div className="w-1/4">
                <h2 className="text-center text-yellow-100 text-lg font-semibold mb-2 bg-yellow-500 bg-opacity-75 rounded-lg p-4 ml-4">
                  In Progress
                </h2>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks.map((task, index) => {
                    if (task.status === "inProgress") {
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskCard
                                id={task.id}
                                title={task.title}
                                creator={task.creator}
                                tag={task.tag}
                                description={task.description}
                                startDate={task.startDate}
                                endDate={task.endDate}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    }
                    return null;
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          <Droppable droppableId="completed">
            {(provided) => (
              <div className="w-1/4">
                <h2 className="text-center text-green-100 text-lg font-semibold mb-2 bg-green-500 bg-opacity-75 rounded-lg p-4 ml-4">
                  Completed
                </h2>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks.map((task, index) => {
                    if (task.status === "completed") {
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskCard
                                id={task.id}
                                title={task.title}
                                creator={task.creator}
                                tag={task.tag}
                                description={task.description}
                                startDate={task.startDate}
                                endDate={task.endDate}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    }
                    return null;
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="testing">
            {(provided) => (
              <div className="w-1/4">
                <h2 className="text-center text-blue-100 text-lg font-semibold mb-2 bg-blue-500 bg-opacity-75 rounded-lg p-4 ml-4">
                  Testing
                </h2>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks.map((task, index) => {
                    if (task.status === "testing") {
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskCard
                                id={task.id}
                                title={task.title}
                                creator={task.creator}
                                tag={task.tag}
                                description={task.description}
                                startDate={task.startDate}
                                endDate={task.endDate}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    }
                    return null;
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}
