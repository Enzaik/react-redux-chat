import * as actionTypes from './actionTypes';

import axios from '../../axios-instance';

export const fetchMessages = (user) => {
    console.log('fetchMessages', user);

    return dispatch => {
        dispatch(fetchMessagesStart());
        axios.get('/messages.json')
            .then(
                res => {
                    dispatch(fetchMessagesSuccess(res.data, user))
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
export const fetchMessagesSuccess = (data, user, id) => {
    return {
        type: actionTypes.FETCH_MESSAGES_SUCCESS,
        data: data,
        user: user,
        id
    };
};

export const sendMessage = (message) => {
    return dispatch => {
        axios.post('/messages.json', message)
            .then(response => {
            })
            .catch(err => {
                console.log(err);
            })
    }
};
