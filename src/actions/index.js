import {
    CREATE_STUDENT,
    FETCH_STUDENTS,
    DELETE_STUDENT
} from './types';
import students from '../apis/api';

export const createStudentDetails = formValues => async (dispatch, getState) => {
    const response = await students.post('/students', formValues);
    dispatch({ type: CREATE_STUDENT, payload: response.data });
}

export const fetchstudentsDetails = () => async dispatch => {
    const response = await students.get('/students');
    dispatch({ type: FETCH_STUDENTS, payload: response.data });
}

export const deleteStudent = (id) => async dispatch => {
    await students.delete(`/students/${id}`);
    dispatch({ type: DELETE_STUDENT, payload: id });
}