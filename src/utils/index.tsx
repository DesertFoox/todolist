const getStatusColor = (status: string) => {
  switch (status) {
    case "Not Started":
      return "bg-red-500 text-red-100";
    case "In Progress":
      return "bg-yellow-500 text-yellow-100";
    case "Completed":
      return "bg-green-500 text-green-100";
    case "Testing":
      return "bg-blue-500 text-blue-100";
    default:
      return "";
  }
};

export { getStatusColor };
