
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tracker = () => {
  const [visitor, setVisitor] = useState("");
  const [visitors, setVisitors] = useState(new Set());
  const addVisitor = () => {
    if (!visitor.trim()) return;
    if (visitors.has(visitor)) {
      toast.warning("Visitor already exists!", {
        autoClose: 2000,
      });
      return;
    }
    setVisitors(new Set([...visitors, visitor]));
    toast.success("Visitor added successfully!", {
      autoClose: 2000,
    });
    setVisitor("");
  };

  return (
    <div className="min-h-screen bg-green-200 flex justify-center items-center">
      <div className="bg-gray-100 p-4 w-5/6 lg:w-1/3 rounded-xl drop-shadow-xl flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center">
          Unique Visitor Tracker
        </h2>
        <input
          type="text"
          placeholder="Enter visitor ID / email"
          value={visitor}
          onChange={(e) => setVisitor(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={addVisitor}
          disabled={!visitor}
          className="bg-green-500 text-white py-2 rounded disabled:bg-green-300"
        >
          Add Visitor
        </button>
        <p className="text-sm text-center">
          Total Unique Visitors: <b>{visitors.size}</b>
        </p>
        <ul className="list-disc ml-5 text-sm">
          {[...visitors].map((id, index) => (
            <li key={index}>{id}</li>
          ))}
        </ul>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Tracker;

