import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    messages: [],

};

const reducer = (state = initialState, action) => {
    let newMessages = []; 

    switch (action.type) {
        case actionTypes.FETCH_MESSAGES_SUCCESS:
            // let index = state.threads.indexOf(action.user)
            console.log('action data', action.data);
          let alien = '';
          let msgs = Object.keys(action.data);
          console.log('FETCH_MESSAGES_SUCCESS', action.data);
        const messages =  msgs.map(msg =>{
         
           return action.data[msg];
        })
      newMessages = messages.filter(message => {
                console.log('alien', alien);
                alien = message.idReceiver === "me" ? message.idSender : message.idReceiver;
                return alien === action.user
            })
              console.log(newMessages);
            return updateObject({ ...state, messages: newMessages })

        //  TODO: improve this


        default:
            return state;

    }
}

export default reducer;