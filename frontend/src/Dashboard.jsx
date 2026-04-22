import React from "react";

function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Library Management Dashboard</h1>

      <h2>Welcome Admin 📚</h2>

      <hr />

      <h3>Available Modules</h3>

      <ul>
        <li>Add Book</li>
        <li>View All Books</li>
        <li>Delete Book</li>
        <li>Issue Book</li>
        <li>Return Book</li>
        <li>User Management</li>
      </ul>
    </div>
  );
}

export default Dashboard;