import Search from "../components/search";
import {connect} from "react-redux";

import {addStock} from "../actions";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleClick: () => {
			dispatch(addStock());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
