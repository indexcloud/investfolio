import Decrement from "../components/decrement";
import {connect} from "react-redux";

import {sharesDecrement} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: () => {
			dispatch(sharesDecrement());
		},
	};
}

export default connect(null, mapDispatchToProps)(Decrement);
