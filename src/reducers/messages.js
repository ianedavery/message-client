import {RETRIEVE_MESSAGES_REQUEST, RETRIEVE_MESSAGES_SUCCESS, RETRIEVE_MESSAGES_ERROR} from '../actions/messages';

const initialState = {
	error: null,
	loading: true,
	messages: ''
}

export default function messagesReducer(state = initialState, action) {
	if(action.type === RETRIEVE_MESSAGES_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	}
	if(action.type === RETRIEVE_MESSAGES_SUCCESS) {
		return Object.assign({}, state, {
			messages: action.messages,
			loading: false
		});
	}
	if(action.type === RETRIEVE_MESSAGES_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	}
	return state;
} 