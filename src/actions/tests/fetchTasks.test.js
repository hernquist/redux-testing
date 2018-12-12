import moxios from "moxios"
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { 
  FETCH_TASKS_SUCCESS, 
  FETCH_TASKS_FAILURE, 
  FETCH_TASKS_REQUEST 
} from '../../constants';
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  fetchTasks,
} from 'actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const testTasks = [
  { "id": 1, "title": "packdown", "author": "Darrol McDearmen", "status": "COMPLETE" },
  { "id": 2, "title": "cleanup packdown", "author": "Darrol McDearmen", "status": "INCOMPLETE" },
  { "id": 3, "title": "check inventory", "author": "Janice Jordan", "status": "COMPLETE" },
  { "id": 4, "title": "safety check", "author": "Darrol McDearmen", "status": "INCOMPLETE" },
]

const testErr = { message: "fire" }

describe('src/actions/fetchTasks', () => {

  describe('fetchTasksRequest', () => {
    it(`returns FETCH_TASKS_REQUEST action type with no payload`, () => {
      expect(fetchTasksRequest()).toEqual({ type: FETCH_TASKS_REQUEST })
    })
  })

  describe('fetchTasksSuccess', () => {
    it(`returns FETCH_TASKS_SUCCESS action type with a tasks payload`, () => {
      expect(fetchTasksSuccess(testTasks)).toEqual({type: FETCH_TASKS_SUCCESS, tasks: testTasks })
    })
  })
  
  describe('fetchTasksFailure', () => {
    it(`returns FETCH_TASKS_FAILURE action type with an err payload`, () => {
      expect(fetchTasksFailure(testErr)).toEqual({type: FETCH_TASKS_FAILURE, err: {message: "fire"}})
    })
  })

  describe('async action tests', () => {
    
    beforeEach(function() {
      moxios.install();
    })
    
    afterEach(function() {
      moxios.uninstall();
    })

    describe('fetchTasks', () => {
      it('creates FETCH_TASKS_REQUEST and SUCCESS with a tasks payload after a successful API call', () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          const response = { data: testTasks };

          request.respondWith({
            status: 200,
            response
          });
        });

        const expectedActions = [
          { type: FETCH_TASKS_REQUEST },
          { type: FETCH_TASKS_SUCCESS, tasks: testTasks }
        ];

        const store = mockStore();

        return store.dispatch(fetchTasks()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });


      })

      it('creates FETCH_TASKS_REQUEST and FAILURE with an err payload after a failed API call', () => {
      })
    })
    
  })
})


