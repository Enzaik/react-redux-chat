import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    messages: []
};

const reducer = (state = initialState, action) => {
    let newMessages = [];
    switch (action.type) {
        case "mock":
            console.log('mock');
            return state;

        case actionTypes.CLEAR_MESSAGES:
            return updateObject({ ...state, messages: [] });
        case actionTypes.FETCH_MESSAGES_SUCCESS:
            console.log('FETCH_MESSAGES_SUCCESS', action.user);
            let alien = '';
            let loggedUser = localStorage.getItem('user');
            let msgs = Object.keys(action.data);
            const messages = msgs.map(msg => {
                return action.data[msg];
            })
            newMessages = messages.filter(message => {
                alien = message.idReceiver === loggedUser ? message.idSender : message.idReceiver;
                return alien === action.user
            })
            return updateObject({ ...state, messages: newMessages })


        //  TODO: improve this
        default:
            return state;

    }
}

export default reducer;