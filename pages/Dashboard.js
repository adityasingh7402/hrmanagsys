import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const [token, settoken] = useState("");
  const [employees, setEmployees] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("/api/employees");
      const data = await response.json();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  const handleAddEmployee = () => {
    // Redirect to the Add Employee page
    router.push("/add-employee");
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the employee from the state
        setEmployees(employees.filter((employee) => employee.id !== id));
      } else {
        console.error("Failed to delete the employee.");
      }
    } catch (error) {
      console.error("Failed to delete the employee:", error);
    }
  };

  const handleUpdate = (id) => {
    // Redirect to the Update Employee page
    router.push(`/update-employee/${id}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">HR Management Dashboard</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddEmployee}
      >
        Add Employee
      </button>

      <ul className="mt-4">
        {employees.map((employee) => (
          <li key={employee.id} className="mb-2 flex items-center gap-4">
            <Link href={`/employee/${employee._id}`}>
              <p className="text-blue-500 hover:underline">{employee.name}</p>
            </Link>
            <p className="text-gray-500">{employee.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
