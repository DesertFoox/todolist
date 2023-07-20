import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ITaskInterface from "../../core/interfaces/ITaskInterface";
import validationSchema from "../../core/validations/TaskFormValidation";
import FormField from "../common/formField/FormField";

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
      <FormField label="Title" name="title" errors={errors}>
        <input
          {...register("title")}
          type="text"
          defaultValue={task.title}
          id="title"
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.title ? "border-red-500" : ""
          }`}
        />
      </FormField>
      <FormField label="Description" name="title" errors={errors}>
        <textarea
          {...register("description")}
          id="description"
          defaultValue={task.description}
          rows={4}
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.description ? "border-red-500" : ""
          }`}
        />
      </FormField>
      <FormField label="Tag" name="tag" errors={errors}>
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
      </FormField>

      <FormField label="Start Date" name="startDate" errors={errors}>
        <input
          {...register("startDate")}
          type="date"
          defaultValue={task.startDate}
          id="startDate"
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.startDate ? "border-red-500" : ""
          }`}
        />
      </FormField>

      <FormField label="End Date" name="endDate" errors={errors}>
        <input
          {...register("endDate")}
          type="date"
          defaultValue={task.endDate}
          id="endDate"
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.endDate ? "border-red-500" : ""
          }`}
        />
      </FormField>
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
