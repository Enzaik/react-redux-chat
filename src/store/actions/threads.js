import axios from '../../axios-instance';

import * as actionTypes from './actionTypes';



export const fetchThreads = (user) => {
    console.log('fetchThread');
    return dispatch => {
        axios.get('/threads.json')
        .then(
            res => {
                dispatch(fetchThreadsSuccess(res.data, user));
                dispatch(fetchMessagesSuccess());
            }
        )
    }

}

export const fetchThreadsSuccess = (data,user) => {
    return {
        type: actionTypes.FETCH_THREADS_SUCCESS,
        data: data,
        user: user
    };
};

export const selectThread = (idThread) => {
    return {
        type: actionTypes.SELECT_THREAD,
        idThread: idThread
    }
}

export const fetchMessagesSuccess = () =>{
    return {
        type: actionTypes.FETCH_MESSAGES_SUCCESS
    }
}

