// frontend/src/pages/Dashboard.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../redux/taskActions";
import { Link } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h2>Tasks</h2>
        <Link to="/add-task" className="btn btn-primary">
          Add Task
        </Link>
      </div>

      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-danger">{error}</p>}

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="list-group">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
              </div>
              <div>
                <Link to={`/task/${task._id}`} className="btn btn-outline-info btn-sm me-2">
                  View
                </Link>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
