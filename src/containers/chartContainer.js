import Chart from "../components/chart";
import {connect} from "react-redux";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
	};
}

export default connect(mapStateToProps)(Chart);
