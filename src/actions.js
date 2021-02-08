export const ADD_STOCK = "ADD_STOCK";
export const UPDATE_STOCK = "UPDATE_STOCK";
export const DELETE_STOCK = "DELETE_STOCK";
export const SHARES_INCREMENT = "SHARES_INCREMENT";
export const SHARES_DECREMENT = "SHARES_DECREMENT";

export function addStock(symbol, shares, currentPrice, targetWeight) {
	return {
		type: ADD_STOCK,
		payload: {
			symbol,
			shares,
			currentPrice,
			targetWeight,
		},
	};
}

export function updateStock(symbol, shares, targetWeight) {
	return {
		type: UPDATE_STOCK,
		payload: {
			symbol,
			shares,
			targetWeight,
		},
	};
}

export function deleteStock(symbol) {
	return {
		type: DELETE_STOCK,
		payload: {
			symbol,
		},
	};
}

export function sharesIncrement(id) {
	return {
		type: SHARES_INCREMENT,
		payload: {
			id,
		},
	};
}

export function sharesDecrement(id) {
	return {
		type: SHARES_DECREMENT,
		payload: {
			id,
		},
	};
}
