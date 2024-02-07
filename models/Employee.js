import mongoose from "mongoose";

let Employee;

try {
  // Try to retrieve the existing Employee model
  Employee = mongoose.model("Employee");
} catch {
  // If the model doesn't exist, define it
  const EmployeeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    empId: {
      type: String,
      required: true
    },
  });

  Employee = mongoose.model("Employee", EmployeeSchema);
}

export default Employee;
