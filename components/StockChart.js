import React, { Component } from 'react';
// import Highcharts from 'highcharts/highstock'
// import HighchartsReact from 'highcharts-react';

import ReactHightstock from 'react-highcharts/ReactHighstock';


class StockChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { chartOptions } = this.props;

        // console.log(chartAxes, chartData);
        
        return (
            // <HighchartsReact
            //     highcharts={Highcharts}
            //     constructorType={'stockChart'}
            //     options={options}
            // />

            <ReactHightstock config={chartOptions} />
        )
    }
}

export default StockChart;