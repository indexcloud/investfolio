import {combineReducers} from "redux";
import {ADD_STOCK, UPDATE_STOCK, DELETE_STOCK, SHARES_INCREMENT, SHARES_DECREMENT} from "./actions";

export function stocks(state = [], action) {
	switch (action.type) {
		case ADD_STOCK:
			return [...state, action.payload];
		case UPDATE_STOCK:
			return state.map(stock => (stock.symbol !== action.payload.symbol ? stock : {...action.payload}));
		case DELETE_STOCK:
			return state.filter(stock => stock.symbol !== action.payload.symbol);
		default:
			return state;
	}
}

export function sharesCounter(state = [], action) {
	switch (action.type) {
		case SHARES_INCREMENT:
			return {shares: state.stocks[action.payload.index].shares + 1};
		case SHARES_DECREMENT:
			return {shares: state.stocks[action.payload.index].shares - 1};
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	stocks: stocks,
	sharesCounter: sharesCounter,
});
