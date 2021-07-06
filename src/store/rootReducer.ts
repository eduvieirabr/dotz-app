import { combineReducers } from 'redux';
import { reducer as authReducer } from '../login/redux/reducers/auth'; 

const rootReducer = combineReducers({
  auth : authReducer,
});

export default rootReducer;
