import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    messages: [],
    threads: []
};

const reducer = (state = initialState, action) => {
    let threads = [
        
    ];
    let alien = '';
    switch (action.type) {
        case actionTypes.FETCH_MESSAGES_SUCCESS:
            let messages = action.data.filter(message => {
                return message.idReceiver === "me" || message.idSender === "me"
            });
            console.log('messagesss', messages);
            messages.forEach(message => {
                alien = message.idSender === 'me' ? message.idReceiver : message.idSender
                threads.push(alien)
            })
            let uniqueThreads = [...new Set(threads)]
            console.log('thr', uniqueThreads);
            return updateObject(...state, {messages: messages, threads: uniqueThreads});
             //  TODO: improve this


        default:
            return state;

    }
}

export default reducer;