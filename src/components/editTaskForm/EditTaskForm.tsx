import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ITaskInterface from "../../core/interfaces/ITaskInterface";
import validationSchema from "../../core/validations/TaskFormValidation";

interface EditTaskFormProps {
  task: ITaskInterface;
  onSave: (task: ITaskInterface) => void;
  onCancel: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
  task,
  onSave,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: task,
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-white font-bold mb-2">
          Title
        </label>
        <input
          {...register("title")}
          type="text"
          defaultValue={task.title}
          id="title"
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.title ? "border-red-500" : ""
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Add "tag" select option */}
      <div className="mb-4">
        <label htmlFor="tag" className="block text-white font-bold mb-2">
          Tag
        </label>

        <select
          {...register("tag")}
          id="tag"
          defaultValue={task.tag}
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.tag ? "border-red-500" : ""
          }`}
        >
          <option value="">Select Tag</option>
          <option value="project">Project</option>
          <option value="workshop">Workshop</option>
          <option value="homework">Homework</option>
          <option value="work">Work</option>
        </select>
        {errors.tag && (
          <p className="text-red-500 text-sm mt-1">{errors.tag.message}</p>
        )}
      </div>

      {/* Add date pickers for "startDate" and "endDate" */}
      <div className="mb-4">
        <label htmlFor="startDate" className="block text-white font-bold mb-2">
          Start Date
        </label>
        <input
          {...register("startDate")}
          type="date"
          id="startDate"
          defaultValue={task.startDate}
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.startDate ? "border-red-500" : ""
          }`}
        />
        {errors.startDate && (
          <p className="text-red-500 text-sm mt-1">
            {errors.startDate.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-white font-bold mb-2">
          End Date
        </label>
        <input
          {...register("endDate")}
          type="date"
          id="endDate"
          defaultValue={task.endDate}
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.endDate ? "border-red-500" : ""
          }`}
        />
        {errors.endDate && (
          <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>
        )}
      </div>

      {/* ... Add other input fields for the remaining props */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md focus:outline-none"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md focus:outline-none ml-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTaskForm;
