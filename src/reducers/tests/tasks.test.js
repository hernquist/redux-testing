import reducer, { initialState } from 'reducers/tasks';
import {
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_REQUEST,
  } from 'constants';

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

    it('returns state with a loading set to true and error set to null', () => {
    })
    
    it('resets data to an empty array', () => {
    })
  })
  
  describe('FETCH_TASKS_SUCCESS', () => {
    it('returns state with a new list of tasks ', () => {
    })

    it('set loading to false and keeps error unchanged', () => {
    })
  })
  
  describe('FETCH_TASKS_FAILURE', () => {
    it('returns an error message to state', () => {
    })
    
    it('sets loading to true', () => {
    })
  })
})