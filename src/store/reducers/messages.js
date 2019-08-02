import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';
const initialState = {
    messages: []
};

const reducer = (state = initialState, action) => {
    console.log('message action ddata', action);
    
    switch (action.type) {
        case actionTypes.FETCH_MESSAGES_SUCCESS:
            let newThread = action.data.filter(thread => {
                return thread.user === action.user
            })
            console.log('newthread', newThread);
            return updateObject(state, {messages: newThread[0].messages}); //  TODO: improve this
            
                
        default:
            return state;

    }
}

export default reducer;