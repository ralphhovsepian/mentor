import { ValidationError } from '../../redux/reducers/validateReducer';
import store from '../../redux/store';

export const validate = (items, navigation, path) => {
    if(items.some((v) => v == "")) {
       store.dispatch(ValidationError(true))
    } else {
        navigation.navigate(path)
        store.dispatch(ValidationError(false))
    }
   }