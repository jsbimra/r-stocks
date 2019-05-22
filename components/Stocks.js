import Chart from '../components/Chart';

function renderSelectedStocks(stocks) {
    if (stocks.length) {
        return stocks.map(stock => {
            console.log('renderSelectedStock ', stock);
            let startDate = `${stock.refreshed_at ? new Date(stock.refreshed_at).getUTCHours() : ''}:${new Date(stock.refreshed_at).getUTCMinutes()}`;
            return (
                <div className="row" key={stock.id}>
                    <div className="col-1"><input type="checkbox" value="" className="custom-control custom-checkbox" /></div>
                    <div className="col-2">{stock.dataset_code}</div>
                    <div className="col-2 text-right">{startDate}</div>
                    <div className="col-2 text-right">3</div>
                    <div className="col-5 text-center">drawing of chart </div>
                </div>
            )
        })
    }
    else {
        return <div className="text-info">No stocks selected!</div>;
    }
}

export default function Stocks(props) {
    const { stocks, selectedStocks, handleAddMoreStock } = props;
    return (
        <div>
            <h2>Stocks</h2>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2"><strong>Stock</strong></div>
                <div className="col-2"><strong>Start</strong></div>
                <div className="col-2"><strong>Data Points</strong></div>
                <div className="col-5"><strong>Graph</strong></div>
            </div>
            {renderSelectedStocks(selectedStocks)}
            <div className="row mt-5">
                <div className="col-12">
                    <select name="" onChange={handleAddMoreStock} className="form-control">
                        <option>Add more stocks</option>
                        {
                            stocks.map(stock => <option key={stock.id} value={stock.dataset_code}>{stock.name}</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}