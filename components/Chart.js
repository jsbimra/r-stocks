import React, { Component } from 'react';
// import { Chart } from 'react-charts';

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { chartData } = this.props;

        const chartDynamicData = [{
            label: "Series 1",
            data: chartData.length ? [chartData] : []
        }];

        const chartAxes = [
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" }
        ];

        return (
            <Chart data={chartDynamicData} axes={chartAxes} />
        )
    }
}

export default Chart;