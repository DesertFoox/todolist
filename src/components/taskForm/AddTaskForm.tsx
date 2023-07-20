import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormField from "../common/formField/FormField";
import validationSchema from "../../core/validations/TaskFormValidation";
import ITaskInterface from "../../core/interfaces/ITaskInterface";

interface AddTaskFormProps {
  closeModal: any;
  onAddTask: (task: ITaskInterface) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    onAddTask(data);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <FormField label="Title" name="title" errors={errors}>
        <input
          {...register("title")}
          type="text"
          id="title"
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.title ? "border-red-500" : ""
          }`}
        />
      </FormField>

      <FormField label="Creator" name="creator" errors={errors}>
        <input
          {...register("creator")}
          type="text"
          id="creator"
          className={`w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none ${
            errors.creator ? "border-red-500" : ""
          }`}
        />
      </FormField>

      <FormField label="Description" name="description" errors={errors}>
        <textarea
          {...register("description")}
          id="description"
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
          onClick={closeModal}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md focus:outline-none ml-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
