export const ADD_STOCK = "ADD_STOCK";
export const DEL_STOCK = "DEL_STOCK";
export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export function addStock(symbol, shares, targetWeight) {
	return {
		type: ADD_STOCK,
		payload: {
			symbol,
			shares,
			targetWeight,
		},
	};
}

export function delStock(symbol) {
	return {};
}

export function sharesIncrement() {
	return {
		type: INCREMENT,
	};
}

export function sharesDecrement() {
	return {
		type: DECREMENT,
	};
}
