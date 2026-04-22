import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    quantity: ""
  });

  const API = "http://localhost:5000/api/books";

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API);
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addBook = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/add`, formData);
      alert("Book Added Successfully");

      setFormData({
        title: "",
        author: "",
        category: "",
        quantity: ""
      });

      fetchBooks();
    } catch (error) {
      alert("Error adding book");
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      alert("Book Deleted Successfully");
      fetchBooks();
    } catch (error) {
      alert("Error deleting book");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px"
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#1e293b",
          padding: "15px 30px",
          borderRadius: "12px",
          marginBottom: "30px"
        }}
      >
        <h2>📚 Library Management System</h2>
        <h3>Welcome Admin</h3>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}
      >
        <div style={cardStyle}>
          <h3>Total Books</h3>
          <h1>{books.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Available Books</h3>
          <h1>{books.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Library Status</h3>
          <h1>Active</h1>
        </div>
      </div>

      {/* Add Book Form */}
      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "30px"
        }}
      >
        <h2>Add New Book</h2>

        <form onSubmit={addBook}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button type="submit" style={addBtn}>
            Add Book
          </button>
        </form>
      </div>

      {/* Books Section */}
      <div>
        <h2>All Books</h2>

        {books.map((book) => (
          <div
            key={book._id}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px"
            }}
          >
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Quantity: {book.quantity}</p>

            <button
              onClick={() => deleteBook(book._id)}
              style={deleteBtn}
            >
              Delete Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "15px",
  minWidth: "220px",
  flex: 1,
  textAlign: "center"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none"
};

const addBtn = {
  width: "100%",
  padding: "12px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px"
};

const deleteBtn = {
  padding: "10px 20px",
  background: "#dc2626",
  color: "white",
  border: "none",
  borderRadius: "8px"
};

export default Dashboard;