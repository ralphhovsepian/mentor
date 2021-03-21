export const ERROR_VALIDATE = 'ERROR_VALIDATE';

export const ValidationError = (value) => {
    return {
      type: ERROR_VALIDATE,
      payload: value,
    };
  };

  
  export function toggleValidationError(state = false, action) {
    switch (action.type) {
      case ERROR_VALIDATE: {
        return action.payload
      }
      default:
        return state;
    }
  }
  