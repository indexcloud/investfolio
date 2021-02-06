import {createStore} from "redux";
import {counter} from "./reducers";

const defaultState = {
	stocks: [
		{
			symbol: "AAPL",
			shares: 1,
			currentWeight: 50,
			targetWeight: 25,
		},
		{
			symbol: "TSLA",
			shares: 2,
			currentWeight: 50,
			targetWeight: 50,
		},
	],
};

export const store = createStore(counter, defaultState);
