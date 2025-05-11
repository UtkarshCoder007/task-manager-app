// frontend/src/redux/taskReducer.js
const initialState = {
  tasks: [],
  loading: false,
  error: null
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS_REQUEST":
      return { ...state, loading: true };
    case "GET_TASKS_SUCCESS":
      return { ...state, loading: false, tasks: action.payload };
    case "GET_TASKS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload)
      };

    default:
      return state;
  }
};
