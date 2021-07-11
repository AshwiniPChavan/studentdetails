import _ from 'lodash';
import {
    CREATE_STUDENT,
    FETCH_STUDENTS,
    DELETE_STUDENT
} from '../actions/types'
const studentReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_STUDENT:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STUDENTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case DELETE_STUDENT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

export default studentReducer;