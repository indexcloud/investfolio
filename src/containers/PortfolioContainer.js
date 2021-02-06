import Portfolio from "../components/Portfolio";
import {connect} from "react-redux";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
		// Portfolio
	};
}

export default connect(mapStateToProps)(Portfolio);
