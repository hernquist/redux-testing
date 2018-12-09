import { 
  FETCH_TASKS_SUCCESS, 
  FETCH_TASKS_FAILURE, 
  FETCH_TASKS_REQUEST 
} from 'constants';
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  fetchTasks,
} from 'actions';

  
describe('src/actions/fetchTasks', () => {

  describe('fetchTasksRequest', () => {
    it(`returns FETCH_TASKS_REQUEST action type with no payload`, () => {
    })
  })

  describe('fetchTasksSuccess', () => {
    it(`returns FETCH_TASKS_SUCCESS action type with a tasks payload`, () => {
    })
  })
  
  describe('fetchTasksFailure', () => {
    it(`returns FETCH_TASKS_FAILURE action type with an err payload`, () => {
    })
  })

  describe('async action tests', () => {
    
    beforeEach(function() {
    })
    
    afterEach(function() {
    })

    describe('fetchTasks', () => {
      it('creates FETCH_TASKS_REQUEST and SUCCESS with a tasks payload after a successful API call', () => {
      })

      it('creates FETCH_TASKS_REQUEST and FAILURE with an err payload after a failed API call', () => {
      })
    })
    
  })
})


