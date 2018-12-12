import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE
} from "../constants";

const initialState = {
  data: [],
  loading: false,
  error: {}
};

const reducer = (state = initialState, action) => {
  const { type, tasks, err } = action;

  switch (type) {
    case FETCH_TASKS_REQUEST:
      return { ...state,
        error: null,
        loading: true,
        data: []
      }
    case FETCH_TASKS_SUCCESS:
      return { ...state,
        loading: false,
        data: tasks
      }
    case FETCH_TASKS_FAILURE:
      return { ...state,
        loading: false,
        error: err
      }
    default:
      return state;
  }
};

export default reducer;