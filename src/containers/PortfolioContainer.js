import Portfolio from "../components/portfolio";
import {connect} from "react-redux";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
	};
}

export default connect(mapStateToProps)(Portfolio);
