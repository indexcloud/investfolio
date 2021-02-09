import {combineReducers} from "redux";
import {ADD_STOCK, UPDATE_STOCK, DELETE_STOCK, SHARES_INCREMENT, SHARES_DECREMENT} from "./actions";

function stocks(state = [], action) {
	switch (action.type) {
		case ADD_STOCK:
			return [...state, action.payload];
		case UPDATE_STOCK:
			return state.stocks.map(stock => (stock.symbol !== action.payload.symbol ? stock : {...action.payload}));
		case DELETE_STOCK:
			const deleteArray = [...state];
			const newArray = deleteArray.filter(stock => stock.symbol !== action.payload.symbol);
			return newArray;
		case SHARES_INCREMENT:
			const incrementArray = [...state];
			incrementArray[action.payload.id].shares += 1;
			return incrementArray;
		case SHARES_DECREMENT:
			const decrementArray = [...state];
			decrementArray[action.payload.id].shares -= 1;
			return decrementArray;
		default:
			return state;
	}
}

// function sharesCounter(state = [], action) {
// 	switch (action.type) {
// 		case SHARES_INCREMENT:
// 			const incrementArray = [...state];
// 			incrementArray[action.payload.id].shares += 1;
// 			return incrementArray;
// 		case SHARES_DECREMENT:
// 			const decrementArray = [...state];
// 			decrementArray[action.payload.id].shares -= 1;
// 			return decrementArray;
// 		default:
// 			return state;
// 	}
// }

export const rootReducer = combineReducers({
	stocks: stocks,
	// sharesCounter: sharesCounter,
});
