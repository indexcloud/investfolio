import Chart from "../components/Chart";
import {connect} from "react-redux";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
	};
	// ChartContainer
}

export default connect(mapStateToProps)(Chart);
