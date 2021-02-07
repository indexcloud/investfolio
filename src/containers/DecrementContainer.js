import Decrement from "../components/Decrement";
import {connect} from "react-redux";

import {sharesDecrement} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: id => {
			dispatch(sharesDecrement(id));
		},
	};
}

export default connect(null, mapDispatchToProps)(Decrement);
