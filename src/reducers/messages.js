import {RETRIEVE_MESSAGES_REQUEST, RETRIEVE_MESSAGES_SUCCESS, RETRIEVE_MESSAGES_ERROR} from '../actions/messages';

const initialState = {
	error: null,
	loading: null,
	messages: []
}

export default function messagesReducer(state = initialState, action) {
	if(action.type === RETRIEVE_MESSAGES_SUCCESS) {
		return Object.assign({}, state, {
			messages: 
				[
					...state.messages,
						{
							text: action.text,
							author: action.author,
							date: action.date
						}
				]
			}
		);
	}
	return state;
} 