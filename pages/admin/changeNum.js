import React, { useState } from "react";
import { useRouter } from "next/router";
import { set } from "mongoose";

const ChangeNum = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    empId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.position) {
      console.error("Name and position are required");
      return;
    }
    try {
      const response = await fetch("/api/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        setFormData({
          name: "",
          position: "",
          empId: "",
        });
      } else {
        const data = await response.json();
        console.error("Registration error:", data.message);

        // Handle error response
      }
    } catch (error) {
      console.error("Failed to register:", error);
      //   Handle fetch error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Add Employee</h1>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <label className="mb-2">
          Name:
          <input
            type="text"
            name="name"
            htmlFor="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="mb-2">
          Position:
          <input
            type="text"
            name="position"
            htmlFor="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label>
          Employee ID:
          <input
            type="text"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default ChangeNum;
