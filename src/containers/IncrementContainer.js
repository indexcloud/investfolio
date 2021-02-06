import Increment from "../components/Increment";
import {connect} from "react-redux";

import {sharesIncrement} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: index => {
			dispatch(sharesIncrement(index));
		},
	};
}

export default connect(null, mapDispatchToProps)(Increment);
