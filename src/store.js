import {createStore} from "redux";
import {counter} from "./reducers";

const defaultState = {
	stocks: [
		{
			symbol: "AAPL",
			shares: 1,
			currentWeight: 3,
		},
		{
			symbol: "TSLA",
			shares: 2,
			currentWeight: 3,
		},
	],
};

export const store = createStore(counter, defaultState);
