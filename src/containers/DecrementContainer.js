import Decrement from "../components/decrement";
import {connect} from "react-redux";

import {sharesDecrement} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: index => {
			dispatch(sharesDecrement(index));
		},
	};
}

export default connect(null, mapDispatchToProps)(Decrement);
