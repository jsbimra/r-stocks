import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import defaultDataSets from '../data/stocks.json';
import Layout from '../components/Layout';
import Stocks from '../components/Stocks';
import AlertUser from '../components/AlertUser';

// const quandlAPIKey = 'oUSLiCbXATD2xbPCxnJf';

class Home extends React.Component {
    alertTimeout = null;
    constructor(props) {
        super(props);
        this.state = {
            alertUserFlag: false,
            stockName: false,
            stockItems: [],
            stocks: [],
            selectedStocks: []
        }

        this.handleAddMoreStock = this.handleAddMoreStock.bind(this);
    }
    componentDidMount() {
        if (defaultDataSets && defaultDataSets.datasets) {
            const defaultStock = [defaultDataSets.datasets[0]];
            this.setState({
                stocks: defaultDataSets.datasets,
                selectedStocks: defaultStock,
                stockItems: [defaultStock[0].dataset_code]
            });
        }
    }
    makeEntryOfStock(name) {
        // console.log('makeEntryOfStock ', name);
        const { stocks, selectedStocks } = this.state;

        const filterStock = stocks.filter(stock => stock.dataset_code === name);
        const newStockLists = [...selectedStocks, ...filterStock];
        this.setState({ selectedStocks: newStockLists });
    }

    handleAddMoreStock(e) {
        const curValue = e.target.value;
        let { stockItems } = this.state;
        if (curValue) {
            clearTimeout(this.alertTimeout);
            stockItems.includes(curValue) ? this.setState({ alertUserFlag: true, stockName: curValue }) : this.makeEntryOfStock(curValue);
            stockItems.push(curValue);
            this.setState({ stockItems });
        }
    }

    alertUser(msg, msgType) {
        this.alertTimeout = setTimeout(() => {
            this.setState({ alertUserFlag: false });
        }, 800);
        return <AlertUser msg={msg} msgType={msgType} />
    }

    render() {
        const { stocks, selectedStocks, alertUserFlag, stockItems } = this.state;

        return (
            <Layout>
                <Stocks
                    stocks={stocks}
                    selectedStocks={selectedStocks}
                    handleAddMoreStock={this.handleAddMoreStock}>
                    {alertUserFlag ? this.alertUser(`Stock - ${this.state.stockName} already selected.`, 'notok') : null}

                </Stocks>
            </Layout>
        )
    }
}
export default Home;