export const CAM_PERM = 'CAM_PERM';
export const CAM_TOGGLE = 'CAM_TOGGLE';
export const LOC_PERM = 'CAM_TOGGLE';

export const cameraPerm = (value) => {
    return {
      type: CAM_PERM,
      payload: value,
    };
  };

  export const locationPerm = (value) => {
    return {
      type: LOC_PERM,
      payload: value,
    };
  };

  export const camToggle = (value) => {
    return {
      type: CAM_TOGGLE,
      payload: value,
    };
  };

  
  export function camPermReducer(state = {permission: null, toggle: false}, action) {
    switch (action.type) {
      case CAM_PERM: {
        return {...state, permission: action.payload}
      }
      case CAM_TOGGLE: {
        return {...state, toggle: action.payload}
      }
      default:
        return state;
    }
  }
  
  export function locPermReducer(state = {permission: false}, action) {
    switch (action.type) {
      case LOC_PERM: {
        return {permission: action.payload}
      }
      default:
        return state;
    }
  }