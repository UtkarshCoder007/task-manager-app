// frontend/src/pages/TaskDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
        setTask(res.data);
      } catch (err) {
        setError("Could not fetch task.");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  if (loading) return <p>Loading task...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div>
      <h2>Task Details</h2>
      <div className="card mt-4">
        <div className="card-body">
          <h4 className="card-title">{task.title}</h4>
          <p className="card-text">{task.description || "No description provided."}</p>
          <p className="card-text">
            <strong>Status:</strong> {task.completed ? "Completed" : "Pending"}
          </p>
          <Link to="/" className="btn btn-outline-secondary">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
