import React from "react";
import {Pie} from "react-chartjs-2";

class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: this.props.stocks.map(stock => stock.symbol),
			datasets: [
				{
					label: "Portfolios",
					backgroundColor: this.props.stocks.map(
						() => "#" + Math.floor(Math.random() * 16777215).toString(16)
					),
					data: this.props.stocks.map(stock => stock.currentWeight),
				},
			],
		};
	}

	render() {
		const option = {
			tooltips: {
				callbacks: {
					label: function (tooltipItem, data) {
						const dataset = data.datasets[tooltipItem.datasetIndex];
						const meta = dataset._meta[Object.keys(dataset._meta)[0]];
						const total = meta.total;
						const currentValue = dataset.data[tooltipItem.index];
						const percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
						return currentValue + " (" + percentage + "%)";
					},
					title: function (tooltipItem, data) {
						return data.labels[tooltipItem[0].index];
					},
				},
			},
			title: {
				display: true,
				text: "Investment Percentages",
				fontSize: 20,
			},
			legend: {
				display: true,
				// position: "right",
			},
		};

		return (
			<div>
				<Pie data={this.state} options={option} />
			</div>
		);
	}
}

export default Chart;
