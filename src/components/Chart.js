import React from "react";
import {Pie} from "react-chartjs-2";

const state = {
	labels: ["SPY", "AAPL", "TSLA", "MSFT", "GOOGLE"],
	datasets: [
		{
			label: "Portfolios",
			backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
			hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350", "#35014F"],
			data: [1000, 59, 80, 81, 56],
		},
	],
};

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Pie
					data={state}
					options={{
						title: {
							display: true,
							text: "Investment Percentages",
							fontSize: 20,
						},
						legend: {
							display: true,
							position: "right",
						},
					}}
				/>
			</div>
		);
	}
}
