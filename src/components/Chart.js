import React from "react";
import {Pie} from "react-chartjs-2";

const hex = "#" + Math.floor(Math.random() * 16777215).toString(16); // random color

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
					backgroundColor: ["#a8e0ff", "#8ee3f5", "#70cad1", "#3e517a", "#b08ea2"],
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
