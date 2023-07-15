import TaskCard from "../components/TaskCard/TaskCard";

export default function App() {
  const task = {
    title: "Create Task Managment",
    creator: "Salar",
    tag: "Project",
    description:
      "Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem illum repudiandae recusandae maxime debitis quod rem et veniam, possimus libero quaerat optio, eaque dolorem ex cupiditate accusantium, sunt aspernatur.",
  };

  return (
    <div className="mx-auto bg-[#1C1A42] w-[1300px]  h-a  rounded-md mt-10 p-3">
      <h1 className="text-center text-white text-3xl font-bold mt-3">
        Todolist
      </h1>

      <div className="flex justify-between mt-6">
        <div className="w-1/4">
          <h2 className="text-center bg-red-500 rounded-lg  bg-opacity-75 p-4 text-red-100 text-lg font-semibold mb-2">
            Not Started
          </h2>
          <TaskCard
            title={task.title}
            creator={task.creator}
            tag={task.tag}
            description={task.description}
            startDate={"1402/2/3"}
            endDate={"1402/2/3"}
          />  
        
        </div>
        <div className="w-1/4 ">
          <h2 className="text-center text-yellow-100 text-lg font-semibold mb-2 bg-yellow-500 bg-opacity-75 rounded-lg p-4 ml-4">
            In Progress
          </h2>
          {/* In progress tasks */}
        </div>
        <div className="w-1/4">
          <h2 className="text-center text-green-100 text-lg font-semibold mb-2  bg-green-500 bg-opacity-75 rounded-lg p-4 ml-4">
            Completed
          </h2>
          {/* Completed tasks */}
        </div>
        <div className="w-1/4 ">
          <h2 className="text-center text-blue-100 text-lg font-semibold mb-2 bg-blue-500 bg-opacity-75 rounded-lg p-4 ml-4">
            Testing
          </h2>
          {/* Testing tasks */}
        </div>
      </div>
    </div>
  );
}
