import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    messages: [],

};

const reducer = (state = initialState, action) => {
    let threads = [];
    let newMessages = [];

    switch (action.type) {
        case actionTypes.FETCH_MESSAGES_SUCCESS:
            // let index = state.threads.indexOf(action.user)

            let alien = '';
            newMessages = action.data.filter(message => {
                alien = message.idReceiver === "me" ? message.idSender : message.idReceiver;
                return alien === action.user
            })
            console.log('FETCH_MESSAGES_SUCCESS', newMessages);
            return updateObject({...state, messages: newMessages})
          
        //  TODO: improve this


        default:
            return state;

    }
}

export default reducer;