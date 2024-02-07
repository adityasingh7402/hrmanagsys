import connectDb from "../../middleware/mongoose";
import Employee from "../../models/Employee";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, position } = req.body;
    let u = new Employee({ name, position });
    console.log(u);
    try {
      await u.save();
      res.status(200).json({ success: "success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
