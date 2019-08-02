import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {

    threads: [],
    selectedThread: ''
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case (actionTypes.FETCH_THREADS_SUCCESS):
            return updateObject(state, { threads: action.threads })
        case actionTypes.SELECT_THREAD:

            console.log(action.thread);
            return updateObject(state, { selectedThread: action.thread });

        default:
            return state;
    }
}


export default reducer;



