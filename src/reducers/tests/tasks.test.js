import reducer, { initialState } from 'reducers/tasks';
import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_REQUEST,
} from '../../constants';

const tasks = [
  { "id": 1, "title": "packdown", "author": "Darrol McDearmen", "status": "COMPLETE" },
  { "id": 2, "title": "cleanup packdown", "author": "Darrol McDearmen", "status": "INCOMPLETE" },
  { "id": 3, "title": "check inventory", "author": "Janice Jordan", "status": "COMPLETE" },
  { "id": 4, "title": "safety check", "author": "Darrol McDearmen", "status": "INCOMPLETE" },
]

const testState = {
  data: tasks,
  error: null,
  loading: false,
}

describe('src/reducers/tasks', () => {
  describe('FETCH_TASKS_REQUEST', () => {
    const action = { type: FETCH_TASKS_REQUEST }

    it('returns state with a loading set to true and error set to null', () => {
      const state = reducer(initialState, action);
      expect(state.loading).toBe(true);
      expect(state.error).toBe(null)
    })
    
    it('resets data to an empty array', () => {
      expect(testState.data).toHaveLength(4);
      const state = reducer(initialState, action)
      expect(state.data).toHaveLength(0);
    })
  })
  
  describe('FETCH_TASKS_SUCCESS', () => {
    const action = ({ type : FETCH_TASKS_SUCCESS, tasks })
    const state = reducer(initialState, action);

    it('returns state with a new list of tasks ', () => {
      expect(state.data).toHaveLength(4);
      expect(state.data[3].title).toBe("safety check");
    })

    it('set loading to false and keeps error unchanged', () => {
      expect(state.loading).toBe(false);
      expect(state.error).toBe(null);
    })
  })
  
  describe('FETCH_TASKS_FAILURE', () => {
    const action = ({ 
      type : FETCH_TASKS_FAILURE, 
      err: { message: "bad stuff"}
    })
    const state = reducer(initialState, action);

    it('returns an error message to state', () => {
      expect(state.error.message).toBe("bad stuff")
    })
    
    it('sets loading to true', () => {
      expect(state.loading).toBe(false);
    })
  })
})