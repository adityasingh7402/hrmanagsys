import mongoose from "mongoose";

let Department;

try {
  // Try to retrieve the existing Department model
  Department = mongoose.model("Department");
} catch {
  // If the model doesn't exist, define it
  const DepartmentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    empId: {
      type: String,
      required: true,
    },
  });

  Department = mongoose.model("Department", DepartmentSchema);
}

export default Department;
