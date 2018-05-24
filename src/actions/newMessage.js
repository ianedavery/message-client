import {API_BASE_URL} from '../config';

export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const addMessageSuccess = text => ({
	type: ADD_MESSAGE_SUCCESS,
	text
});

export const ADD_MESSAGE_ERROR = 'ADD_MESSAGE_ERROR';
export const addMessageError = error => ({
    type: ADD_MESSAGE_ERROR,
    error
});

export const addMessage = text => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/messages`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'content-type': 'application/json'
		},
        body: JSON.stringify(text)
    })
    .then(res => 
    	res.json())
    .then(text => 
    	dispatch(addMessageSuccess(text)))
    .catch(err => 
    	dispatch(addMessageError(err)));
}