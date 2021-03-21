export const FIRST_NAME = 'FIRST_NAME';
export const LAST_NAME = 'LAST_NAME';
export const JOB_TITLE = 'JOB_TITLE';
export const DEPARTMENT = 'DEPARTMENT';
export const LOCATION = 'LOCATION';
export const PICTURE = 'PICTURE';
export const ALL = 'ALL';


export const setFirstName = (value) => {
  return {
    type: FIRST_NAME,
    payload: value,
  };
};

export const setLastName = (value) => {
  return {
    type: LAST_NAME,
    payload: value,
  };
};
export const setJobTitle = (value) => {
  return {
    type: JOB_TITLE,
    payload: value,
  };
};
export const setDepartment = (value) => {
  return {
    type: DEPARTMENT,
    payload: value,
  };
};
export const setLocation = (value) => {
  return {
    type: LOCATION,
    payload: value,
  };
};
export const setPicture = (value) => {
  return {
    type: PICTURE,
    payload: value,
  };
};

export const setAll = (value) => {
  return {
    type: ALL,
    payload: value,
  };
};


export function setUserInfo(state = {firstName: '', lastName: '', jobTitle:'', department:'Marketing', location:'', picture:'asa'}, action) {
  switch (action.type) {
    case FIRST_NAME: {
      return {
        ...state,
        firstName: action.payload
      };
    }
    case LAST_NAME: {
      return {
        ...state,
        lastName: action.payload
      };
    }
    case JOB_TITLE: {
      return {
        ...state,
        jobTitle: action.payload
      };
    }
    case DEPARTMENT: {
      return {
        ...state,
        department: action.payload
      };
    }
    case LOCATION: {
      return {
        ...state,
        location: action.payload
      };
    }
    case PICTURE: {
      return {
        ...state,
        picture: action.payload
      };
    }
    case ALL: {
      return action.payload
    }
    default:
      return state;
  }
}
