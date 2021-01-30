import React from "react";
import {Pie} from "react-chartjs-2";

const option = {
	tooltips: {
		callbacks: {
			label: function (tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var meta = dataset._meta[Object.keys(dataset._meta)[0]];
				var total = meta.total;
				var currentValue = dataset.data[tooltipItem.index];
				var percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
				return currentValue + " (" + percentage + "%)";
			},
			title: function (tooltipItem, data) {
				return data.labels[tooltipItem[0].index];
			},
		},
	},
};

class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: ["SPY", "AAPL", "TSLA", "MSFT", "GOOGLE"],
			datasets: [
				{
					label: "Portfolios",
					backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
					hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350", "#35014F"],
					data: [20, 20, 10, 25, 25],
				},
			],
		};
	}

	render() {
		return (
			<div>
				<Pie
					data={this.state}
					// options={{
					// 	title: {
					// 		display: true,
					// 		text: "Investment Percentages",
					// 		fontSize: 20,
					// 	},
					// 	legend: {
					// 		display: true,
					// 		position: "right",
					// 	},
					// }}
					options={option}
				/>
			</div>
		);
	}
}

export default Chart;
