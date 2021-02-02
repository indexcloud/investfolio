import Output from "../components/output";
import {connect} from "react-redux";

function mapStateToProps(state) {
	return {
		// propName seen by React : value-in-state
		amount: state.count,
	};
}

export default connect(mapStateToProps)(Output);
