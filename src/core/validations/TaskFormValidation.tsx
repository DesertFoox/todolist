import * as yup from "yup";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  creator: yup.string().required("Creator is required"),
  tag: yup.string().required("Tag is required"),
  description: yup.string().required("Description is required"),
  startDate: yup.string().required("Start Date is required"),
  endDate: yup.string().required("End Date is required"),
});

export default validationSchema;
