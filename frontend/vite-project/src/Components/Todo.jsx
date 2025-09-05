import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Todo = ({ todos, onEdit, onDelete }) => {
  if (!todos.length) {
    return (
      <p className="text-center text-gray-500 mt-6">No todos available 🚀</p>
    );
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/todo/${id}`)
      .then(() => {
        toast.success("Todo deleted ✅");
      }).catch((e) => {
        toast.error( e,"Failed to delete todo ❌");
      });
  };

  return (
    <div className="grid gap-4 mt-6">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition duration-200"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {todo.title}
            </h3>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                todo.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {todo.completed ? "Completed ✅" : "Not Completed ❌"}
            </span>
          </div>

          <p className="text-gray-600 mt-2">{todo.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">

            <button
              onClick={() => handleDelete(todo._id)}
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
            >
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
