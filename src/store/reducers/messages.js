import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../utility';

const initialState = {
    messages: [],
    threads: [] //unused
};

const reducer = (state = initialState, action) => {
    let threads = [];
    let alien = '';
   
    switch (action.type) {
        case actionTypes.FETCH_MESSAGES_SUCCESS:
        console.log('FETCH_MESSAGES_SUCCESS');
        return state;

        //  TODO: improve this


        default:
            return state;

    }
}

export default reducer;