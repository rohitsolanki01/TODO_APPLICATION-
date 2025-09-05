import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.warning("Please fill all fields ⚠️");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/todo", {
        title,
        description,
        completed: false,
      });
      toast.success("✅ Todo created successfully");
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to create todo");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a Todo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter todo title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter todo description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-blue-700 transition duration-200"
          >
            Create Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
