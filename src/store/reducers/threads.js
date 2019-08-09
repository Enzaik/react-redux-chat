import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    threads: [],
    selectedThread: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_THREADS_SUCCESS:
            let loggedUser = localStorage.getItem('user');
            let selectedUser = action.user;
            let newThreads = [];
            let alien = "";
            let exists = false;
            let cont = 0;
            action.data.forEach(thread => {
                exists = false;
                if (thread.parts[1] === loggedUser) { //thread: ['user', 'loggedUser']
                    alien = thread.parts[0];
                    if (cont === 0 && selectedUser == null) {
                        selectedUser = alien;
                        cont++;
                        console.log('cont one', selectedUser);
                    }
                    exists = true;

                }
                if (thread.parts[0] === loggedUser) {
                    alien = thread.parts[1];
                    if (cont === 0 && selectedUser == null) {
                        selectedUser = alien;
                        cont++;
                        console.log('cont two', selectedUser);
                    }
                    exists = true;
                }
                if (exists) {
                    newThreads.push(alien);
                }
            })

            console.log('FETCH_THREADS_SUCCESS', selectedUser);
            return updateObject(...state, { threads: newThreads, selectedThread: selectedUser });
        case actionTypes.SELECT_THREAD:
            console.log('SELECT_THREAD', state.threads, action.idThread);
            return updateObject({ ...state, selectedThread: action.idThread })
        default:
            return state;
    }
}

export default reducer;



