import Increment from "../components/increment";
import {connect} from "react-redux";

import {sharesIncrement} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: () => {
			dispatch(sharesIncrement());
		},
	};
}

export default connect(null, mapDispatchToProps)(Increment);
