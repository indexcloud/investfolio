import Delete from "../components/Delete";
import {connect} from "react-redux";

import {deleteStock} from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: symbol => {
			dispatch(deleteStock(symbol));
		},
	};
}

export default connect(null, mapDispatchToProps)(Delete);
