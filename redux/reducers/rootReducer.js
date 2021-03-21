import { combineReducers } from 'redux';
import {setUserInfo} from './mainReducer';
import {camPermReducer, locPermReducer} from './permissionReducer';
import {toggleValidationError} from './validateReducer';
import {WorkersReducer, workGroupReducer} from './groupReducer';

const rootReducer = combineReducers({
  userInfo: setUserInfo,
  toggleValidation: toggleValidationError,
  permissions: camPermReducer,
  location: locPermReducer,
  workers: WorkersReducer,
  workGroup: workGroupReducer
});

export default rootReducer;
