import React, { Component } from 'react';
import StockChart from './StockChart';
import AlertUser from './AlertUser';
/*
2. The tracker will only start tracking once the user clicks on a checkbox.
3. Once the checkbox is checked the start date is updated
4. The stock value is fetched from the google api (mentioned below) at every 15
seconds for each stock and the counter of the same is updated against each stock.
5. Data points are stored in a list and a graph is updated on every successful API
request.
6. Once the user unchecks the checkbox of a particular stock the tracking for the same
should be stopped.
7. If the user again starts the tracking only fresh data should be tracked and the old data
is unset.

*/
class Stocks extends React.Component {
    alertTimeout = null;
    constructor(props) {
        super(props);

        this.newRunningStocks = [];
        this.state = {
            runningStocks: [],
            hideTriggerMsg: true,
            stockInputTriggered: false,
            stockInputTriggerName: '',

        }

        this.handleStockTrigger = this.handleStockTrigger.bind(this);
    }

    handleStockTrigger(e) {
        const target = e.target;
        const { runningStocks } = this.state;
        const stockName = target.getAttribute('data-stockname') ? target.getAttribute('data-stockName') : '';
        clearTimeout(this.alertTimeout);

        this.setState({ hideTriggerMsg: false });

        if (!runningStocks.includes(target.name)) {
            this.newRunningStocks.push(target.name);
            this.setState({ stockInputTriggered: true });

        } else {
            const idx = this.newRunningStocks.findIndex(item => item === target.name);
            this.newRunningStocks.splice(idx, 1)
            this.setState({ stockInputTriggered: false });
        }
        this.setState({
            runningStocks: this.newRunningStocks,
            stockInputTriggerName: stockName
        })

        this.alertTimeout = setTimeout(() => {
            this.setState({ hideTriggerMsg: true });
        }, 1000);
    }
    renderSelectedStocks(stocks) {
        if (stocks.length) {
            const { stockInputTriggered, stockInputTriggerName, hideTriggerMsg } = this.state;
            const prepareChartOptions = arrData => {
                let seriesData = arrData
                    .map(data => {
                        const [date, open, high, low, close, volume] = data;
                        const [year, month, day] = date.indexOf('-') !== -1 ? date.split('-') : '0000-00-0';

                        return [Date.UTC(year, month, day), open];
                    });

                return {
                    // title: {
                    //     text: 'My stock chart'
                    // },
                    chart: {
                        height: '35%'
                    },
                    rangeSelector: {
                        enabled: false
                    },
                    navigator: {
                        enabled: false
                    },
                    series: [{
                        data: seriesData
                    }]
                }
            }

            const RenderDataPoint = (props) => {
                const { dataPoint } = props;
                return (<div>{dataPoint}</div>)
            };

            const getDataPoints = (arrData) => {
                let tempObj = {};
                if (arrData.length) {
                    arrData
                        .map(data => {
                            const [date, open, high, low, close, volume] = data;
                            tempObj = {
                                date,
                                open,
                                high,
                                close,
                                volume
                            };
                        });
                    return tempObj;
                }
            }

            return (
                <div>
                    <div className={hideTriggerMsg ? 'd-none' : 'fixed-top row mb-3 p-3'} style={{
                        top: '60px'
                    }}>
                        {stockInputTriggered ? <AlertUser msg={`Trigger fetch for stock - ${stockInputTriggerName} `} msgType="ok" /> : (stockInputTriggerName !== '' ? <AlertUser msg={`Stopped fetch for stock - ${stockInputTriggerName} `} msgType="notok" /> : null)}

                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2"><strong>Stock</strong></div>
                        <div className="col-1"><strong>Start</strong></div>
                        <div className="col-3 text-right"><strong>Data Points</strong></div>
                        <div className="col"><strong>Graph</strong></div>
                    </div>
                    <hr />
                    {
                        stocks.map((stock, idx) => {
                            // console.log('renderSelectedStock ', stock);
                            const startDate = `${stock.refreshed_at ? new Date(stock.refreshed_at).getUTCHours() : ''}:${new Date(stock.refreshed_at).getUTCMinutes()}`;
                            const arrData = stock.data ? stock.data : [];
                            let filteredStockByEndDate = arrData.filter((item, idx) => !arrData[idx].indexOf(stock.end_date));

                            return (
                                <div className="row mt-2" key={stock.id}>

                                    <div className="col-1 text-center">
                                        <div className="custom-switch custom-control">
                                            <input type="checkbox"
                                                data-stockname={stock.dataset_code}
                                                name={`stockTrigger[${idx}]`}
                                                id={`stockTrigger[${idx}]`}
                                                value=""
                                                className="custom-control-input"
                                                onChange={this.handleStockTrigger} />
                                            <label className="custom-control-label" htmlFor={`stockTrigger[${idx}]`}></label>
                                        </div>
                                    </div>
                                    <div className="col-2">{stock.dataset_code}</div>
                                    <div className="col-1 text-right">{startDate}</div>
                                    <div className="col-3 text-right">
                                        <RenderDataPoint dataPoint={getDataPoints(filteredStockByEndDate).volume} />
                                    </div>
                                    <div className="col text-center">
                                        <StockChart
                                            chartOptions={prepareChartOptions(arrData)}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        else {
            return <div className="text-info text-center">Loading stocks...</div>;
        }
    }
    render() {
        const { stocks, selectedStocks, handleAddMoreStock } = this.props;

        return (
            <div>
                <h2>Stocks</h2>
                <div className="row mt-4 mb-4">
                    <div className="col-12">
                        <select name="" onChange={handleAddMoreStock} className="form-control">
                            <option>Add more stocks</option>
                            {
                                stocks.map(stock => <option key={stock.id} value={stock.dataset_code}>{stock.name}</option>)
                            }
                        </select>
                        <div className="clearfix mt-1 mb-1">{this.props.children}</div>
                    </div>
                </div>

                {this.renderSelectedStocks(selectedStocks)}

            </div>
        );
    }
}

export default Stocks;