import {createStore} from "redux";
import {rootReducer} from "./reducers";
// import {stocks} from "./reducers";

const defaultState = {
	stocks: [
		// {
		// 	symbol: "AAPL",
		// 	shares: 1,
		// 	currentPrice: 25,
		// 	targetWeight: 25,
		// },
		// {
		// 	symbol: "TSLA",
		// 	shares: 2,
		// 	currentPrice: 50,
		// 	targetWeight: 50,
		// },
	],
};

export const store = createStore(rootReducer, defaultState);
