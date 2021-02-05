export const ADD_STOCK = "ADD_STOCK";
export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export function addStock(symbol, currentPrice) {
	return {
		type: ADD_STOCK,
		payload: {
			symbol,
			currentPrice,
		},
	};
}

export function actionIncrement() {
	return {
		type: INCREMENT,
	};
}

export function actionDecrement() {
	return {
		type: DECREMENT,
	};
}
