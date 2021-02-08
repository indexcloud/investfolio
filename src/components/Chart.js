import React from "react";
import {Pie} from "react-chartjs-2";

class Chart extends React.Component {
	constructor(props) {
		super(props);
		// this.updateStock = this.updateStock.bind(this);
		this.state = {
			stocks: this.props.stocks,
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.stocks !== this.props.stocks) {
			this.setState({
				stocks: this.props.stocks,
			});
		}
	}

	render() {
		const datas = {
			labels: this.state.stocks.map(stock => stock.symbol),
			datasets: [
				{
					label: "Portfolios",
					backgroundColor: this.state.stocks.map(
						() => "#" + Math.floor(Math.random() * 16777215).toString(16)
					),
					data: this.state.stocks.map(stock => stock.shares * stock.currentPrice),
				},
			],
		};

		const option = {
			tooltips: {
				callbacks: {
					label: function (tooltipItem, data) {
						const dataset = data.datasets[tooltipItem.datasetIndex];
						const meta = dataset._meta[Object.keys(dataset._meta)[0]];
						const total = meta.total;
						const currentValue = dataset.data[tooltipItem.index].toFixed(2);
						const percentage = ((currentValue / total) * 100).toFixed(2);
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
			},
		};

		return (
			<div>
				<Pie data={datas} options={option} />
			</div>
		);
	}
}

export default Chart;
