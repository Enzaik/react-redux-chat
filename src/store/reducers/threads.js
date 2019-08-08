import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    threads: [],
    selectedThread: ''
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_THREADS_SUCCESS:
            console.log('FETCH_THREADS_SUCCESS', action.data);
            let loggedUser = localStorage.getItem('user');
            let newThreads = [];
            let alien = "";
            let exists = false;
            action.data.forEach(thread => {
                exists = false;
                console.log('the', thread.parts, loggedUser);
                
                // alien = thread.parts[0] === "me" ? thread.parts[1] : thread.parts[0];
                // newThreads.push(alien);
                if ( thread.parts[1] === loggedUser) {
                    alien = thread.parts[0];
                    exists = true;
                    console.log('one');
               }
                if (thread.parts[0] === loggedUser) {
                    alien = thread.parts[1];
                    exists = true;
                    console.log('two');
                }
                if (exists) {
                    newThreads.push(alien);
                }
            })
            return updateObject(...state, { threads: newThreads, selectedThread: action.user });
        case actionTypes.SELECT_THREAD:
            console.log('SELECT_THREAD', state.threads, action.idThread);
            return updateObject({ ...state, selectedThread: action.idThread })
        // return state;

        default:
            return state;
    }
}

export default reducer;



