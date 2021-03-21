import {workers} from '../workers';
export const WORKERS = 'WORKERS';
export const ADD_WORKER = "ADD_WORKER";
export const EDIT_GROUP = "EDIT_WORKER";
export const ADD_ALL = "ADD_ALL";

  export const getWorkers = (value) => {
    return {
      type: WORKERS,
      payload: value,
    };
  };
 
  export const addWorker = (value) => {
    return {
      type: ADD_WORKER,
      payload: value,
    };
  };

  export const addAll = (value) => {
    return {
      type: ADD_ALL,
      payload: value,
    };
  };

   export const editGroup = (value) => {
    return {
      type: EDIT_GROUP,
      payload: value,
    };
  };
 
 
  
  export function WorkersReducer(state = workers, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export function workGroupReducer (state = [], action) {
    switch (action.type) {
        case ADD_WORKER: {
            let newState = state;
            newState.push(action.payload);
            return newState;
        }
        case EDIT_GROUP: {
          return action.payload
        }
        case ADD_ALL: {
          return action.payload
        }
        default:
          return state;
      }
  }