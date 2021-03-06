import axios from '../../axios-instance';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = (dispatch) => {

    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');
        dispatch(clear());
        dispatch(authLogout());
    }


};

export const clear = () => {
    return dispatch => {
        dispatch(clearMessages());
        dispatch(clearThreads());

    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}


export const clearMessages = () => {
    console.log('clearMessages');
    return {
        type: actionTypes.CLEAR_MESSAGES
    }
}

export const clearThreads = () => {
    console.log('clearThreads');
    return {
        type: actionTypes.CLEAR_THREADS
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}


//asynch
export const auth = (email, password, isSingUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = isSingUp
            ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDE2ZDsH6VzEdCB25zG0YeAh6eHkYW1R5k'
            : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDE2ZDsH6VzEdCB25zG0YeAh6eHkYW1R5k'
        axios.post(url, authData)
            .then(response => {
                // console.log('RESPONSE', response.data.email.split('@')[0]);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userID', response.data.localId);
                localStorage.setItem('user', response.data.email.split('@')[0]);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
                axios.get('/threads.json')
                    .then(
                        res => {
                            console.log(res.data);
                            dispatch(init(res.data, null));
                            //  dispatch(mock());

                        }
                    )

                // dispatch(initThreads(response.data, null))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));

            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }

        }

    }
}

export const init = (data, user) => {
    console.log('init');
    return dispatch => {
        dispatch(initThreads(data, user));
       
    }
}


export const initThreads = (data, user) => {
    console.log('initThreads',data);
    
    return {
        type: actionTypes.FETCH_THREADS_SUCCESS,
        data: data,
        user: user
    };
}

