// frontend/src/redux/taskActions.js
import axios from "axios";

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: "GET_TASKS_REQUEST" });
  try {
    const res = await axios.get("http://localhost:5000/api/tasks");
    dispatch({ type: "GET_TASKS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_TASKS_FAILURE", payload: err.message });
  }
};

export const addTask = (taskData) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/api/tasks", taskData);
  dispatch({ type: "ADD_TASK", payload: res.data });
};

export const deleteTask = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/tasks/${id}`);
  dispatch({ type: "DELETE_TASK", payload: id });
};
