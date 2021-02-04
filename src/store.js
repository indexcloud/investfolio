import {createStore} from "redux";
import {counter} from "./reducers";

const defaultState = {
	stocks: [
		{
			symbol: "AAPL",
			shares: 1,
			unitCost: 2,
			currentWeight: 3,
			targetWeight: 4,
			currentDeviation: 5,
			targetDeviation: 6,
		},
	],
};

export const store = createStore(counter, defaultState);
