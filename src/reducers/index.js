import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import studentReducer from './studentReducer';
export default combineReducers({
    form: formReducer,
    students: studentReducer
})