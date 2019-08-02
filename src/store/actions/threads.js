import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';



export const fetchThreads = () => {
    return dispatch => {
           dispatch(fetchThreadsStart());
        axios.get('/threads.json')
            .then(
                res => {
                    console.log('res.data',res.data);
                    dispatch(fetchThreadSuccess(res.data))
                }
            )
            .catch(err => {
             //   console.log(err);
                dispatch(fetchThreadFail(err))
            });
    };
};

export const fetchThreadsStart = () => {
    return {
        type: actionTypes.FETCH_THREADS_START
    };
};
export const fetchThreadFail = () => {
    return {
        type: actionTypes.FETCH_THREADS_FAIL
    };
};

export const fetchThreadSuccess = (data) => {
   // console.log('fetchThreadSuccess', data);
    
    return {
        type: actionTypes.FETCH_THREADS_SUCCESS,
        threads: data
    };
};

export const selectThread = (selectedThread) => {
    return {
        type: actionTypes.SELECT_THREAD,
        thread: selectedThread
    }
}