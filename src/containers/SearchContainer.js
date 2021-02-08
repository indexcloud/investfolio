import Search from "../components/Search";
import {connect} from "react-redux";

import {addStock} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		stockClick: (symbol, shares, currentPrice, targetWeight) => {
			dispatch(addStock(symbol, shares, currentPrice, targetWeight));
		},
	};
}

export default connect(null, mapDispatchToProps)(Search);
