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
        backgroundColor: "#0f172a",
        color: "white",
        padding: "30px"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Library Management Dashboard 📚
      </h1>

      <h2>Add New Book</h2>

      <form onSubmit={addBook}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Add Book
        </button>
      </form>

      <hr />

      <h2>All Books</h2>

      {books.map((book) => (
        <div
          key={book._id}
          style={{
            border: "1px solid white",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px"
          }}
        >
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Category: {book.category}</p>
          <p>Quantity: {book.quantity}</p>

          <button onClick={() => deleteBook(book._id)}>
            Delete Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;