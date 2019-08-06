import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    threads: [],
    selectedThread: ''
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_THREADS_SUCCESS:
            console.log('FETCH_THREADS_SUCCESS', state.threads);
            let newThreads = [];
            let alien = "";
            action.data.forEach(thread => {
                alien = thread.parts[0] === "me" ? thread.parts[1] : thread.parts[0];
                newThreads.push(alien);
            })
            return updateObject(...state, { threads: newThreads, selectedThread: newThreads[0] });
        case actionTypes.SELECT_THREAD:
            console.log('SELECT_THREAD', state.threads, action.idThread);
            return updateObject({ ...state, selectedThread: action.idThread })
        // return state;

        default:
            return state;
    }
}

export default reducer;



