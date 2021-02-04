import Output from "../components/output";
import {connect} from "react-redux";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
	};
}

export default connect(mapStateToProps)(Output);
