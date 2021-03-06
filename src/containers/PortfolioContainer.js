import Portfolio from "../components/Portfolio";
import {connect} from "react-redux";

function mapStateToProps(state) {
	return {
		stocks: state.stocks,
	};
}

export default connect(mapStateToProps)(Portfolio);
