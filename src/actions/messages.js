import {API_BASE_URL} from '../config';

export const RETRIEVE_MESSAGES_REQUEST = 'RETRIEVE_MESSAGES_REQUEST';
export const retrieveMessagesLoading = () => ({
	type: RETRIEVE_MESSAGES_REQUEST
});

export const RETRIEVE_MESSAGES_SUCCESS = 'RETRIEVE_MESSAGES_SUCCESS';
export const retrieveMessagesSuccess = messages => ({
	type: RETRIEVE_MESSAGES_SUCCESS,
	messages
});

export const RETRIEVE_MESSAGES_ERROR = 'RETRIEVE_MESSAGES_ERROR';
export const retrieveMessagesError = error => ({
	type: RETRIEVE_MESSAGES_ERROR,
	error
});

export const retrieveMessages = () => (dispatch, getState) => {
	dispatch(retrieveMessagesLoading());
	const authToken = getState().auth.authToken
	return fetch(`${API_BASE_URL}/messages`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
	.then(res => 
		res.json())
	.then(messages => 
		dispatch(retrieveMessagesSuccess(messages)))
	.catch(err => 
		dispatch(retrieveMessagesError(err)));
}