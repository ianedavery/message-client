import {API_BASE_URL} from '../config';

export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const addMessageSuccess = message => ({
	type: ADD_MESSAGE_SUCCESS,
	message
});

export const ADD_MESSAGE_ERROR = 'ADD_MESSAGE_ERROR';
export const addMessageError = error => ({
    type: ADD_MESSAGE_ERROR,
    error
});

export const addMessage = message => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/messages`, {
		method: 'POST',
		header: {
			Authorization: `Bearer ${authToken}`,
			'content-type': 'application/json'
		},
        body: JSON.stringify(recipie)
    })
    .then(res => 
    	res.json())
    .then(message => 
    	dispatch(addMessageSuccess(message)))
    .catch(err => 
    	dispatch(addMessageError(err)));
}