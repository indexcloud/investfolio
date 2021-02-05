import {ADD_STOCK, INCREMENT, DECREMENT} from "./actions";

export function counter(state, action) {
	switch (action.type) {
		case ADD_STOCK:
			return [...state, action.payload];
		case INCREMENT:
			return {shares: state.stocks[0].shares + 1};
		case DECREMENT:
			return {shares: state.stocks[0].shares - 1};
		default:
			return state;
	}
}
