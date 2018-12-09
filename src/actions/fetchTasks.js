import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS
} from '../store/constants';
import {
  getTasks
} from "../services/tasks";

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST
})

export const fetchTasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS,
  tasks
})

export const fetchTasksFailure = err => ({
  type: FETCH_TASKS_FAILURE,
  err
})

export const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksRequest());

    return getTasks
      .then(resp => {
        dispatch(fetchTasksSuccess(resp.data))
      })
      .catch(err => {
        dispatch(fetchTasksFailure(err))
      })
  }
}