import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils';


//send a 'put' request to the server to register new users
export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}api/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            //console.log(err);
            const {reason, message, location} = err;
            if (reason === 'Validation Error') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                        //[location]: alert(message)
                    })
                );
            }
        });
};