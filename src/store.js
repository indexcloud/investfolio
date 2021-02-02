import {createStore} from "redux";
import {counter} from "./reducers";

const defaultState = {
	// stocks: [
	// 	{
	// 		ticker: "",
	// 		quantity: 0,
	// 		unitCost: 0,
	// 		currentWeight: 0,
	// 		targetWeight: 0,
	// 		currentDeviation: 0,
	// 		targetDeviation: 0,
	// 	},
	// ],
	count: 0,
};

export const store = createStore(counter, defaultState);
