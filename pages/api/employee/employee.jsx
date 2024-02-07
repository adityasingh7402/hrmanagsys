import React from "react";

const employee = () => {
  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: John Doe</p>
      <p>Position: Software Engineer</p>
      <button onClick={() => alert("You clicked the button!")}>Click me</button>
    </div>
  );
};

export default employee;
