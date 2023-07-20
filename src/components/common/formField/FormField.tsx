interface FormFieldProps {
  label: string;
  name: string;
  errors: any;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  errors,
  children,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-white font-bold mb-2">
      {label}
    </label>
    {children}
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

export default FormField;
