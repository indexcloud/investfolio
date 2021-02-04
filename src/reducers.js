import {INCREMENT, DECREMENT} from "./actions";

export function counter(state, action) {
	switch (action.type) {
		case INCREMENT:
			return {quantity: state.stocks[0].quantity + 1};
		case DECREMENT:
			return {quantity: state.stocks[0].quantity - 1};
		default:
			return state;
	}
}
