import Increment from "../components/Increment";
import {connect} from "react-redux";

import {sharesIncrement} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: id => {
			dispatch(sharesIncrement(id));
		},
	};
}

export default connect(null, mapDispatchToProps)(Increment);
