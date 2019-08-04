import * as actionTypes from './actionTypes';

import axios from '../../axios-instance';

export const fetchMessages = (user, firstTime) => {
    return dispatch => {
           dispatch(fetchMessagesStart());
        axios.get('/messages.json')
            .then(
                res => {
                    dispatch(fetchMessagesSuccess(res.data, user, firstTime))
                }
            )
            .catch(err => {
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
export const fetchMessagesSuccess = (data, user, firstTime) => {
    return {
        type: actionTypes.FETCH_MESSAGES_SUCCESS,
        data: data,
        user: user,
        firstTime: firstTime
    };
};