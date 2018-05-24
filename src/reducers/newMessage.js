import {ADD_MESSAGE_SUCCESS, ADD_MESSAGE_ERROR} from '../actions/newMessage';

const initialState = {
	error: null,
	messages: []
}

export default function newMessageReducer(state = initialState, action) {
	if(action.type === ADD_MESSAGE_SUCCESS) {
		return Object.assign({}, state, {
			messages: 
				[
					...state.messages, 
						{
							text: action.text
						}
				]
		});
	}
	if(action.type === ADD_MESSAGE_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}