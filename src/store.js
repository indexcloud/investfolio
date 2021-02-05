import {createStore} from "redux";
import {counter} from "./reducers";

const defaultState = {
	stocks: [
		{
			symbol: "AAPL",
			shares: 1,
			currentWeight: 20,
		},
		{
			symbol: "TSLA",
			shares: 2,
			currentWeight: 80,
		},
	],
};

export const store = createStore(counter, defaultState);
