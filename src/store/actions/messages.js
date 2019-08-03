import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchMessages = (user) => {
    return dispatch => {
           dispatch(fetchMessagesStart());
        axios.get('/messages.json')
            .then(
                res => {
                    //console.log('messages.js res.data',res.data, user);
                    dispatch(fetchMessagesSuccess(res.data, user))
                }
            )
            .catch(err => {
             //   console.log(err);
                dispatch(fetchMessagesFail(err))
            });
    };
};

export const fetchMessagesStart = () => {
    return {
        type: actionTypes.FETCH_MESSAGES_START
    };
};
export const fetchMessagesFail = () => {
    return {
        type: actionTypes.FETCH_MESSAGES_FAIL
    };
};
export const fetchMessagesSuccess = (data, user) => {
    return {
        type: actionTypes.FETCH_MESSAGES_SUCCESS,
        data: data,
        user: user
    };
};