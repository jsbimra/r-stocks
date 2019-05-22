(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\jat\\learningspace\\doyo-nextjs\\components\\Header.js";


function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "NSE Stock"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav justify-content-center mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "About"))));
} // export default Header;

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jat\\learningspace\\doyo-nextjs\\components\\Layout.js";



function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), props.children);
} // export default Layout;

/***/ }),

/***/ "./components/StockChart.js":
/*!**********************************!*\
  !*** ./components/StockChart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-highcharts/ReactHighstock */ "./node_modules/react-highcharts/ReactHighstock.js");
/* harmony import */ var react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\jat\\learningspace\\doyo-nextjs\\components\\StockChart.js";
 // import Highcharts from 'highcharts/highstock'
// import HighchartsReact from 'highcharts-react';



var StockChart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StockChart, _React$Component);

  function StockChart(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StockChart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StockChart).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StockChart, [{
    key: "render",
    value: function render() {
      var chartOptions = this.props.chartOptions; // console.log(chartAxes, chartData);

      return (// <HighchartsReact
        //     highcharts={Highcharts}
        //     constructorType={'stockChart'}
        //     options={options}
        // />
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_6___default.a, {
          config: chartOptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      );
    }
  }]);

  return StockChart;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StockChart);

/***/ }),

/***/ "./components/Stocks.js":
/*!******************************!*\
  !*** ./components/Stocks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StockChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StockChart */ "./components/StockChart.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\jat\\learningspace\\doyo-nextjs\\components\\Stocks.js";



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

var Stocks =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Stocks, _React$Component);

  function Stocks(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Stocks);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Stocks).call(this, props));
    _this.newRunningStocks = [];
    _this.state = {
      runningStocks: [],
      stockInputTrigger: false
    };
    _this.handleStockTrigger = _this.handleStockTrigger.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Stocks, [{
    key: "handleStockTrigger",
    value: function handleStockTrigger(e) {
      var target = e.target;
      var runningStocks = this.state.runningStocks;

      if (!runningStocks.includes(target.name)) {
        this.newRunningStocks.push(target.name);
      } else {
        console.log('else ');
        var idx = this.newRunningStocks.findIndex(function (item) {
          return item === target.name;
        });
        this.newRunningStocks.splice(idx, 1);
      }

      this.setState({
        runningStocks: this.newRunningStocks
      });
      console.log(this.state.runningStocks);
    }
  }, {
    key: "renderSelectedStocks",
    value: function renderSelectedStocks(stocks) {
      var _this2 = this;

      if (stocks.length) {
        var prepareChartOptions = function prepareChartOptions(arrData) {
          var seriesData = arrData.map(function (data) {
            var _data = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data, 6),
                date = _data[0],
                open = _data[1],
                high = _data[2],
                low = _data[3],
                close = _data[4],
                volume = _data[5];

            var _ref = date.indexOf('-') !== -1 ? date.split('-') : '0000-00-0',
                _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
                year = _ref2[0],
                month = _ref2[1],
                day = _ref2[2];

            return [Date.UTC(year, month, day), open];
          });
          return {
            // title: {
            //     text: 'My stock chart'
            // },
            chart: {
              height: '55%'
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
          };
        };

        var RenderDataPoint = function RenderDataPoint(props) {
          var dataPoint = props.dataPoint;
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, dataPoint);
        };

        var getDataPoints = function getDataPoints(arrData) {
          var tempObj = {};

          if (arrData.length) {
            arrData.map(function (data) {
              var _data2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data, 6),
                  date = _data2[0],
                  open = _data2[1],
                  high = _data2[2],
                  low = _data2[3],
                  close = _data2[4],
                  volume = _data2[5];

              tempObj = {
                date: date,
                open: open,
                high: high,
                close: close,
                volume: volume
              }; // console.log('return tempObj', tempObj)
            });
            return tempObj;
            console.log('return tempObj', tempObj);
          }
        };

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "Stock")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Start")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col-3 text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Data Points")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "Graph"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }), stocks.map(function (stock, idx) {
          // console.log('renderSelectedStock ', stock);
          var startDate = "".concat(stock.refreshed_at ? new Date(stock.refreshed_at).getUTCHours() : '', ":").concat(new Date(stock.refreshed_at).getUTCMinutes());
          var arrData = stock.data ? stock.data : [];
          var filteredStockByEndDate = arrData.filter(function (item, idx) {
            return !arrData[idx].indexOf(stock.end_date);
          });
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "row mt-2",
            key: stock.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "checkbox",
            name: "stockTrigger[".concat(idx, "]"),
            value: "",
            className: "custom-control custom-checkbox",
            onChange: _this2.handleStockTrigger,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }, stock.dataset_code), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-1 text-right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }, startDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-3 text-right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RenderDataPoint, {
            dataPoint: getDataPoints(filteredStockByEndDate).volume,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              width: "100%"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StockChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
            chartOptions: prepareChartOptions(arrData),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }))));
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "text-info text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, "Loading stocks...");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stocks = _this$props.stocks,
          selectedStocks = _this$props.selectedStocks,
          handleAddMoreStock = _this$props.handleAddMoreStock;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Stocks"), this.renderSelectedStocks(selectedStocks), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "",
        onChange: handleAddMoreStock,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Add more stocks"), stocks.map(function (stock) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          key: stock.id,
          value: stock.dataset_code,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, stock.name);
      })))));
    }
  }]);

  return Stocks;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Stocks);

/***/ }),

/***/ "./data/stocks.json":
/*!**************************!*\
  !*** ./data/stocks.json ***!
  \**************************/
/*! exports provided: datasets, meta, default */
/***/ (function(module) {

module.exports = {"datasets":[{"id":37576758,"dataset_code":"BBL","database_code":"XNSE","name":"Bharat Bijlee Ltd. (EQBBL) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:42:53.042Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Bharat-Bijlee-Ltd-EQBBL-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:42:53.042Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",1193.7,1193.7,1157,1160.95,1800,null,null],["2018-12-28",1147.85,1200.1,1140,1169.65,6544,null,null],["2018-12-27",1145.05,1174.6,1127.25,1149.2,4495,null,null],["2018-12-26",1134.8,1154.95,1114.35,1144.9,4383,null,null],["2018-12-25",1129.15,1129.15,1129.15,1129.15,0,null,null],["2018-12-24",1175,1175,1124,1129.15,4523,null,null],["2018-12-21",1175.85,1185.3,1145,1152.75,6660,null,null],["2018-12-20",1192.95,1194,1181.2,1185.25,3740,null,null],["2018-12-19",1171.4,1234,1152.05,1192.95,16218,null,null],["2018-12-18",1136.45,1164,1136.4,1160.1,4987,null,null],["2018-12-17",1130.8,1148.95,1129.05,1140.3,2125,null,null],["2018-12-14",1124.55,1149,1124.55,1135.2,1594,null,null],["2018-12-13",1159.95,1159.95,1124,1125.95,1733,null,null],["2018-12-12",1086.45,1134.8,1086.4,1129.4,2239,null,null],["2018-12-11",1072.55,1101.8,1071.05,1095.75,2596,null,null],["2018-12-10",1085,1085.95,1075,1080.85,1691,null,null],["2018-12-07",1103.85,1105,1084.25,1091.45,1860,null,null],["2018-12-06",1102.25,1107,1084,1099.95,3329,null,null],["2018-12-05",1095.1,1110,1095,1104.8,2034,null,null],["2018-12-04",1111.05,1122,1099,1101.05,1991,null,null],["2018-12-03",1110.4,1124.5,1108.15,1114.6,1882,null,null],["2018-11-30",1122.05,1134.95,1103,1113.5,2485,null,null],["2018-11-29",1121.05,1145,1112,1123.55,8295,null,null],["2018-11-28",1110,1162.7,1103,1115.1,6672,null,null],["2018-11-27",1118.4,1125,1103.45,1108.6,4223,null,null],["2018-11-26",1137.35,1137.35,1113.05,1117.9,3014,null,null],["2018-11-23",1120.55,1120.55,1120.55,1120.55,0,null,null],["2018-11-22",1145,1164.7,1115,1120.55,5190,null,null],["2018-11-21",1073.2,1154.45,1073.2,1143.5,23392,null,null],["2018-11-20",1160,1160,1079.8,1085.8,18481,null,null],["2018-11-19",1175.45,1181.9,1147,1154.25,4896,null,null],["2018-11-16",1178,1192.95,1170.55,1175.2,4619,null,null],["2018-11-15",1193.95,1216.45,1176.85,1181.55,6571,null,null],["2018-11-14",1250,1265,1185.95,1193.85,24758,null,null],["2018-11-13",1294,1339,1262.4,1301.85,9087,null,null],["2018-11-12",1305,1319.8,1279.05,1294.05,7730,null,null],["2018-11-09",1255.9,1354,1255.45,1303.95,10603,null,null],["2018-11-08",1264,1264,1264,1264,0,null,null],["2018-11-07",1248,1274.8,1235,1264,2875,null,null],["2018-11-06",1245,1248.6,1220,1233.5,2255,null,null],["2018-11-05",1233.95,1249.9,1228.05,1238.5,6475,null,null],["2018-11-02",1200.05,1249,1196,1236.25,11350,null,null],["2018-11-01",1166,1219,1161,1196.65,12321,null,null],["2018-10-31",1153.5,1185,1142.1,1149.45,8861,null,null],["2018-10-30",1124.05,1160.55,1122.95,1152.6,4820,null,null],["2018-10-29",1114.5,1138,1105,1123.35,4212,null,null],["2018-10-26",1120.9,1128.05,1100.65,1104.65,2755,null,null],["2018-10-25",1114.4,1151.15,1101.05,1117.25,8941,null,null],["2018-10-24",1120.95,1149,1093.05,1134.2,6709,null,null],["2018-10-23",1080.7,1128,1073.3,1117.15,6011,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37576758,"database_id":15082},{"id":37576759,"dataset_code":"BEPL","database_code":"XNSE","name":"Bhansali Engineering Polymers Ltd. (EQBEPL) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:42:53.003Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Bhansali-Engineering-Polymers-Ltd-EQBEPL-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:42:53.003Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",90.1,90.85,87.8,88.4,343335,null,null],["2018-12-28",91.15,92.35,89,89.9,427176,null,null],["2018-12-27",93.4,93.4,90.3,90.85,397453,null,null],["2018-12-26",91,93.5,89.4,90.85,983287,null,null],["2018-12-25",91.5,91.5,91.5,91.5,0,null,null],["2018-12-24",88.9,96.7,87.05,91.5,1557446,null,null],["2018-12-21",91.9,92.1,85.05,88.05,1551680,null,null],["2018-12-20",94.5,96.5,89.35,91.9,3325941,null,null],["2018-12-19",74.5,88.35,74.35,88.35,2159837,null,null],["2018-12-18",70.9,74.6,70.1,73.65,406541,null,null],["2018-12-17",71.95,73.45,70.3,71.25,336858,null,null],["2018-12-14",71,73.9,69.7,71.5,420099,null,null],["2018-12-13",74,74.75,70,71.4,424213,null,null],["2018-12-12",70,74.3,70,73.5,650528,null,null],["2018-12-11",68,71.7,67.1,68.65,625086,null,null],["2018-12-10",60.7,73.5,60,70.9,1569465,null,null],["2018-12-07",67.9,68.9,62,64,722044,null,null],["2018-12-06",71,71.2,65.1,67.55,370754,null,null],["2018-12-05",72.25,73,70.85,71.3,185381,null,null],["2018-12-04",73,74.5,72,73.4,263025,null,null],["2018-12-03",75.4,75.4,71.6,72.9,183300,null,null],["2018-11-30",74.9,75.1,72.05,74.2,362374,null,null],["2018-11-29",75.6,76.95,69,71.95,768870,null,null],["2018-11-28",80.2,80.2,74.55,75.5,376451,null,null],["2018-11-27",81.4,81.95,79,79.4,220719,null,null],["2018-11-26",81.95,82.95,81.1,81.6,232910,null,null],["2018-11-23",81.4,81.4,81.4,81.4,0,null,null],["2018-11-22",81,83.55,80.25,81.4,325357,null,null],["2018-11-21",79.8,81.9,78.3,80.65,387304,null,null],["2018-11-20",78.3,79.9,78,78.5,230625,null,null],["2018-11-19",81.4,81.4,78.65,79.5,174435,null,null],["2018-11-16",82.9,82.9,78.95,79.95,269166,null,null],["2018-11-15",84.15,84.9,79.4,80.9,313901,null,null],["2018-11-14",84.5,85.7,82.3,83.15,270855,null,null],["2018-11-13",85.15,85.9,83.2,84.35,325040,null,null],["2018-11-12",84.4,87.8,83.5,85.15,437662,null,null],["2018-11-09",84.85,84.85,82.9,83.6,265225,null,null],["2018-11-08",83.9,83.9,83.9,83.9,0,null,null],["2018-11-07",83.9,84.25,83.15,83.9,86292,null,null],["2018-11-06",85.55,85.55,82.2,83.3,192113,null,null],["2018-11-05",85.85,86.7,83,84.05,385616,null,null],["2018-11-02",85.5,87,82.95,84.45,734320,null,null],["2018-11-01",79.9,87.3,74.45,83.4,4416134,null,null],["2018-10-31",92.4,92.8,82.7,82.7,1934616,null,null],["2018-10-30",94.7,94.9,91,91.85,320237,null,null],["2018-10-29",92,95.9,91,93.9,383446,null,null],["2018-10-26",92.7,93.15,90,90.75,494194,null,null],["2018-10-25",92,94,90.4,91.45,482782,null,null],["2018-10-24",93.25,97.2,92,93.65,910224,null,null],["2018-10-23",85,95.35,85,89.3,4520504,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37576759,"database_id":15082},{"id":37576761,"dataset_code":"BEL","database_code":"XNSE","name":"Bharat Electronics Ltd. (EQBEL) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:42:53.094Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Bharat-Electronics-Ltd-EQBEL-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:42:53.094Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",85.430407,88.693374,85.331529,86.963013,10512423,null,null],["2018-12-28",86.023674,87.259646,85.628163,86.913574,7463904,null,null],["2018-12-27",89.237202,89.484396,84.688824,85.183212,24898982,null,null],["2018-12-26",86.765257,88.495618,84.293312,87.704596,12611262,null,null],["2018-12-25",86.963013,86.963013,86.963013,86.963013,0,null,null],["2018-12-24",87.407963,88.347302,86.221429,86.963013,11044751,null,null],["2018-12-21",90.127102,93.736141,87.012452,87.407963,37783500,null,null],["2018-12-20",84.886579,89.929346,84.441629,89.286641,20886154,null,null],["2018-12-19",83.700046,86.320307,83.452851,85.677601,11879532,null,null],["2018-12-18",82.365196,83.650607,81.920246,83.403412,8960701,null,null],["2018-12-17",81.870807,83.551729,81.821368,82.810146,8010840,null,null],["2018-12-14",83.94724,83.94724,80.338201,81.475296,9903654,null,null],["2018-12-13",80.189884,84.194435,79.744934,83.452851,17240148,null,null],["2018-12-12",78.508962,80.980907,78.360645,79.299984,8107030,null,null],["2018-12-11",75.641506,78.904473,74.158339,77.866256,16542316,null,null],["2018-12-10",77.223551,79.398862,75.93814,76.778601,20009761,null,null],["2018-12-07",81.376418,81.623612,79.102229,79.201106,7272768,null,null],["2018-12-06",80.634834,83.05734,80.585395,80.882029,7204271,null,null],["2018-12-05",82.118001,82.958462,80.091007,81.771929,5501276,null,null],["2018-12-04",84.046118,85.430407,82.562951,82.958462,4879265,null,null],["2018-12-03",83.205657,85.479846,81.475296,84.243874,10241635,null,null],["2018-11-30",83.798923,84.441629,81.821368,82.315757,11736238,null,null],["2018-11-29",88.001229,88.198985,82.562951,83.848362,26727484,null,null],["2018-11-28",92.599046,92.945119,87.259646,87.704596,9821917,null,null],["2018-11-27",93.933897,94.428285,91.56083,92.104657,4587259,null,null],["2018-11-26",93.736141,95.070991,92.055219,94.823797,6834501,null,null],["2018-11-23",92.697924,92.697924,92.697924,92.697924,0,null,null],["2018-11-22",93.241752,93.686702,92.154096,92.697924,3432013,null,null],["2018-11-21",92.401291,94.082213,91.264196,93.192313,3636868,null,null],["2018-11-20",92.89568,94.922674,91.264196,91.857463,7064888,null,null],["2018-11-19",91.956341,93.439508,91.363074,92.846241,3601789,null,null],["2018-11-16",95.911452,95.960891,90.572052,91.808024,5992401,null,null],["2018-11-15",94.626041,96.356402,92.994558,95.614819,2946050,null,null],["2018-11-14",94.378847,96.850791,93.142874,94.724919,5505739,null,null],["2018-11-13",93.933897,94.23053,91.659707,93.538385,3765515,null,null],["2018-11-12",97.592375,98.185641,93.439508,93.983335,4393182,null,null],["2018-11-09",94.428285,98.136202,94.23053,97.542936,8892319,null,null],["2018-11-08",94.378847,94.378847,94.378847,94.378847,0,null,null],["2018-11-07",94.873235,94.873235,94.082213,94.378847,490385,null,null],["2018-11-06",94.67548,95.664258,93.637263,94.181091,4311780,null,null],["2018-11-05",93.983335,95.614819,92.00578,94.032774,4207017,null,null],["2018-11-02",97.196863,97.79013,93.488946,93.933897,6839887,null,null],["2018-11-01",92.302413,97.394619,92.154096,96.405841,19377238,null,null],["2018-10-31",88.001229,92.351852,88.001229,92.00578,11545323,null,null],["2018-10-30",85.430407,89.978785,85.430407,88.841691,17845565,null,null],["2018-10-29",88.001229,89.978785,85.084335,85.430407,13088176,null,null],["2018-10-26",82.266318,89.978785,80.634834,87.259646,24139398,null,null],["2018-10-25",82.859585,84.243874,81.079784,82.414634,9113303,null,null],["2018-10-24",87.012452,87.407963,83.05734,83.749485,6829668,null,null],["2018-10-23",83.403412,86.518063,83.156218,86.073113,7316585,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37576761,"database_id":15082},{"id":37576765,"dataset_code":"BHEL","database_code":"XNSE","name":"Bharat Heavy Electricals Ltd. (EQBHEL) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:42:53.128Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Bharat-Heavy-Electricals-Ltd-EQBHEL-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:42:53.128Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",71.378247,72.562948,71.279522,72.168048,7130426,null,null],["2018-12-28",69.156932,71.476972,69.156932,71.131434,9774725,null,null],["2018-12-27",71.082072,71.476972,68.860757,69.10757,22742988,null,null],["2018-12-26",69.798645,70.933984,68.367131,70.637809,13578782,null,null],["2018-12-25",70.341633,70.341633,70.341633,70.341633,0,null,null],["2018-12-24",69.156932,72.069323,68.613944,70.341633,22943907,null,null],["2018-12-21",70.884622,70.983347,68.515219,68.959482,15851379,null,null],["2018-12-20",68.91012,70.094821,68.367131,69.650558,6354028,null,null],["2018-12-19",69.30502,70.094821,68.515219,69.206295,10669275,null,null],["2018-12-18",66.78753,69.255657,66.441992,69.008845,17072720,null,null],["2018-12-17",65.849641,67.577331,65.652191,66.836892,8413741,null,null],["2018-12-14",65.652191,67.034343,64.961116,65.750916,6485337,null,null],["2018-12-13",66.047092,66.836892,65.454741,65.899004,8670196,null,null],["2018-12-12",64.171315,66.096454,63.776414,65.504104,9954488,null,null],["2018-12-11",61.258924,64.66494,60.913386,63.776414,21465276,null,null],["2018-12-10",64.171315,64.566215,61.801912,62.14745,13939033,null,null],["2018-12-07",64.961116,65.899004,63.529602,65.109203,10787228,null,null],["2018-12-06",65.504104,65.750916,64.220677,64.813028,13418588,null,null],["2018-12-05",68.860757,69.354382,65.257291,65.602829,21703542,null,null],["2018-12-04",69.255657,70.489721,68.762032,69.601195,7323826,null,null],["2018-12-03",67.922869,70.390996,66.540717,69.946733,16129731,null,null],["2018-11-30",67.873506,69.453108,65.306653,67.281155,123227256,null,null],["2018-11-29",66.343267,67.922869,64.86239,67.330518,10339738,null,null],["2018-11-28",66.244542,66.392629,65.504104,66.145817,8965627,null,null],["2018-11-27",65.553466,67.231793,65.454741,66.145817,9725050,null,null],["2018-11-26",65.356016,66.293904,64.66494,66.145817,7523888,null,null],["2018-11-23",65.306653,65.306653,65.306653,65.306653,0,null,null],["2018-11-22",65.997729,66.491355,65.010478,65.306653,8808101,null,null],["2018-11-21",66.935618,66.935618,65.059841,65.750916,8588079,null,null],["2018-11-20",67.034343,67.18243,66.096454,66.540717,11370903,null,null],["2018-11-19",65.948367,67.478606,65.948367,67.133068,6923682,null,null],["2018-11-16",66.145817,66.195179,64.813028,65.899004,8934462,null,null],["2018-11-15",65.257291,66.836892,64.27004,65.997729,12196075,null,null],["2018-11-14",67.922869,68.317769,64.86239,65.207928,17411472,null,null],["2018-11-13",67.824143,68.564582,66.935618,67.824143,5492697,null,null],["2018-11-12",69.10757,69.650558,67.626693,68.021594,8027643,null,null],["2018-11-09",68.860757,69.50247,68.317769,69.10757,5825050,null,null],["2018-11-08",68.811394,68.811394,68.811394,68.811394,0,null,null],["2018-11-07",69.058207,69.058207,68.564582,68.811394,1121760,null,null],["2018-11-06",69.206295,70.193546,68.120319,68.416494,9397104,null,null],["2018-11-05",70.539084,70.539084,68.416494,69.10757,12435322,null,null],["2018-11-02",70.045458,73.007211,69.848008,72.069323,25054634,null,null],["2018-11-01",68.317769,69.848008,68.317769,69.30502,18514431,null,null],["2018-10-31",68.367131,68.613944,66.738167,67.873506,18658155,null,null],["2018-10-30",67.37988,69.058207,67.133068,68.268406,17763932,null,null],["2018-10-29",67.478606,67.577331,65.701554,67.083705,16596499,null,null],["2018-10-26",70.094821,70.144183,66.392629,66.639442,26351665,null,null],["2018-10-25",73.9451,75.524701,68.367131,69.354382,46914007,null,null],["2018-10-24",74.290637,75.475339,72.957849,74.981713,8048611,null,null],["2018-10-23",74.043825,75.080438,71.921235,72.908486,13765726,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37576765,"database_id":15082},{"id":37576768,"dataset_code":"BIL","database_code":"XNSE","name":"Bhartiya International Ltd. (EQBIL) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:42:53.250Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Bhartiya-International-Ltd-EQBIL-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:42:53.250Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",235.25,255.3,234.25,240.6,5259,null,null],["2018-12-28",228,240.25,214.5,234.25,6931,null,null],["2018-12-27",211.15,223.85,211.1,218.2,3987,null,null],["2018-12-26",219,219,210.05,210.35,1404,null,null],["2018-12-25",218.75,218.75,218.75,218.75,0,null,null],["2018-12-24",215,221.8,212.05,218.75,974,null,null],["2018-12-21",213,225,210,211.85,3351,null,null],["2018-12-20",227.2,227.2,211,215.75,801,null,null],["2018-12-19",229.2,229.2,215,219.55,7370,null,null],["2018-12-18",234.65,234.65,221.5,229.2,349,null,null],["2018-12-17",238.85,238.85,225.9,233,226,null,null],["2018-12-14",218.9,233.5,218.85,228.65,1342,null,null],["2018-12-13",225.05,225.05,213.05,218.85,1873,null,null],["2018-12-12",231.6,234.65,224,224.05,696,null,null],["2018-12-11",223,227,210.65,218.5,3402,null,null],["2018-12-10",226,230,212,217.5,382,null,null],["2018-12-07",240,250,226,227.4,1222,null,null],["2018-12-06",235,237.55,234,235,948,null,null],["2018-12-05",245.7,245.75,233,235.95,217,null,null],["2018-12-04",235,242.45,232,234,4767,null,null],["2018-12-03",235,235,227.4,227.4,262,null,null],["2018-11-30",228,234,225,231.15,1063,null,null],["2018-11-29",229.05,236,216.9,223.05,2675,null,null],["2018-11-28",248.85,248.85,225,229.05,4643,null,null],["2018-11-27",240.65,244.2,239.5,241.3,3518,null,null],["2018-11-26",244,244.75,240,240.65,351,null,null],["2018-11-23",244.8,244.8,244.8,244.8,0,null,null],["2018-11-22",239.95,246.5,239.95,244.8,518,null,null],["2018-11-21",261,261,231,238.45,10451,null,null],["2018-11-20",260,264.75,236.3,252.05,2385,null,null],["2018-11-19",267,267.25,250.5,255.4,2254,null,null],["2018-11-16",279.7,283.85,250.05,256.25,6925,null,null],["2018-11-15",275,276,262,269.05,3995,null,null],["2018-11-14",270,275,266.15,274.25,8672,null,null],["2018-11-13",260,270,255.5,269.5,176,null,null],["2018-11-12",262.85,269.9,248.35,266.25,5379,null,null],["2018-11-09",265.05,269,257.1,259.05,551,null,null],["2018-11-08",265.7,265.7,265.7,265.7,0,null,null],["2018-11-07",265.75,265.8,265.7,265.7,23,null,null],["2018-11-06",262.35,266.75,255.25,260.45,1007,null,null],["2018-11-05",262.95,266.65,257,258.55,497,null,null],["2018-11-02",258.95,281.2,252.05,262.9,2388,null,null],["2018-11-01",269.85,269.85,259.9,262.8,485,null,null],["2018-10-31",268.95,268.95,258.05,265.9,1850,null,null],["2018-10-30",258.15,267,245.1,265.75,2883,null,null],["2018-10-29",250.8,259.8,233.55,254.35,1925,null,null],["2018-10-26",242.45,251.95,233,247.2,2608,null,null],["2018-10-25",242.5,242.5,242.5,242.5,0,null,null],["2018-10-24",238.05,243,230.1,242.5,1052,null,null],["2018-10-23",237,244,225,239.85,2083,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37576768,"database_id":15082},{"id":37577075,"dataset_code":"ALICON","database_code":"XNSE","name":"Alicon Castalloy Ltd (EQALICON) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:43:02.225Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Alicon-Castalloy-Ltd-EQALICON-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:43:02.225Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",586.45241,586.45241,559.953966,583.712909,2142,null,null],["2018-12-28",563.191558,586.552028,557.961602,573.601661,13979,null,null],["2018-12-27",586.801074,592.230266,552.881073,557.463511,50996,null,null],["2018-12-26",622.613821,623.311148,577.835435,580.525126,30582,null,null],["2018-12-25",626.54874,626.54874,626.54874,626.54874,0,null,null],["2018-12-24",635.46457,636.311325,623.062103,626.54874,1852,null,null],["2018-12-21",636.610179,636.610179,627.943395,628.142631,1644,null,null],["2018-12-20",622.66363,639.598726,622.613821,636.56037,2823,null,null],["2018-12-19",630.633087,636.56037,627.594731,630.234614,5834,null,null],["2018-12-18",627.64454,633.322778,612.652,630.334232,1839,null,null],["2018-12-17",627.943395,634.518197,627.544922,629.686714,589,null,null],["2018-12-14",630.483659,636.56037,628.590913,636.510561,850,null,null],["2018-12-13",646.223337,655.438021,624.655994,630.035377,1607,null,null],["2018-12-12",627.544922,655.48783,623.111912,641.292235,5294,null,null],["2018-12-11",609.364599,627.594731,593.724539,621.418402,3431,null,null],["2018-12-10",614.544746,618.529474,595.716904,600.797432,1514,null,null],["2018-12-07",623.311148,627.594731,611.655818,618.479665,823,null,null],["2018-12-06",618.678901,619.625274,603.73617,612.652,1448,null,null],["2018-12-05",628.092822,632.575642,618.629092,619.525656,896,null,null],["2018-12-04",640.545099,642.537463,622.713439,628.092822,1662,null,null],["2018-12-03",659.920841,659.920841,637.556552,645.526009,1181,null,null],["2018-11-30",663.905569,665.449652,650.50692,663.85576,2041,null,null],["2018-11-29",666.246597,667.292589,657.480195,659.97065,718,null,null],["2018-11-28",672.422926,672.422926,657.480195,658.127713,782,null,null],["2018-11-27",651.303866,666.445834,651.303866,659.621986,1070,null,null],["2018-11-26",662.461105,667.342398,648.514556,659.721604,2966,null,null],["2018-11-23",649.41112,649.41112,649.41112,649.41112,0,null,null],["2018-11-22",647.418755,677.25441,643.533645,649.41112,2575,null,null],["2018-11-21",642.537463,652.499284,633.023924,644.9283,3964,null,null],["2018-11-20",625.602367,641.04319,616.885774,639.150444,9663,null,null],["2018-11-19",607.720898,631.57946,584.161191,608.069562,3737,null,null],["2018-11-16",617.782338,624.606185,599.950678,611.655818,2919,null,null],["2018-11-15",617.682719,622.66363,607.671089,612.652,1161,null,null],["2018-11-14",636.510561,636.510561,617.832147,622.11573,1783,null,null],["2018-11-13",623.709621,627.594731,617.63291,626.249885,661,null,null],["2018-11-12",640.49529,640.545099,624.606185,626.648358,2018,null,null],["2018-11-09",627.495113,642.537463,613.648182,631.977933,5634,null,null],["2018-11-08",622.813057,622.813057,622.813057,622.813057,0,null,null],["2018-11-07",630.085187,630.085187,619.625274,622.813057,1015,null,null],["2018-11-06",614.445127,622.813057,601.096287,612.701809,1352,null,null],["2018-11-05",637.556552,642.537463,615.839782,621.866684,3540,null,null],["2018-11-02",617.63291,636.56037,613.847418,629.985568,3992,null,null],["2018-11-01",598.655641,617.63291,577.785626,616.387683,3967,null,null],["2018-10-31",602.142278,602.640369,593.724539,597.659459,1012,null,null],["2018-10-30",601.693996,631.380223,592.728357,598.655641,841,null,null],["2018-10-29",585.755083,602.690178,580.923599,597.211177,1139,null,null],["2018-10-26",582.766536,592.728357,577.835435,580.176463,480,null,null],["2018-10-25",572.854524,586.751265,572.804715,583.065391,558,null,null],["2018-10-24",592.728357,592.728357,572.804715,580.923599,744,null,null],["2018-10-23",582.866154,594.670912,578.781808,582.0194,698,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37577075,"database_id":15082},{"id":37577230,"dataset_code":"BASML","database_code":"XNSE","name":"Bannari Amman Spinning Mills Ltd. (EQBASML) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:43:03.986Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Bannari-Amman-Spinning-Mills-Ltd-EQBASML-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:43:03.986Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",212.05,212.05,205.5,209.8,124,null,null],["2018-12-28",207.55,210,207,207,325,null,null],["2018-12-27",214.8,214.8,207.05,207.05,237,null,null],["2018-12-26",223.4,223.4,204,210.4,1529,null,null],["2018-12-25",206.95,206.95,206.95,206.95,0,null,null],["2018-12-24",218,218,206.05,206.95,197,null,null],["2018-12-21",215,215,210,210.1,396,null,null],["2018-12-20",219.15,220,212.8,220,994,null,null],["2018-12-19",199.4,217.8,199.4,211.4,474,null,null],["2018-12-18",203.2,203.25,200,202,237,null,null],["2018-12-17",205.5,212.95,201.1,209.6,288,null,null],["2018-12-14",210.95,212,200.05,211.85,527,null,null],["2018-12-13",210.9,210.9,207.25,209.4,141,null,null],["2018-12-12",203.5,210,203.5,209.7,511,null,null],["2018-12-11",193.55,196.25,190,195.15,437,null,null],["2018-12-10",207,207,191.55,197.05,826,null,null],["2018-12-07",203.95,207,203.95,206.95,153,null,null],["2018-12-06",204.95,204.95,204.95,204.95,5,null,null],["2018-12-05",203.05,208.9,199.5,200.9,643,null,null],["2018-12-04",205,209.95,205,206.9,230,null,null],["2018-12-03",213.4,213.4,207,210.6,117,null,null],["2018-11-30",211.85,211.85,201.5,204,185,null,null],["2018-11-29",205,208.5,202,203.2,288,null,null],["2018-11-28",201,210.95,201,204.65,355,null,null],["2018-11-27",195.5,203,195.5,202.15,422,null,null],["2018-11-26",200,204.9,200,204.85,20,null,null],["2018-11-23",199.55,199.55,199.55,199.55,0,null,null],["2018-11-22",205,205,196.05,199.55,51,null,null],["2018-11-21",205,205,200.05,200.8,43,null,null],["2018-11-20",209.25,209.25,209.25,209.25,0,null,null],["2018-11-19",204.4,210,200.05,209.25,622,null,null],["2018-11-16",210,210,201.5,204.4,1694,null,null],["2018-11-15",197.95,204,197.95,202,710,null,null],["2018-11-14",200,200,195,200,83,null,null],["2018-11-13",203,203,191,195.25,396,null,null],["2018-11-12",199.85,203.7,192.1,193.75,598,null,null],["2018-11-09",210,210,200.05,204.7,215,null,null],["2018-11-08",203.5,203.5,203.5,203.5,0,null,null],["2018-11-07",203.5,203.5,203.5,203.5,50,null,null],["2018-11-06",199.5,199.5,197,197.35,650,null,null],["2018-11-05",204,204,194,198.9,522,null,null],["2018-11-02",207.15,215,202.1,204.1,1564,null,null],["2018-11-01",195.15,200,195.15,200,996,null,null],["2018-10-31",207.2,207.2,196,199.9,722,null,null],["2018-10-30",190.1,205.5,190.1,197,1660,null,null],["2018-10-29",199,199,192,192.05,732,null,null],["2018-10-26",201,201,190,190.55,1605,null,null],["2018-10-25",206.35,206.35,196.95,199,299,null,null],["2018-10-24",195.65,201,190,192.85,64,null,null],["2018-10-23",198,207,190,191.9,536,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37577230,"database_id":15082},{"id":37580130,"dataset_code":"ACE","database_code":"XNSE","name":"Action Construction Equipment Ltd. (EQACE) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:43:09.245Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Action-Construction-Equipment-Ltd-EQACE-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:43:09.245Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",92,93,90.8,91.2,62501,null,null],["2018-12-28",91.9,93.15,90.6,91.35,77848,null,null],["2018-12-27",91.25,94.2,90.25,91.1,123885,null,null],["2018-12-26",91,91.8,89,90.2,97047,null,null],["2018-12-25",89.9,89.9,89.9,89.9,0,null,null],["2018-12-24",92.5,94.35,87.35,89.9,173971,null,null],["2018-12-21",96.45,96.5,93,93.45,109476,null,null],["2018-12-20",97.35,97.8,95.35,95.75,94290,null,null],["2018-12-19",95.8,100.3,94,98.05,420686,null,null],["2018-12-18",92.95,96.2,91.75,94.75,128377,null,null],["2018-12-17",94.9,95.5,93,93.45,52299,null,null],["2018-12-14",94.5,96,93,94,75802,null,null],["2018-12-13",96.95,100.3,93.25,94.3,220601,null,null],["2018-12-12",89.95,99.7,89.65,96.4,337638,null,null],["2018-12-11",87,91.4,84.75,88.85,78275,null,null],["2018-12-10",89.75,89.75,85.4,87.35,41103,null,null],["2018-12-07",90,91.6,88.1,89,43765,null,null],["2018-12-06",91.95,91.95,88.5,89.85,42371,null,null],["2018-12-05",92.9,92.9,89.2,90.4,76076,null,null],["2018-12-04",94.2,94.2,92.1,92.4,29949,null,null],["2018-12-03",92,95.3,91.75,94,72596,null,null],["2018-11-30",90.45,94.25,89.7,92.1,185180,null,null],["2018-11-29",90.8,91.6,88.6,89.25,94115,null,null],["2018-11-28",92,93.2,90,90.45,72954,null,null],["2018-11-27",93.2,93.6,91.2,92.3,48696,null,null],["2018-11-26",97,97,92.15,92.8,73623,null,null],["2018-11-23",96.25,96.25,96.25,96.25,0,null,null],["2018-11-22",94.2,97.9,92.55,96.25,143078,null,null],["2018-11-21",89.9,94.45,87.9,93.6,160974,null,null],["2018-11-20",89.7,89.85,86,87.85,119225,null,null],["2018-11-19",91.9,93,88.65,89.7,161888,null,null],["2018-11-16",96.95,97.65,90,91.8,241276,null,null],["2018-11-15",98.55,99.6,96.05,96.5,90648,null,null],["2018-11-14",101,102,98.7,99.7,72115,null,null],["2018-11-13",103,103,99.75,100.25,104781,null,null],["2018-11-12",103.3,105.65,100,103.05,183707,null,null],["2018-11-09",103.4,105.9,100.4,102.1,102044,null,null],["2018-11-08",102.35,102.35,102.35,102.35,0,null,null],["2018-11-07",100,103.95,98.9,102.35,77756,null,null],["2018-11-06",101.65,101.65,98.05,98.45,91993,null,null],["2018-11-05",103.35,104.05,99.5,100.35,102950,null,null],["2018-11-02",103.7,106.35,102.45,103.35,279187,null,null],["2018-11-01",97,105.8,95.15,101.95,501051,null,null],["2018-10-31",96.25,97.9,92,96.2,145798,null,null],["2018-10-30",97.95,101.65,92,95.2,352066,null,null],["2018-10-29",99.35,99.35,99.35,99.35,79757,null,null],["2018-10-26",91.85,96,90.05,94.65,89636,null,null],["2018-10-25",96,96,92,92.9,59732,null,null],["2018-10-24",98.05,100.5,93.2,94.6,98939,null,null],["2018-10-23",97,99.9,96.15,96.75,71094,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37580130,"database_id":15082},{"id":37580665,"dataset_code":"BAJAJ_AUTO","database_code":"XNSE","name":"Bajaj Auto Ltd (EQBAJAJ-AUTO) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:43:14.198Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Bajaj-Auto-Ltd-EQBAJAJ-AUTO-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:43:14.198Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",2738,2763,2710,2720.15,406069,null,null],["2018-12-28",2753.9,2759.95,2711.75,2717.5,358369,null,null],["2018-12-27",2763.9,2764,2696.6,2737,558049,null,null],["2018-12-26",2713.7,2749.8,2670,2734.6,410582,null,null],["2018-12-25",2724.65,2724.65,2724.65,2724.65,0,null,null],["2018-12-24",2825.5,2832.7,2715.85,2724.65,348337,null,null],["2018-12-21",2897,2905,2801,2808.45,386367,null,null],["2018-12-20",2855,2900,2832,2887.2,288162,null,null],["2018-12-19",2853.9,2882,2845.05,2863,393269,null,null],["2018-12-18",2840,2873.8,2822.05,2840.9,443162,null,null],["2018-12-17",2833,2853,2826.1,2840.95,225455,null,null],["2018-12-14",2836,2837.35,2785.2,2823.15,465457,null,null],["2018-12-13",2860,2885.65,2821.7,2836.1,466453,null,null],["2018-12-12",2742,2858,2738.65,2848.4,552031,null,null],["2018-12-11",2710,2760,2685,2739.6,370479,null,null],["2018-12-10",2713,2769.95,2702.8,2725.1,274974,null,null],["2018-12-07",2722,2793,2716.3,2786.2,417465,null,null],["2018-12-06",2740,2799.4,2705.85,2718.1,468440,null,null],["2018-12-05",2759,2774.5,2731.1,2764.1,178352,null,null],["2018-12-04",2740.1,2790,2726.25,2763.85,395469,null,null],["2018-12-03",2760,2764.95,2714,2736,386060,null,null],["2018-11-30",2721,2769.7,2702,2745.7,690175,null,null],["2018-11-29",2633,2737,2602.05,2724,763933,null,null],["2018-11-28",2612,2625,2584,2603.9,285713,null,null],["2018-11-27",2642,2643.95,2570.9,2599.65,437591,null,null],["2018-11-26",2606,2662.9,2576,2649.5,376778,null,null],["2018-11-23",2590.35,2590.35,2590.35,2590.35,0,null,null],["2018-11-22",2600,2624,2580.8,2590.35,373650,null,null],["2018-11-21",2673,2673,2591.1,2604.65,381149,null,null],["2018-11-20",2679.65,2679.65,2655,2666.5,146989,null,null],["2018-11-19",2704,2708,2670,2679.65,209883,null,null],["2018-11-16",2680,2705.9,2675.15,2695.35,317881,null,null],["2018-11-15",2681,2699,2661.1,2668.85,240745,null,null],["2018-11-14",2675,2714.9,2652,2676.5,302299,null,null],["2018-11-13",2649,2673.4,2613,2665.5,305897,null,null],["2018-11-12",2700,2726,2640.95,2652.3,272808,null,null],["2018-11-09",2680,2745,2673.5,2693.05,344335,null,null],["2018-11-08",2692.55,2692.55,2692.55,2692.55,0,null,null],["2018-11-07",2694,2695,2681.15,2692.55,38824,null,null],["2018-11-06",2673.2,2698,2658.95,2674.6,278587,null,null],["2018-11-05",2670,2687.45,2622.55,2672.55,222067,null,null],["2018-11-02",2620,2700,2620,2657.75,769311,null,null],["2018-11-01",2613.1,2619,2568.05,2598.85,356883,null,null],["2018-10-31",2550,2614,2486.15,2593.7,552796,null,null],["2018-10-30",2554,2583,2532.9,2556.25,270336,null,null],["2018-10-29",2533,2558.35,2474.25,2549.1,388894,null,null],["2018-10-26",2483,2533.6,2446.7,2513.75,498124,null,null],["2018-10-25",2455,2498.7,2420,2477.55,913688,null,null],["2018-10-24",2615,2619.9,2456.6,2475.15,1669762,null,null],["2018-10-23",2540,2598.7,2526,2586.5,342563,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37580665,"database_id":15082},{"id":37580689,"dataset_code":"ADSL","database_code":"XNSE","name":"Allied Digital Services Ltd. (EQADSL) Adjusted Stock Prices","refreshed_at":"2019-05-21T13:43:14.480Z","newest_available_date":"2018-12-31","oldest_available_date":"2010-01-01","column_names":["Date","Open","High","Low","Close","Volume","Adjustment Factor","Adjustment Type"],"frequency":"daily","type":"Time Series","premium":true,"urlize_name":"Allied-Digital-Services-Ltd-EQADSL-Adjusted-Stock-Prices","updated_at":"2019-05-21T13:43:14.480Z","favorite":false,"display_url":null,"latest_values":null,"sample":true,"highlight_name":null,"highlight_description":null,"meta_description":null,"limit":50,"transform":null,"column_index":null,"start_date":"2010-01-01","end_date":"2018-12-31","data":[["2018-12-31",14.05,14.75,14,14.05,23339,null,null],["2018-12-28",14.1,14.5,14,14.2,5753,null,null],["2018-12-27",14.1,14.9,14.1,14.2,12488,null,null],["2018-12-26",14.65,14.65,14,14.1,6162,null,null],["2018-12-25",14.4,14.4,14.4,14.4,0,null,null],["2018-12-24",15.05,15.05,14.3,14.4,4924,null,null],["2018-12-21",14.45,14.8,14.15,14.2,6929,null,null],["2018-12-20",15,15,14.2,14.55,11045,null,null],["2018-12-19",15.05,15.45,14.55,14.7,21403,null,null],["2018-12-18",14.25,15.05,14.2,14.7,14131,null,null],["2018-12-17",14.7,14.9,14.4,14.45,10854,null,null],["2018-12-14",14.85,14.9,14,14.5,15549,null,null],["2018-12-13",14.45,15.45,14.15,14.65,47113,null,null],["2018-12-12",13.9,14.5,13,14.15,79527,null,null],["2018-12-11",13.8,13.8,12.5,13.05,22250,null,null],["2018-12-10",13.95,13.95,12.75,13,22634,null,null],["2018-12-07",14.6,14.6,13.4,13.8,99328,null,null],["2018-12-06",14,15.7,13.55,14.6,601919,null,null],["2018-12-05",13,13.4,12.9,13.1,8174,null,null],["2018-12-04",13.1,13.75,13,13.3,3346,null,null],["2018-12-03",13.2,13.9,13.15,13.2,6406,null,null],["2018-11-30",13.75,13.75,13.05,13.1,10940,null,null],["2018-11-29",13.2,13.65,13.05,13.2,6876,null,null],["2018-11-28",13.4,13.8,13,13.1,19804,null,null],["2018-11-27",13.5,14.2,13.5,13.55,7047,null,null],["2018-11-26",13.8,13.95,13.55,13.55,6304,null,null],["2018-11-23",13.85,13.85,13.85,13.85,0,null,null],["2018-11-22",13.8,14,13.65,13.85,6474,null,null],["2018-11-21",13.95,13.95,13.7,13.9,4010,null,null],["2018-11-20",14.8,14.8,13.6,13.7,12394,null,null],["2018-11-19",13.9,16.1,13.5,13.9,182563,null,null],["2018-11-16",13.75,13.9,13.5,13.55,9198,null,null],["2018-11-15",13.7,14.2,13.65,13.75,13694,null,null],["2018-11-14",13.85,14.1,13.75,13.75,5946,null,null],["2018-11-13",14.4,14.4,13.65,13.85,4453,null,null],["2018-11-12",14.2,14.7,13.9,14.2,6033,null,null],["2018-11-09",14.25,15,13.65,14.7,22433,null,null],["2018-11-08",14.05,14.05,14.05,14.05,0,null,null],["2018-11-07",14.25,14.25,14,14.05,3512,null,null],["2018-11-06",13.9,14.3,13.5,14,9822,null,null],["2018-11-05",14.45,14.5,13.65,14.2,10827,null,null],["2018-11-02",13.25,14,13.15,13.85,12101,null,null],["2018-11-01",13.5,13.8,13.2,13.35,5360,null,null],["2018-10-31",13.45,13.45,13.05,13.15,6747,null,null],["2018-10-30",13.2,14.35,12.65,13.05,13542,null,null],["2018-10-29",12.4,13,12.4,12.8,28376,null,null],["2018-10-26",12.85,12.85,12.4,12.55,2275,null,null],["2018-10-25",12.8,12.85,12.2,12.65,11667,null,null],["2018-10-24",12.85,13.45,12.4,12.5,7682,null,null],["2018-10-23",12.2,12.9,12.2,12.65,23152,null,null]],"meta":{},"collapse":null,"order":null,"dataset_id":37580689,"database_id":15082}],"meta":{"current_page":1,"next_page":null,"prev_page":null,"total_pages":1,"total_count":10,"per_page":100,"current_first_item":1,"current_last_item":10}};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/core-js/library/fn/reflect/construct.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/core-js/library/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_bind.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/library/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/highcharts/highstock.js":
/*!**********************************************!*\
  !*** ./node_modules/highcharts/highstock.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highstock JS v6.2.0 (2018-10-17)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(U,J){ true&&module.exports?module.exports=U.document?J(U):J: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return J(U)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})("undefined"!==typeof window?window:this,function(U){var J=function(){var a="undefined"===typeof U?window:U,E=a.document,F=a.navigator&&a.navigator.userAgent||"",G=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,q=/(edge|msie|trident)/i.test(F)&&!a.opera,k=-1!==F.indexOf("Firefox"),
h=-1!==F.indexOf("Chrome"),t=k&&4>parseInt(F.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",version:"6.2.0",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:t,hasTouch:E&&void 0!==E.documentElement.ontouchstart,isMS:q,isWebKit:-1!==F.indexOf("AppleWebKit"),isFirefox:k,isChrome:h,isSafari:!h&&-1!==F.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(F),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,win:a,marginNames:["plotTop",
"marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var E=a.charts,F=a.doc,G=a.win;a.error=function(q,k){q=a.isNumber(q)?"Highcharts error #"+q+": www.highcharts.com/errors/"+q:q;if(k)throw Error(q);G.console&&console.log(q)};a.Fx=function(a,k,h){this.options=k;this.elem=a;this.prop=h};a.Fx.prototype={dSetter:function(){var a=this.paths[0],k=this.paths[1],h=[],t=this.now,C=a.length,n;if(1===t)h=this.toD;else if(C===k.length&&1>t)for(;C--;)n=parseFloat(a[C]),
h[C]=isNaN(n)?k[C]:t*parseFloat(k[C]-n)+n;else h=k;this.elem.attr("d",h,null,!0)},update:function(){var a=this.elem,k=this.prop,h=this.now,t=this.options.step;if(this[k+"Setter"])this[k+"Setter"]();else a.attr?a.element&&a.attr(k,h,null,!0):a.style[k]=h+this.unit;t&&t.call(a,h,this)},run:function(q,k,h){var t=this,C=t.options,n=function(a){return n.stopped?!1:t.step(a)},A=G.requestAnimationFrame||function(a){setTimeout(a,13)},B=function(){for(var e=0;e<a.timers.length;e++)a.timers[e]()||a.timers.splice(e--,
1);a.timers.length&&A(B)};q!==k||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=q,this.end=k,this.unit=h,this.now=this.start,this.pos=0,n.elem=this.elem,n.prop=this.prop,n()&&1===a.timers.push(n)&&A(B)):(delete C.curAnim[this.prop],C.complete&&0===a.keys(C.curAnim).length&&C.complete.call(this.elem))},step:function(q){var k=+new Date,h,t=this.options,C=this.elem,n=t.complete,A=t.duration,B=t.curAnim;C.attr&&!C.element?q=!1:q||k>=A+this.startTime?(this.now=this.end,this.pos=
1,this.update(),h=B[this.prop]=!0,a.objectEach(B,function(a){!0!==a&&(h=!1)}),h&&n&&n.call(C),q=!1):(this.pos=t.easing((k-this.startTime)/A),this.now=this.start+(this.end-this.start)*this.pos,this.update(),q=!0);return q},initPath:function(q,k,h){function t(a){var b,f;for(c=a.length;c--;)b="M"===a[c]||"L"===a[c],f=/[a-zA-Z]/.test(a[c+3]),b&&f&&a.splice(c+1,0,a[c+1],a[c+2],a[c+1],a[c+2])}function C(a,b){for(;a.length<v;){a[0]=b[v-a.length];var d=a.slice(0,l);[].splice.apply(a,[0,0].concat(d));f&&(d=
a.slice(a.length-l),[].splice.apply(a,[a.length,0].concat(d)),c--)}a[0]="M"}function n(a,c){for(var e=(v-a.length)/l;0<e&&e--;)b=a.slice().splice(a.length/w-l,l*w),b[0]=c[v-l-e*l],d&&(b[l-6]=b[l-2],b[l-5]=b[l-1]),[].splice.apply(a,[a.length/w,0].concat(b)),f&&e--}k=k||"";var A,B=q.startX,e=q.endX,d=-1<k.indexOf("C"),l=d?7:3,v,b,c;k=k.split(" ");h=h.slice();var f=q.isArea,w=f?2:1,x;d&&(t(k),t(h));if(B&&e){for(c=0;c<B.length;c++)if(B[c]===e[0]){A=c;break}else if(B[0]===e[e.length-B.length+c]){A=c;x=
!0;break}void 0===A&&(k=[])}k.length&&a.isNumber(A)&&(v=h.length+A*w*l,x?(C(k,h),n(h,k)):(C(h,k),n(k,h)));return[k,h]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var q,k=arguments,h,t={},C=function(n,h){"object"!==typeof n&&(n={});a.objectEach(h,function(B,e){!a.isObject(B,!0)||a.isClass(B)||a.isDOMElement(B)?n[e]=h[e]:n[e]=C(n[e]||{},
B)});return n};!0===k[0]&&(t=k[1],k=Array.prototype.slice.call(k,2));h=k.length;for(q=0;q<h;q++)t=C(t,k[q]);return t};a.pInt=function(a,k){return parseInt(a,k||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(q,k){return!!q&&"object"===typeof q&&(!k||!a.isArray(q))};a.isDOMElement=function(q){return a.isObject(q)&&"number"===typeof q.nodeType};a.isClass=function(q){var k=
q&&q.constructor;return!(!a.isObject(q,!0)||a.isDOMElement(q)||!k||!k.name||"Object"===k.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,k){for(var h=a.length;h--;)if(a[h]===k){a.splice(h,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(q,k,h){var t;a.isString(k)?a.defined(h)?q.setAttribute(k,h):q&&q.getAttribute&&((t=q.getAttribute(k))||"class"!==k||(t=q.getAttribute(k+"Name"))):a.defined(k)&&a.isObject(k)&&
a.objectEach(k,function(a,n){q.setAttribute(n,a)});return t};a.splat=function(q){return a.isArray(q)?q:[q]};a.syncTimeout=function(a,k,h){if(k)return setTimeout(a,k,h);a.call(0,h)};a.clearTimeout=function(q){a.defined(q)&&clearTimeout(q)};a.extend=function(a,k){var h;a||(a={});for(h in k)a[h]=k[h];return a};a.pick=function(){var a=arguments,k,h,t=a.length;for(k=0;k<t;k++)if(h=a[k],void 0!==h&&null!==h)return h};a.css=function(q,k){a.isMS&&!a.svg&&k&&void 0!==k.opacity&&(k.filter="alpha(opacity\x3d"+
100*k.opacity+")");a.extend(q.style,k)};a.createElement=function(q,k,h,t,C){q=F.createElement(q);var n=a.css;k&&a.extend(q,k);C&&n(q,{padding:0,border:"none",margin:0});h&&n(q,h);t&&t.appendChild(q);return q};a.extendClass=function(q,k){var h=function(){};h.prototype=new q;a.extend(h.prototype,k);return h};a.pad=function(a,k,h){return Array((k||2)+1-String(a).replace("-","").length).join(h||0)+a};a.relativeLength=function(a,k,h){return/%$/.test(a)?k*parseFloat(a)/100+(h||0):parseFloat(a)};a.wrap=
function(a,k,h){var t=a[k];a[k]=function(){var a=Array.prototype.slice.call(arguments),n=arguments,A=this;A.proceed=function(){t.apply(A,arguments.length?arguments:n)};a.unshift(t);a=h.apply(this,a);A.proceed=null;return a}};a.datePropsToTimestamps=function(q){a.objectEach(q,function(k,h){a.isObject(k)&&"function"===typeof k.getTime?q[h]=k.getTime():(a.isObject(k)||a.isArray(k))&&a.datePropsToTimestamps(k)})};a.formatSingle=function(q,k,h){var t=/\.([0-9])/,C=a.defaultOptions.lang;/f$/.test(q)?(h=
(h=q.match(t))?h[1]:-1,null!==k&&(k=a.numberFormat(k,h,C.decimalPoint,-1<q.indexOf(",")?C.thousandsSep:""))):k=(h||a.time).dateFormat(q,k);return k};a.format=function(q,k,h){for(var t="{",C=!1,n,A,B,e,d=[],l;q;){t=q.indexOf(t);if(-1===t)break;n=q.slice(0,t);if(C){n=n.split(":");A=n.shift().split(".");e=A.length;l=k;for(B=0;B<e;B++)l&&(l=l[A[B]]);n.length&&(l=a.formatSingle(n.join(":"),l,h));d.push(l)}else d.push(n);q=q.slice(t+1);t=(C=!C)?"}":"{"}d.push(q);return d.join("")};a.getMagnitude=function(a){return Math.pow(10,
Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(q,k,h,t,C){var n,A=q;h=a.pick(h,1);n=q/h;k||(k=C?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===h?k=a.grep(k,function(a){return 0===a%1}):.1>=h&&(k=[1/h])));for(t=0;t<k.length&&!(A=k[t],C&&A*h>=q||!C&&n<=(k[t]+(k[t+1]||k[t]))/2);t++);return A=a.correctFloat(A*h,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,k){var h=a.length,t,C;for(C=0;C<h;C++)a[C].safeI=C;a.sort(function(a,h){t=k(a,h);return 0===t?
a.safeI-h.safeI:t});for(C=0;C<h;C++)delete a[C].safeI};a.arrayMin=function(a){for(var k=a.length,h=a[0];k--;)a[k]<h&&(h=a[k]);return h};a.arrayMax=function(a){for(var k=a.length,h=a[0];k--;)a[k]>h&&(h=a[k]);return h};a.destroyObjectProperties=function(q,k){a.objectEach(q,function(a,t){a&&a!==k&&a.destroy&&a.destroy();delete q[t]})};a.discardElement=function(q){var k=a.garbageBin;k||(k=a.createElement("div"));q&&k.appendChild(q);k.innerHTML=""};a.correctFloat=function(a,k){return parseFloat(a.toPrecision(k||
14))};a.setAnimation=function(q,k){k.renderer.globalAnimation=a.pick(q,k.options.chart.animation,!0)};a.animObject=function(q){return a.isObject(q)?a.merge(q):{duration:q?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(q,k,h,t){q=+q||0;k=+k;var C=a.defaultOptions.lang,n=(q.toString().split(".")[1]||"").split("e")[0].length,A,B,e=q.toString().split("e");-1===k?k=Math.min(n,20):a.isNumber(k)?k&&e[1]&&0>e[1]&&
(A=k+ +e[1],0<=A?(e[0]=(+e[0]).toExponential(A).split("e")[0],k=A):(e[0]=e[0].split(".")[0]||0,q=20>k?(e[0]*Math.pow(10,e[1])).toFixed(k):0,e[1]=0)):k=2;B=(Math.abs(e[1]?e[0]:q)+Math.pow(10,-Math.max(k,n)-1)).toFixed(k);n=String(a.pInt(B));A=3<n.length?n.length%3:0;h=a.pick(h,C.decimalPoint);t=a.pick(t,C.thousandsSep);q=(0>q?"-":"")+(A?n.substr(0,A)+t:"");q+=n.substr(A).replace(/(\d{3})(?=\d)/g,"$1"+t);k&&(q+=h+B.slice(-k));e[1]&&0!==+q&&(q+="e"+e[1]);return q};Math.easeInOutSine=function(a){return-.5*
(Math.cos(Math.PI*a)-1)};a.getStyle=function(q,k,h){if("width"===k)return Math.max(0,Math.min(q.offsetWidth,q.scrollWidth)-a.getStyle(q,"padding-left")-a.getStyle(q,"padding-right"));if("height"===k)return Math.max(0,Math.min(q.offsetHeight,q.scrollHeight)-a.getStyle(q,"padding-top")-a.getStyle(q,"padding-bottom"));G.getComputedStyle||a.error(27,!0);if(q=G.getComputedStyle(q,void 0))q=q.getPropertyValue(k),a.pick(h,"opacity"!==k)&&(q=a.pInt(q));return q};a.inArray=function(q,k,h){return(a.indexOfPolyfill||
Array.prototype.indexOf).call(k,q,h)};a.grep=function(q,k){return(a.filterPolyfill||Array.prototype.filter).call(q,k)};a.find=Array.prototype.find?function(a,k){return a.find(k)}:function(a,k){var h,t=a.length;for(h=0;h<t;h++)if(k(a[h],h))return a[h]};a.some=function(q,k,h){return(a.somePolyfill||Array.prototype.some).call(q,k,h)};a.map=function(a,k){for(var h=[],t=0,C=a.length;t<C;t++)h[t]=k.call(a[t],a[t],t,a);return h};a.keys=function(q){return(a.keysPolyfill||Object.keys).call(void 0,q)};a.reduce=
function(q,k,h){return(a.reducePolyfill||Array.prototype.reduce).apply(q,2<arguments.length?[k,h]:[k])};a.offset=function(a){var k=F.documentElement;a=a.parentElement||a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(G.pageYOffset||k.scrollTop)-(k.clientTop||0),left:a.left+(G.pageXOffset||k.scrollLeft)-(k.clientLeft||0)}};a.stop=function(q,k){for(var h=a.timers.length;h--;)a.timers[h].elem!==q||k&&k!==a.timers[h].prop||(a.timers[h].stopped=!0)};a.each=function(q,k,h){return(a.forEachPolyfill||
Array.prototype.forEach).call(q,k,h)};a.objectEach=function(a,k,h){for(var t in a)a.hasOwnProperty(t)&&k.call(h||a[t],a[t],t,a)};a.addEvent=function(q,k,h,t){var C,n=q.addEventListener||a.addEventListenerPolyfill;C="function"===typeof q&&q.prototype?q.prototype.protoEvents=q.prototype.protoEvents||{}:q.hcEvents=q.hcEvents||{};a.Point&&q instanceof a.Point&&q.series&&q.series.chart&&(q.series.chart.runTrackerClick=!0);n&&n.call(q,k,h,!1);C[k]||(C[k]=[]);C[k].push(h);t&&a.isNumber(t.order)&&(h.order=
t.order,C[k].sort(function(a,n){return a.order-n.order}));return function(){a.removeEvent(q,k,h)}};a.removeEvent=function(q,k,h){function t(n,e){var d=q.removeEventListener||a.removeEventListenerPolyfill;d&&d.call(q,n,e,!1)}function C(n){var e,d;q.nodeName&&(k?(e={},e[k]=!0):e=n,a.objectEach(e,function(a,v){if(n[v])for(d=n[v].length;d--;)t(v,n[v][d])}))}var n,A;a.each(["protoEvents","hcEvents"],function(B){var e=q[B];e&&(k?(n=e[k]||[],h?(A=a.inArray(h,n),-1<A&&(n.splice(A,1),e[k]=n),t(k,h)):(C(e),
e[k]=[])):(C(e),q[B]={}))})};a.fireEvent=function(q,k,h,t){var C,n,A,B,e;h=h||{};F.createEvent&&(q.dispatchEvent||q.fireEvent)?(C=F.createEvent("Events"),C.initEvent(k,!0,!0),a.extend(C,h),q.dispatchEvent?q.dispatchEvent(C):q.fireEvent(k,C)):a.each(["protoEvents","hcEvents"],function(d){if(q[d])for(n=q[d][k]||[],A=n.length,h.target||a.extend(h,{preventDefault:function(){h.defaultPrevented=!0},target:q,type:k}),B=0;B<A;B++)(e=n[B])&&!1===e.call(q,h)&&h.preventDefault()});t&&!h.defaultPrevented&&t.call(q,
h)};a.animate=function(q,k,h){var t,C="",n,A,B;a.isObject(h)||(B=arguments,h={duration:B[2],easing:B[3],complete:B[4]});a.isNumber(h.duration)||(h.duration=400);h.easing="function"===typeof h.easing?h.easing:Math[h.easing]||Math.easeInOutSine;h.curAnim=a.merge(k);a.objectEach(k,function(e,d){a.stop(q,d);A=new a.Fx(q,h,d);n=null;"d"===d?(A.paths=A.initPath(q,q.d,k.d),A.toD=k.d,t=0,n=1):q.attr?t=q.attr(d):(t=parseFloat(a.getStyle(q,d))||0,"opacity"!==d&&(C="px"));n||(n=e);n&&n.match&&n.match("px")&&
(n=n.replace(/px/g,""));A.run(t,n,C)})};a.seriesType=function(q,k,h,t,C){var n=a.getOptions(),A=a.seriesTypes;n.plotOptions[q]=a.merge(n.plotOptions[k],h);A[q]=a.extendClass(A[k]||function(){},t);A[q].prototype.type=q;C&&(A[q].prototype.pointClass=a.extendClass(a.Point,C));return A[q]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),k=0;return function(){return"highcharts-"+a+"-"+k++}}();G.jQuery&&(G.jQuery.fn.highcharts=function(){var q=[].slice.call(arguments);if(this[0])return q[0]?
(new (a[a.isString(q[0])?q.shift():"Chart"])(this[0],q[0],q[1]),this):E[a.attr(this[0],"data-highcharts-chart")]})})(J);(function(a){var E=a.each,F=a.isNumber,G=a.map,q=a.merge,k=a.pInt;a.Color=function(h){if(!(this instanceof a.Color))return new a.Color(h);this.init(h)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[k(a[1]),k(a[2]),k(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[k(a[1]),k(a[2]),k(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(h){var k,C,n,A;if((this.input=h=this.names[h&&h.toLowerCase?h.toLowerCase():""]||h)&&h.stops)this.stops=G(h.stops,function(n){return new a.Color(n[1])});else if(h&&h.charAt&&"#"===h.charAt()&&(k=h.length,h=parseInt(h.substr(1),16),7===k?C=[(h&16711680)>>16,(h&65280)>>8,h&255,1]:4===k&&(C=[(h&3840)>>4|(h&3840)>>8,(h&240)>>4|h&240,(h&15)<<4|h&15,1])),!C)for(n=this.parsers.length;n--&&!C;)A=this.parsers[n],
(k=A.regex.exec(h))&&(C=A.parse(k));this.rgba=C||[]},get:function(a){var h=this.input,k=this.rgba,n;this.stops?(n=q(h),n.stops=[].concat(n.stops),E(this.stops,function(h,B){n.stops[B]=[n.stops[B][0],h.get(a)]})):n=k&&F(k[0])?"rgb"===a||!a&&1===k[3]?"rgb("+k[0]+","+k[1]+","+k[2]+")":"a"===a?k[3]:"rgba("+k.join(",")+")":h;return n},brighten:function(a){var h,C=this.rgba;if(this.stops)E(this.stops,function(n){n.brighten(a)});else if(F(a)&&0!==a)for(h=0;3>h;h++)C[h]+=k(255*a),0>C[h]&&(C[h]=0),255<C[h]&&
(C[h]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,k){var h=this.rgba,n=a.rgba;n.length&&h&&h.length?(a=1!==n[3]||1!==h[3],k=(a?"rgba(":"rgb(")+Math.round(n[0]+(h[0]-n[0])*(1-k))+","+Math.round(n[1]+(h[1]-n[1])*(1-k))+","+Math.round(n[2]+(h[2]-n[2])*(1-k))+(a?","+(n[3]+(h[3]-n[3])*(1-k)):"")+")"):k=a.input||"none";return k}};a.color=function(h){return new a.Color(h)}})(J);(function(a){var E,F,G=a.addEvent,q=a.animate,k=a.attr,h=a.charts,t=a.color,C=a.css,
n=a.createElement,A=a.defined,B=a.deg2rad,e=a.destroyObjectProperties,d=a.doc,l=a.each,v=a.extend,b=a.erase,c=a.grep,f=a.hasTouch,w=a.inArray,x=a.isArray,m=a.isFirefox,I=a.isMS,z=a.isObject,u=a.isString,r=a.isWebKit,K=a.merge,H=a.noop,p=a.objectEach,D=a.pick,g=a.pInt,y=a.removeEvent,O=a.stop,Q=a.svg,L=a.SVG_NS,N=a.symbolSizes,R=a.win;E=a.SVGElement=function(){return this};v(E.prototype,{opacity:1,SVG_NS:L,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
init:function(a,g){this.element="span"===g?n(g):d.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(g,b,y){b=a.animObject(D(b,this.renderer.globalAnimation,!0));0!==b.duration?(y&&(b.complete=y),q(this,g,b)):(this.attr(g,null,y),b.step&&b.step.call(this));return this},complexColor:function(g,b,y){var M=this.renderer,c,f,d,L,r,D,w,v,e,m,z,H=[],u;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){g.radialGradient?f="radialGradient":g.linearGradient&&(f="linearGradient");
f&&(d=g[f],r=M.gradients,w=g.stops,m=y.radialReference,x(d)&&(g[f]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===f&&m&&!A(d.gradientUnits)&&(L=d,d=K(d,M.getRadialAttr(m,L),{gradientUnits:"userSpaceOnUse"})),p(d,function(a,g){"id"!==g&&H.push(g,a)}),p(w,function(a){H.push(a)}),H=H.join(","),r[H]?z=r[H].attr("id"):(d.id=z=a.uniqueKey(),r[H]=D=M.createElement(f).attr(d).add(M.defs),D.radAttr=L,D.stops=[],l(w,function(g){0===g[1].indexOf("rgba")?(c=a.color(g[1]),
v=c.get("rgb"),e=c.get("a")):(v=g[1],e=1);g=M.createElement("stop").attr({offset:g[0],"stop-color":v,"stop-opacity":e}).add(D);D.stops.push(g)})),u="url("+M.url+"#"+z+")",y.setAttribute(b,u),y.gradient=H,g.toString=function(){return u})})},applyTextOutline:function(g){var M=this.element,y,c,f,p,d;-1!==g.indexOf("contrast")&&(g=g.replace(/contrast/g,this.renderer.getContrast(M.style.fill)));g=g.split(" ");c=g[g.length-1];if((f=g[0])&&"none"!==f&&a.svg){this.fakeTS=!0;g=[].slice.call(M.getElementsByTagName("tspan"));
this.ySetter=this.xSetter;f=f.replace(/(^[\d\.]+)(.*?)$/g,function(a,g,b){return 2*g+b});for(d=g.length;d--;)y=g[d],"highcharts-text-outline"===y.getAttribute("class")&&b(g,M.removeChild(y));p=M.firstChild;l(g,function(a,g){0===g&&(a.setAttribute("x",M.getAttribute("x")),g=M.getAttribute("y"),a.setAttribute("y",g||0),null===g&&M.setAttribute("y",0));a=a.cloneNode(1);k(a,{"class":"highcharts-text-outline",fill:c,stroke:c,"stroke-width":f,"stroke-linejoin":"round"});M.insertBefore(a,p)})}},attr:function(a,
g,b,y){var M,c=this.element,f,d=this,L,r;"string"===typeof a&&void 0!==g&&(M=a,a={},a[M]=g);"string"===typeof a?d=(this[a+"Getter"]||this._defaultGetter).call(this,a,c):(p(a,function(g,b){L=!1;y||O(this,b);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(b)&&(f||(this.symbolAttr(a),f=!0),L=!0);!this.rotation||"x"!==b&&"y"!==b||(this.doTransform=!0);L||(r=this[b+"Setter"]||this._defaultSetter,r.call(this,g,b,c),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(b)&&
this.updateShadows(b,g,r))},this),this.afterSetters());b&&b.call(this);return d},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,g,b){for(var y=this.shadows,M=y.length;M--;)b.call(y[M],"height"===a?Math.max(g-(y[M].cutHeight||0),0):"d"===a?this.d:g,a,y[M])},addClass:function(a,g){var b=this.attr("class")||"";-1===b.indexOf(a)&&(g||(a=(b+(b?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
w(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var g=this;l("x y r start end width height innerR anchorX anchorY".split(" "),function(b){g[b]=D(a[b],g[b])});g.attr({d:g.renderer.symbols[g.symbolName](g.x,g.y,g.width,g.height,g)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var b;g=g||a.strokeWidth||0;b=Math.round(g)%2/2;
a.x=Math.floor(a.x||this.x||0)+b;a.y=Math.floor(a.y||this.y||0)+b;a.width=Math.floor((a.width||this.width||0)-2*b);a.height=Math.floor((a.height||this.height||0)-2*b);A(a.strokeWidth)&&(a.strokeWidth=g);return a},css:function(a){var b=this.styles,y={},c=this.element,M,f="",d,L=!b,r=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);b&&p(a,function(a,g){a!==b[g]&&(y[g]=a,L=!0)});L&&(b&&(a=v(b,y)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===c.nodeName.toLowerCase()&&
a.width&&(M=this.textWidth=g(a.width))),this.styles=a,M&&!Q&&this.renderer.forExport&&delete a.width,c.namespaceURI===this.SVG_NS?(d=function(a,g){return"-"+g.toLowerCase()},p(a,function(a,g){-1===w(g,r)&&(f+=g.replace(/([A-Z])/g,d)+":"+a+";")}),f&&k(c,"style",f)):C(c,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var b=this,y=
b.element;f&&"click"===a?(y.ontouchstart=function(a){b.touchEventFired=Date.now();a.preventDefault();g.call(y,a)},y.onclick=function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-(b.touchEventFired||0))&&g.call(y,a)}):y["on"+a]=g;return this},setRadialReference:function(a){var g=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;g&&g.radAttr&&g.animate(this.renderer.getRadialAttr(a,g.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,
translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,b=this.scaleX,y=this.scaleY,c=this.inverted,f=this.rotation,d=this.matrix,p=this.element;c&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];A(d)&&a.push("matrix("+d.join(",")+")");c?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+D(this.rotationOriginX,p.getAttribute("x"),0)+" "+D(this.rotationOriginY,p.getAttribute("y")||
0)+")");(A(b)||A(y))&&a.push("scale("+D(b,1)+" "+D(y,1)+")");a.length&&p.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,y){var c,f,M,p,d={};f=this.renderer;M=f.alignedObjects;var L,r;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!y||u(y))this.alignTo=c=y||"renderer",b(M,this),M.push(this),y=null}else a=this.alignOptions,g=this.alignByTranslate,c=this.alignTo;y=D(y,f[c],f);c=a.align;f=a.verticalAlign;M=
(y.x||0)+(a.x||0);p=(y.y||0)+(a.y||0);"right"===c?L=1:"center"===c&&(L=2);L&&(M+=(y.width-(a.width||0))/L);d[g?"translateX":"x"]=Math.round(M);"bottom"===f?r=1:"middle"===f&&(r=2);r&&(p+=(y.height-(a.height||0))/r);d[g?"translateY":"y"]=Math.round(p);this[this.placed?"animate":"attr"](d);this.placed=!0;this.alignAttr=d;return this},getBBox:function(a,g){var b,y=this.renderer,c,f=this.element,d=this.styles,p,M=this.textStr,L,r=y.cache,w=y.cacheKeys,e=f.namespaceURI===this.SVG_NS,m;g=D(g,this.rotation);
c=g*B;p=d&&d.fontSize;A(M)&&(m=M.toString(),-1===m.indexOf("\x3c")&&(m=m.replace(/[0-9]/g,"0")),m+=["",g||0,p,this.textWidth,d&&d.textOverflow].join());m&&!a&&(b=r[m]);if(!b){if(e||y.forExport){try{(L=this.fakeTS&&function(a){l(f.querySelectorAll(".highcharts-text-outline"),function(g){g.style.display=a})})&&L("none"),b=f.getBBox?v({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},L&&L("")}catch(T){}if(!b||0>b.width)b={width:0,height:0}}else b=this.htmlGetBBox();y.isSVG&&(a=b.width,y=b.height,
e&&(b.height=y={"11px,17":14,"13px,20":16}[d&&d.fontSize+","+Math.round(y)]||y),g&&(b.width=Math.abs(y*Math.sin(c))+Math.abs(a*Math.cos(c)),b.height=Math.abs(y*Math.cos(c))+Math.abs(a*Math.sin(c))));if(m&&0<b.height){for(;250<w.length;)delete r[w.shift()];r[m]||w.push(m);r[m]=b}}return b},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var g=this;g.animate({opacity:0},{duration:a||150,complete:function(){g.attr({y:-9999})}})},
add:function(a){var g=this.renderer,b=this.element,y;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&g.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)y=this.zIndexSetter();y||(a?a.element:g.box).appendChild(b);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var g=a.parentNode;g&&g.removeChild(a)},destroy:function(){var a=this,g=a.element||{},y=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,c=g.ownerSVGElement,f=a.clipPath;g.onclick=
g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;O(a);f&&c&&(l(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var g=a.getAttribute("clip-path"),b=f.element.id;(-1<g.indexOf("(#"+b+")")||-1<g.indexOf('("#'+b+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=f.destroy());if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c]=a.stops[c].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();y&&y.div&&0===y.div.childNodes.length;)g=y.parentGroup,a.safeRemoveChild(y.div),delete y.div,
y=g;a.alignTo&&b(a.renderer.alignedObjects,a);p(a,function(g,b){delete a[b]});return null},shadow:function(a,g,b){var y=[],c,f,d=this.element,p,L,r,M;if(!a)this.destroyShadows();else if(!this.shadows){L=D(a.width,3);r=(a.opacity||.15)/L;M=this.parentInverted?"(-1,-1)":"("+D(a.offsetX,1)+", "+D(a.offsetY,1)+")";for(c=1;c<=L;c++)f=d.cloneNode(0),p=2*L+1-2*c,k(f,{stroke:a.color||"#000000","stroke-opacity":r*c,"stroke-width":p,transform:"translate"+M,fill:"none"}),f.setAttribute("class",(f.getAttribute("class")||
"")+" highcharts-shadow"),b&&(k(f,"height",Math.max(k(f,"height")-p,0)),f.cutHeight=p),g?g.element.appendChild(f):d.parentNode&&d.parentNode.insertBefore(f,d),y.push(f);this.shadows=y}return this},destroyShadows:function(){l(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=D(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):
null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[g]!==a&&(b.setAttribute(g,a),this[g]=a)},dashstyleSetter:function(a){var b,y=this["stroke-width"];"inherit"===y&&(y=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(b=a.length;b--;)a[b]=g(a[b])*y;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,b){this[g]=a;b.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=d.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);
g.appendChild(d.createTextNode(String(D(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,b){"string"===typeof a?b.setAttribute(g,a):a&&this.complexColor(a,g,b)},visibilitySetter:function(a,g,b){"inherit"===a?b.removeAttribute(g):this[g]!==a&&b.setAttribute(g,a);this[g]=a},zIndexSetter:function(a,b){var y=this.renderer,c=this.parentGroup,
f=(c||y).element||y.box,d,p=this.element,L,r,y=f===y.box;d=this.added;var D;A(a)?(p.setAttribute("data-z-index",a),a=+a,this[b]===a&&(d=!1)):A(this[b])&&p.removeAttribute("data-z-index");this[b]=a;if(d){(a=this.zIndex)&&c&&(c.handleZ=!0);b=f.childNodes;for(D=b.length-1;0<=D&&!L;D--)if(c=b[D],d=c.getAttribute("data-z-index"),r=!A(d),c!==p)if(0>a&&r&&!y&&!D)f.insertBefore(p,b[D]),L=!0;else if(g(d)<=a||r&&(!A(a)||0<=a))f.insertBefore(p,b[D+1]||null),L=!0;L||(f.insertBefore(p,b[y?3:0]||null),L=!0)}return L},
_defaultSetter:function(a,g,b){b.setAttribute(g,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=E.prototype.rotationOriginXSetter=E.prototype.rotationOriginYSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=E.prototype.matrixSetter=function(a,g){this[g]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,g,b){this[g]=a;this.stroke&&this["stroke-width"]?
(E.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};F=a.SVGRenderer=function(){this.init.apply(this,arguments)};v(F.prototype,{Element:E,SVG_NS:L,init:function(a,g,b,y,c,f){var p;y=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(y));p=y.element;a.appendChild(p);k(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&
k(p,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=p;this.boxWrapper=y;this.alignedObjects=[];this.url=(m||r)&&d.getElementsByTagName("base").length?R.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(d.createTextNode("Created with Highstock 6.2.0"));this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,
b,!1);var L;m&&a.getBoundingClientRect&&(g=function(){C(a,{left:0,top:0});L=a.getBoundingClientRect();C(a,{left:Math.ceil(L.left)-L.left+"px",top:Math.ceil(L.top)-L.top+"px"})},g(),this.unSubPixelFix=G(R,"resize",g))},getStyle:function(a){return this.style=v({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();e(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:H,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},truncate:function(a,g,b,y,c,f,p){var L=this,r=a.rotation,D,w=y?1:0,v=(b||y).length,e=v,m=[],l=function(a){g.firstChild&&
g.removeChild(g.firstChild);a&&g.appendChild(d.createTextNode(a))},x=function(f,d){d=d||f;if(void 0===m[d])if(g.getSubStringLength)try{m[d]=c+g.getSubStringLength(0,y?d+1:d)}catch(ha){}else L.getSpanWidth&&(l(p(b||y,f)),m[d]=c+L.getSpanWidth(a,g));return m[d]},z,H;a.rotation=0;z=x(g.textContent.length);if(H=c+z>f){for(;w<=v;)e=Math.ceil((w+v)/2),y&&(D=p(y,e)),z=x(e,D&&D.length-1),w===v?w=v+1:z>f?v=e-1:w=e;0===v?l(""):b&&v===b.length-1||l(D||p(b||y,e))}y&&y.splice(0,e);a.actualWidth=z;a.rotation=r;
return H},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var b=a.element,y=this,f=y.forExport,r=D(a.textStr,"").toString(),v=-1!==r.indexOf("\x3c"),e=b.childNodes,m,z=k(b,"x"),x=a.styles,H=a.textWidth,u=x&&x.lineHeight,O=x&&x.textOutline,M=x&&"ellipsis"===x.textOverflow,K=x&&"nowrap"===x.whiteSpace,N=x&&x.fontSize,I,n,h=e.length,x=H&&!a.added&&this.box,B=function(a){var c;c=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:N||
y.style.fontSize||12;return u?g(u):y.fontMetrics(c,a.getAttribute("style")?a:b).h},A=function(a,g){p(y.escapes,function(b,y){g&&-1!==w(b,g)||(a=a.toString().replace(new RegExp(b,"g"),y))});return a},R=function(a,g){var b;b=a.indexOf("\x3c");a=a.substring(b,a.indexOf("\x3e")-b);b=a.indexOf(g+"\x3d");if(-1!==b&&(b=b+g.length+1,g=a.charAt(b),'"'===g||"'"===g))return a=a.substring(b+1),a.substring(0,a.indexOf(g))};I=[r,M,K,u,O,N,H].join();if(I!==a.textCache){for(a.textCache=I;h--;)b.removeChild(e[h]);
v||O||M||H||-1!==r.indexOf(" ")?(x&&x.appendChild(b),r=v?r.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[r],r=c(r,function(a){return""!==a}),l(r,function(g,c){var p,r=0,D=0;g=g.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");p=g.split("|||");l(p,function(g){if(""!==g||1===
p.length){var w={},v=d.createElementNS(y.SVG_NS,"tspan"),e,l;(e=R(g,"class"))&&k(v,"class",e);if(e=R(g,"style"))e=e.replace(/(;| |^)color([ :])/,"$1fill$2"),k(v,"style",e);(l=R(g,"href"))&&!f&&(k(v,"onclick",'location.href\x3d"'+l+'"'),k(v,"class","highcharts-anchor"),C(v,{cursor:"pointer"}));g=A(g.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==g){v.appendChild(d.createTextNode(g));r?w.dx=0:c&&null!==z&&(w.x=z);k(v,w);b.appendChild(v);!r&&n&&(!Q&&f&&C(v,{display:"block"}),k(v,"dy",B(v)));if(H){var x=
g.replace(/([^\^])-/g,"$1- ").split(" "),w=!K&&(1<p.length||c||1<x.length);l=0;var u=B(v);if(M)m=y.truncate(a,v,g,void 0,0,Math.max(0,H-parseInt(N||12,10)),function(a,g){return a.substring(0,g)+"\u2026"});else if(w)for(;x.length;)x.length&&!K&&0<l&&(v=d.createElementNS(L,"tspan"),k(v,{dy:u,x:z}),e&&k(v,"style",e),v.appendChild(d.createTextNode(x.join(" ").replace(/- /g,"-"))),b.appendChild(v)),y.truncate(a,v,null,x,0===l?D:0,H,function(a,g){return x.slice(0,g).join(" ").replace(/- /g,"-")}),D=a.actualWidth,
l++}r++}}});n=n||b.childNodes.length}),M&&m&&a.attr("title",A(a.textStr,["\x26lt;","\x26gt;"])),x&&x.removeChild(b),O&&a.applyTextOutline&&a.applyTextOutline(O)):b.appendChild(d.createTextNode(A(r)))}},getContrast:function(a){a=t(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,b,y,c,f,p,d,L){var r=this.label(a,g,b,L,null,null,null,null,"button"),D=0;r.attr(K({padding:8,r:2},c));var w,e,m,l;c=K({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,
style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},c);w=c.style;delete c.style;f=K(c,{fill:"#e6e6e6"},f);e=f.style;delete f.style;p=K(c,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},p);m=p.style;delete p.style;d=K(c,{style:{color:"#cccccc"}},d);l=d.style;delete d.style;G(r.element,I?"mouseover":"mouseenter",function(){3!==D&&r.setState(1)});G(r.element,I?"mouseout":"mouseleave",function(){3!==D&&r.setState(D)});r.setState=function(a){1!==a&&(r.state=D=a);r.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
["normal","hover","pressed","disabled"][a||0]);r.attr([c,f,p,d][a||0]).css([w,e,m,l][a||0])};r.attr(c).css(v({cursor:"default"},w));return r.on("click",function(a){3!==D&&y.call(r,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};x(a)?g.d=a:z(a)&&v(g,a);return this.createElement("path").attr(g)},circle:function(a,g,b){a=z(a)?a:{x:a,y:g,r:b};g=this.createElement("circle");g.xSetter=
g.ySetter=function(a,g,b){b.setAttribute("c"+g,a)};return g.attr(a)},arc:function(a,g,b,y,c,f){z(a)?(y=a,g=y.y,b=y.r,a=y.x):y={innerR:y,start:c,end:f};a=this.symbol("arc",a,g,b,b,y);a.r=b;return a},rect:function(a,g,b,y,c,f){c=z(a)?a.r:c;var p=this.createElement("rect");a=z(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(b,0),height:Math.max(y,0)};void 0!==f&&(a.strokeWidth=f,a=p.crisp(a));a.fill="none";c&&(a.r=c);p.rSetter=function(a,g,b){k(b,{rx:a,ry:a})};return p.attr(a)},setSize:function(a,g,b){var y=
this.alignedObjects,c=y.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:D(b,!0)?void 0:0});c--;)y[c].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,b,y,c,f){var p={preserveAspectRatio:"none"},d,r=function(a,g){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",g):a.setAttribute("hc-svg-href",
g)},L=function(g){r(d.element,a);f.call(d,g)};1<arguments.length&&v(p,{x:g,y:b,width:y,height:c});d=this.createElement("image").attr(p);f?(r(d.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),p=new R.Image,G(p,"load",L),p.src=a,p.complete&&L({})):r(d.element,a);return d},symbol:function(a,g,b,y,c,f){var p=this,r,L=/^url\((.*?)\)$/,w=L.test(a),e=!w&&(this.symbols[a]?a:"circle"),m=e&&this.symbols[e],x=A(g)&&m&&m.call(this.symbols,Math.round(g),Math.round(b),
y,c,f),z,H;m?(r=this.path(x),r.attr("fill","none"),v(r,{symbolName:e,x:g,y:b,width:y,height:c}),f&&v(r,f)):w&&(z=a.match(L)[1],r=this.image(z),r.imgwidth=D(N[z]&&N[z].width,f&&f.width),r.imgheight=D(N[z]&&N[z].height,f&&f.height),H=function(){r.attr({width:r.width,height:r.height})},l(["width","height"],function(a){r[a+"Setter"]=function(a,g){var b={},y=this["img"+g],c="width"===g?"translateX":"translateY";this[g]=a;A(y)&&(this.element&&this.element.setAttribute(g,y),this.alignByTranslate||(b[c]=
((this[g]||0)-y)/2,this.attr(b)))}}),A(g)&&r.attr({x:g,y:b}),r.isImg=!0,A(r.imgwidth)&&A(r.imgheight)?H():(r.attr({width:0,height:0}),n("img",{onload:function(){var a=h[p.chartIndex];0===this.width&&(C(this,{position:"absolute",top:"-999em"}),d.body.appendChild(this));N[z]={width:this.width,height:this.height};r.imgwidth=this.width;r.imgheight=this.height;r.element&&H();this.parentNode&&this.parentNode.removeChild(this);p.imgCount--;if(!p.imgCount&&a&&a.onload)a.onload()},src:z}),this.imgCount++));
return r},symbols:{circle:function(a,g,b,y){return this.arc(a+b/2,g+y/2,b/2,y/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,b,y){return["M",a,g,"L",a+b,g,a+b,g+y,a,g+y,"Z"]},triangle:function(a,g,b,y){return["M",a+b/2,g,"L",a+b,g+y,a,g+y,"Z"]},"triangle-down":function(a,g,b,y){return["M",a,g,"L",a+b,g,a+b/2,g+y,"Z"]},diamond:function(a,g,b,y){return["M",a+b/2,g,"L",a+b,g+y/2,a+b/2,g+y,a,g+y/2,"Z"]},arc:function(a,g,b,y,c){var f=c.start,p=c.r||b,r=c.r||y||b,d=c.end-.001;b=c.innerR;y=D(c.open,
.001>Math.abs(c.end-c.start-2*Math.PI));var L=Math.cos(f),v=Math.sin(f),w=Math.cos(d),d=Math.sin(d);c=.001>c.end-f-Math.PI?0:1;p=["M",a+p*L,g+r*v,"A",p,r,0,c,1,a+p*w,g+r*d];A(b)&&p.push(y?"M":"L",a+b*w,g+b*d,"A",b,b,0,c,0,a+b*L,g+b*v);p.push(y?"":"Z");return p},callout:function(a,g,b,y,c){var f=Math.min(c&&c.r||0,b,y),p=f+6,d=c&&c.anchorX;c=c&&c.anchorY;var r;r=["M",a+f,g,"L",a+b-f,g,"C",a+b,g,a+b,g,a+b,g+f,"L",a+b,g+y-f,"C",a+b,g+y,a+b,g+y,a+b-f,g+y,"L",a+f,g+y,"C",a,g+y,a,g+y,a,g+y-f,"L",a,g+f,
"C",a,g,a,g,a+f,g];d&&d>b?c>g+p&&c<g+y-p?r.splice(13,3,"L",a+b,c-6,a+b+6,c,a+b,c+6,a+b,g+y-f):r.splice(13,3,"L",a+b,y/2,d,c,a+b,y/2,a+b,g+y-f):d&&0>d?c>g+p&&c<g+y-p?r.splice(33,3,"L",a,c+6,a-6,c,a,c-6,a,g+f):r.splice(33,3,"L",a,y/2,d,c,a,y/2,a,g+f):c&&c>y&&d>a+p&&d<a+b-p?r.splice(23,3,"L",d+6,g+y,d,g+y+6,d-6,g+y,a+f,g+y):c&&0>c&&d>a+p&&d<a+b-p&&r.splice(3,3,"L",d-6,g,d,g-6,d+6,g,b-f,g);return r}},clipRect:function(g,b,y,c){var f=a.uniqueKey(),p=this.createElement("clipPath").attr({id:f}).add(this.defs);
g=this.rect(g,b,y,c,0).add(p);g.id=f;g.clipPath=p;g.count=0;return g},text:function(a,g,b,y){var c={};if(y&&(this.allowHTML||!this.forExport))return this.html(a,g,b);c.x=Math.round(g||0);b&&(c.y=Math.round(b));A(a)&&(c.text=a);a=this.createElement("text").attr(c);y||(a.xSetter=function(a,g,b){var y=b.getElementsByTagName("tspan"),c,f=b.getAttribute(g),p;for(p=0;p<y.length;p++)c=y[p],c.getAttribute(g)===f&&c.setAttribute(g,a);b.setAttribute(g,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&
b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?g(a):/em/.test(a)?parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,g,b){var y=a;g&&b&&(y=Math.max(y*Math.cos(g*B),4));return{x:-a/3*Math.sin(g*B),y:y}},label:function(g,b,c,f,p,d,r,L,D){var w=this,e=w.g("button"!==D&&"label"),m=e.text=w.text("",0,0,r).attr({zIndex:1}),x,z,H=0,u=3,O=0,Q,N,I,n,h,B={},k,R,M=/^url\((.*?)\)$/.test(f),t=M,C,q,
P,S;D&&e.addClass("highcharts-"+D);t=M;C=function(){return(k||0)%2/2};q=function(){var a=m.element.style,g={};z=(void 0===Q||void 0===N||h)&&A(m.textStr)&&m.getBBox();e.width=(Q||z.width||0)+2*u+O;e.height=(N||z.height||0)+2*u;R=u+w.fontMetrics(a&&a.fontSize,m).b;t&&(x||(e.box=x=w.symbols[f]||M?w.symbol(f):w.rect(),x.addClass(("button"===D?"":"highcharts-label-box")+(D?" highcharts-"+D+"-box":"")),x.add(e),a=C(),g.x=a,g.y=(L?-R:0)+a),g.width=Math.round(e.width),g.height=Math.round(e.height),x.attr(v(g,
B)),B={})};P=function(){var a=O+u,g;g=L?0:R;A(Q)&&z&&("center"===h||"right"===h)&&(a+={center:.5,right:1}[h]*(Q-z.width));if(a!==m.x||g!==m.y)m.attr("x",a),m.hasBoxWidthChanged&&(z=m.getBBox(!0),q()),void 0!==g&&m.attr("y",g);m.x=a;m.y=g};S=function(a,g){x?x.attr(a,g):B[a]=g};e.onAdd=function(){m.add(e);e.attr({text:g||0===g?g:"",x:b,y:c});x&&A(p)&&e.attr({anchorX:p,anchorY:d})};e.widthSetter=function(g){Q=a.isNumber(g)?g:null};e.heightSetter=function(a){N=a};e["text-alignSetter"]=function(a){h=a};
e.paddingSetter=function(a){A(a)&&a!==u&&(u=e.padding=a,P())};e.paddingLeftSetter=function(a){A(a)&&a!==O&&(O=a,P())};e.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==H&&(H=a,z&&e.attr({x:I}))};e.textSetter=function(a){void 0!==a&&m.textSetter(a);q();P()};e["stroke-widthSetter"]=function(a,g){a&&(t=!0);k=this["stroke-width"]=a;S(g,a)};e.strokeSetter=e.fillSetter=e.rSetter=function(a,g){"r"!==g&&("fill"===g&&a&&(t=!0),e[g]=a);S(g,a)};e.anchorXSetter=function(a,g){p=e.anchorX=a;S(g,Math.round(a)-
C()-I)};e.anchorYSetter=function(a,g){d=e.anchorY=a;S(g,a-n)};e.xSetter=function(a){e.x=a;H&&(a-=H*((Q||z.width)+2*u),e["forceAnimate:x"]=!0);I=Math.round(a);e.attr("translateX",I)};e.ySetter=function(a){n=e.y=Math.round(a);e.attr("translateY",n)};var X=e.css;return v(e,{css:function(a){if(a){var g={};a=K(a);l(e.textProps,function(b){void 0!==a[b]&&(g[b]=a[b],delete a[b])});m.css(g);"width"in g&&q()}return X.call(e,a)},getBBox:function(){return{width:z.width+2*u,height:z.height+2*u,x:z.x-u,y:z.y-
u}},shadow:function(a){a&&(q(),x&&x.shadow(a));return e},destroy:function(){y(e.element,"mouseenter");y(e.element,"mouseleave");m&&(m=m.destroy());x&&(x=x.destroy());E.prototype.destroy.call(e);e=w=q=P=S=null}})}});a.Renderer=F})(J);(function(a){var E=a.attr,F=a.createElement,G=a.css,q=a.defined,k=a.each,h=a.extend,t=a.isFirefox,C=a.isMS,n=a.isWebKit,A=a.pick,B=a.pInt,e=a.SVGRenderer,d=a.win,l=a.wrap;h(a.SVGElement.prototype,{htmlCss:function(a){var b="SPAN"===this.element.tagName&&a&&"width"in a,
c=A(b&&a.width,void 0);b&&(delete a.width,this.textWidth=c,this.htmlUpdateTransform());a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=h(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,f=this.translateY||0,d=this.x||0,e=this.y||0,m=this.textAlign||
"left",l={left:0,center:.5,right:1}[m],z=this.styles,u=z&&z.whiteSpace;G(b,{marginLeft:c,marginTop:f});this.shadows&&k(this.shadows,function(a){G(a,{marginLeft:c+1,marginTop:f+1})});this.inverted&&k(b.childNodes,function(c){a.invertChild(c,b)});if("SPAN"===b.tagName){var z=this.rotation,r=this.textWidth&&B(this.textWidth),K=[z,m,b.innerHTML,this.textWidth,this.textAlign].join(),H;(H=r!==this.oldTextWidth)&&!(H=r>this.oldTextWidth)&&((H=this.textPxLength)||(G(b,{width:"",whiteSpace:u||"nowrap"}),H=
b.offsetWidth),H=H>r);H&&/[ \-]/.test(b.textContent||b.innerText)?(G(b,{width:r+"px",display:"block",whiteSpace:u||"normal"}),this.oldTextWidth=r,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;K!==this.cTT&&(u=a.fontMetrics(b.style.fontSize).b,!q(z)||z===(this.oldRotation||0)&&m===this.oldAlign||this.setSpanRotation(z,l,u),this.getSpanCorrection(!q(z)&&this.textPxLength||b.offsetWidth,u,l,z,m));G(b,{left:d+(this.xCorr||0)+"px",top:e+(this.yCorr||0)+"px"});this.cTT=K;this.oldRotation=z;this.oldAlign=
m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var f={},d=this.renderer.getTransformKey();f[d]=f.transform="rotate("+a+"deg)";f[d+(t?"Origin":"-origin")]=f.transformOrigin=100*b+"% "+c+"px";G(this.element,f)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});h(e.prototype,{getTransformKey:function(){return C&&!/Edge/.test(d.navigator.userAgent)?"-ms-transform":n?"-webkit-transform":t?"MozTransform":d.opera?"-o-transform":""},html:function(a,b,c){var f=this.createElement("span"),
d=f.element,e=f.renderer,m=e.isSVG,v=function(a,b){k(["opacity","visibility"],function(c){l(a,c+"Setter",function(a,c,f,d){a.call(this,c,f,d);b[f]=c})});a.addedSetters=!0};f.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;this.textStr=a;d.innerHTML=A(a,"");f.doTransform=!0};m&&v(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=
!1)};f.attr({text:a,x:Math.round(b),y:Math.round(c)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";f.css=f.htmlCss;m&&(f.add=function(a){var b,c=e.box.parentNode,w=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)w.push(a),a=a.parentGroup;k(w.reverse(),function(a){function d(g,b){a[b]=g;"translateX"===b?r.left=g+"px":r.top=g+"px";a.doTransform=!0}var r,g=E(a.element,"class");g&&(g={className:g});b=a.div=a.div||F("div",g,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||c);r=b.style;h(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(b),on:function(){w[0].div&&f.on.apply({element:w[0].div},arguments);return a},translateXSetter:d,translateYSetter:d});a.addedSetters||v(a,r)})}}else b=c;b.appendChild(d);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}})})(J);
(function(a){var E=a.defined,F=a.each,G=a.extend,q=a.merge,k=a.pick,h=a.timeUnits,t=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var n=k(a&&a.useUTC,!0),h=this;this.options=a=q(!0,this.options||{},a);this.Date=a.Date||t.Date;this.timezoneOffset=(this.useUTC=n)&&a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(n&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,e){var d=
e.getTime(),l=d-h.getTimezoneOffset(e);e.setTime(l);a=e["getUTC"+a]();e.setTime(d);return a},this.set=function(a,e,d){var l;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===e.getTimezoneOffset()%60)e["set"+a](d);else l=h.getTimezoneOffset(e),l=e.getTime()-l,e.setTime(l),e["setUTC"+a](d),a=h.getTimezoneOffset(e),l=e.getTime()+a,e.setTime(l)}):n?(this.get=function(a,e){return e["getUTC"+a]()},this.set=function(a,e,d){return e["setUTC"+a](d)}):(this.get=function(a,e){return e["get"+a]()},this.set=
function(a,e,d){return e["set"+a](d)})},makeTime:function(h,n,A,B,e,d){var l,v,b;this.useUTC?(l=this.Date.UTC.apply(0,arguments),v=this.getTimezoneOffset(l),l+=v,b=this.getTimezoneOffset(l),v!==b?l+=b-v:v-36E5!==this.getTimezoneOffset(l-36E5)||a.isSafari||(l-=36E5)):l=(new this.Date(h,n,k(A,1),k(B,0),k(e,0),k(d,0))).getTime();return l},timezoneOffsetFunction:function(){var h=this,n=this.options,k=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(n.timezone){if(k)return function(a){return 6E4*
-k.tz(a,n.timezone).utcOffset()};a.error(25)}return this.useUTC&&n.getTimezoneOffset?function(a){return 6E4*n.getTimezoneOffset(a)}:function(){return 6E4*(h.timezoneOffset||0)}},dateFormat:function(h,n,k){if(!a.defined(n)||isNaN(n))return a.defaultOptions.lang.invalidDate||"";h=a.pick(h,"%Y-%m-%d %H:%M:%S");var B=this,e=new this.Date(n),d=this.get("Hours",e),l=this.get("Day",e),v=this.get("Date",e),b=this.get("Month",e),c=this.get("FullYear",e),f=a.defaultOptions.lang,w=f.weekdays,x=f.shortWeekdays,
m=a.pad,e=a.extend({a:x?x[l]:w[l].substr(0,3),A:w[l],d:m(v),e:m(v,2," "),w:l,b:f.shortMonths[b],B:f.months[b],m:m(b+1),o:b+1,y:c.toString().substr(2,2),Y:c,H:m(d),k:d,I:m(d%12||12),l:d%12||12,M:m(B.get("Minutes",e)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:m(e.getSeconds()),L:m(Math.floor(n%1E3),3)},a.dateFormats);a.objectEach(e,function(a,b){for(;-1!==h.indexOf("%"+b);)h=h.replace("%"+b,"function"===typeof a?a.call(B,n):a)});return k?h.substr(0,1).toUpperCase()+h.substr(1):h},resolveDTLFormat:function(h){return a.isObject(h,
!0)?h:(h=a.splat(h),{main:h[0],from:h[1],to:h[2]})},getTimeTicks:function(a,n,A,B){var e=this,d=[],l,v={},b;l=new e.Date(n);var c=a.unitRange,f=a.count||1,w;B=k(B,1);if(E(n)){e.set("Milliseconds",l,c>=h.second?0:f*Math.floor(e.get("Milliseconds",l)/f));c>=h.second&&e.set("Seconds",l,c>=h.minute?0:f*Math.floor(e.get("Seconds",l)/f));c>=h.minute&&e.set("Minutes",l,c>=h.hour?0:f*Math.floor(e.get("Minutes",l)/f));c>=h.hour&&e.set("Hours",l,c>=h.day?0:f*Math.floor(e.get("Hours",l)/f));c>=h.day&&e.set("Date",
l,c>=h.month?1:f*Math.floor(e.get("Date",l)/f));c>=h.month&&(e.set("Month",l,c>=h.year?0:f*Math.floor(e.get("Month",l)/f)),b=e.get("FullYear",l));c>=h.year&&e.set("FullYear",l,b-b%f);c===h.week&&(b=e.get("Day",l),e.set("Date",l,e.get("Date",l)-b+B+(b<B?-7:0)));b=e.get("FullYear",l);B=e.get("Month",l);var x=e.get("Date",l),m=e.get("Hours",l);n=l.getTime();e.variableTimezone&&(w=A-n>4*h.month||e.getTimezoneOffset(n)!==e.getTimezoneOffset(A));n=l.getTime();for(l=1;n<A;)d.push(n),n=c===h.year?e.makeTime(b+
l*f,0):c===h.month?e.makeTime(b,B+l*f):!w||c!==h.day&&c!==h.week?w&&c===h.hour&&1<f?e.makeTime(b,B,x,m+l*f):n+c*f:e.makeTime(b,B,x+l*f*(c===h.day?1:7)),l++;d.push(n);c<=h.hour&&1E4>d.length&&F(d,function(a){0===a%18E5&&"000000000"===e.dateFormat("%H%M%S%L",a)&&(v[a]="day")})}d.info=G(a,{higherRanks:v,totalRange:c*f});return d}}})(J);(function(a){var E=a.color,F=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle",
"diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,
chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",
labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",
position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:E("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(E){a.defaultOptions=F(!0,a.defaultOptions,E);
a.time.update(F(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(F(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(F,q,k){return a.time.dateFormat(F,q,k)}})(J);(function(a){var E=a.correctFloat,F=a.defined,G=a.destroyObjectProperties,q=a.fireEvent,k=a.isNumber,h=a.merge,t=a.pick,C=a.deg2rad;a.Tick=function(a,h,k,e,d){this.axis=a;this.pos=
h;this.type=k||"";this.isNewLabel=this.isNew=!0;this.parameters=d||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;k||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var n=this,k=n.axis,B=k.options,e=k.chart,d=k.categories,l=k.names,v=n.pos,b=t(n.options&&n.options.labels,B.labels),c=k.tickPositions,f=v===c[0],w=v===c[c.length-1],d=this.parameters.category||(d?t(d[v],l[v],v):v),x=n.label,c=c.info,m,I,z,u;k.isDatetimeAxis&&c&&(I=e.time.resolveDTLFormat(B.dateTimeLabelFormats[!B.grid&&
c.higherRanks[v]||c.unitName]),m=I.main);n.isFirst=f;n.isLast=w;n.formatCtx={axis:k,chart:e,isFirst:f,isLast:w,dateTimeLabelFormat:m,tickPositionInfo:c,value:k.isLog?E(k.lin2log(d)):d,pos:v};B=k.labelFormatter.call(n.formatCtx,this.formatCtx);if(u=I&&I.list)n.shortenLabel=function(){for(z=0;z<u.length;z++)if(x.attr({text:k.labelFormatter.call(a.extend(n.formatCtx,{dateTimeLabelFormat:u[z]}))}),x.getBBox().width<k.getSlotWidth(n)-2*t(b.padding,5))return;x.attr({text:""})};if(F(x))x&&x.textStr!==B&&
(!x.textWidth||b.style&&b.style.width||x.styles.width||x.css({width:null}),x.attr({text:B}));else{if(n.label=x=F(B)&&b.enabled?e.renderer.text(B,0,0,b.useHTML).css(h(b.style)).add(k.labelGroup):null)x.textPxLength=x.getBBox().width;n.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var h=this.axis,n=h.options.labels,e=a.x,d=h.chart.chartWidth,l=h.chart.spacing,v=t(h.labelLeft,Math.min(h.pos,l[3])),l=t(h.labelRight,
Math.max(h.isRadial?0:h.pos+h.len,d-l[1])),b=this.label,c=this.rotation,f={left:0,center:.5,right:1}[h.labelAlign||b.attr("align")],w=b.getBBox().width,x=h.getSlotWidth(this),m=x,I=1,z,u={};if(c||"justify"!==t(n.overflow,"justify"))0>c&&e-f*w<v?z=Math.round(e/Math.cos(c*C)-v):0<c&&e+f*w>l&&(z=Math.round((d-e)/Math.cos(c*C)));else if(d=e+(1-f)*w,e-f*w<v?m=a.x+m*(1-f)-v:d>l&&(m=l-a.x+m*f,I=-1),m=Math.min(x,m),m<x&&"center"===h.labelAlign&&(a.x+=I*(x-m-f*(x-Math.min(w,m)))),w>m||h.autoRotation&&(b.styles||
{}).width)z=m;z&&(this.shortenLabel?this.shortenLabel():(u.width=z,(n.style||{}).textOverflow||(u.textOverflow="ellipsis"),b.css(u)))},getPosition:function(h,k,B,e){var d=this.axis,l=d.chart,v=e&&l.oldChartHeight||l.chartHeight;h={x:h?a.correctFloat(d.translate(k+B,null,null,e)+d.transB):d.left+d.offset+(d.opposite?(e&&l.oldChartWidth||l.chartWidth)-d.right-d.left:0),y:h?v-d.bottom+d.offset-(d.opposite?d.height:0):a.correctFloat(v-d.translate(k+B,null,null,e)-d.transB)};q(this,"afterGetPosition",
{pos:h});return h},getLabelPosition:function(a,h,k,e,d,l,v,b){var c=this.axis,f=c.transA,w=c.reversed,x=c.staggerLines,m=c.tickRotCorr||{x:0,y:0},I=d.y,z=e||c.reserveSpaceDefault?0:-c.labelOffset*("center"===c.labelAlign?.5:1),u={};F(I)||(I=0===c.side?k.rotation?-8:-k.getBBox().height:2===c.side?m.y+8:Math.cos(k.rotation*C)*(m.y-k.getBBox(!1,0).height/2));a=a+d.x+z+m.x-(l&&e?l*f*(w?-1:1):0);h=h+I-(l&&!e?l*f*(w?1:-1):0);x&&(k=v/(b||1)%x,c.opposite&&(k=x-k-1),h+=c.labelOffset/x*k);u.x=a;u.y=Math.round(h);
q(this,"afterGetLabelPosition",{pos:u});return u},getMarkPath:function(a,h,k,e,d,l){return l.crispLine(["M",a,h,"L",a+(d?0:-k),h+(d?k:0)],e)},renderGridLine:function(a,h,k){var e=this.axis,d=e.options,l=this.gridLine,v={},b=this.pos,c=this.type,f=t(this.tickmarkOffset,e.tickmarkOffset),w=e.chart.renderer,x=c?c+"Grid":"grid",m=d[x+"LineWidth"],I=d[x+"LineColor"],d=d[x+"LineDashStyle"];l||(v.stroke=I,v["stroke-width"]=m,d&&(v.dashstyle=d),c||(v.zIndex=1),a&&(h=0),this.gridLine=l=w.path().attr(v).addClass("highcharts-"+
(c?c+"-":"")+"grid-line").add(e.gridGroup));if(l&&(k=e.getPlotLinePath(b+f,l.strokeWidth()*k,a,"pass")))l[a||this.isNew?"attr":"animate"]({d:k,opacity:h})},renderMark:function(a,h,k){var e=this.axis,d=e.options,l=e.chart.renderer,v=this.type,b=v?v+"Tick":"tick",c=e.tickSize(b),f=this.mark,w=!f,x=a.x;a=a.y;var m=t(d[b+"Width"],!v&&e.isXAxis?1:0),d=d[b+"Color"];c&&(e.opposite&&(c[0]=-c[0]),w&&(this.mark=f=l.path().addClass("highcharts-"+(v?v+"-":"")+"tick").add(e.axisGroup),f.attr({stroke:d,"stroke-width":m})),
f[w?"attr":"animate"]({d:this.getMarkPath(x,a,c[0],f.strokeWidth()*k,e.horiz,l),opacity:h}))},renderLabel:function(a,h,B,e){var d=this.axis,l=d.horiz,v=d.options,b=this.label,c=v.labels,f=c.step,d=t(this.tickmarkOffset,d.tickmarkOffset),w=!0,x=a.x;a=a.y;b&&k(x)&&(b.xy=a=this.getLabelPosition(x,a,b,l,c,d,e,f),this.isFirst&&!this.isLast&&!t(v.showFirstLabel,1)||this.isLast&&!this.isFirst&&!t(v.showLastLabel,1)?w=!1:!l||c.step||c.rotation||h||0===B||this.handleOverflow(a),f&&e%f&&(w=!1),w&&k(a.y)?(a.opacity=
B,b[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(b.attr("y",-9999),this.isNewLabel=!0))},render:function(h,k,B){var e=this.axis,d=e.horiz,l=this.pos,v=t(this.tickmarkOffset,e.tickmarkOffset),l=this.getPosition(d,l,v,k),v=l.x,b=l.y,e=d&&v===e.pos+e.len||!d&&b===e.pos?-1:1;B=t(B,1);this.isActive=!0;this.renderGridLine(k,B,e);this.renderMark(l,B,e);this.renderLabel(l,k,B,h);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){G(this,this.axis)}}})(J);var fa=function(a){var E=
a.addEvent,F=a.animObject,G=a.arrayMax,q=a.arrayMin,k=a.color,h=a.correctFloat,t=a.defaultOptions,C=a.defined,n=a.deg2rad,A=a.destroyObjectProperties,B=a.each,e=a.extend,d=a.fireEvent,l=a.format,v=a.getMagnitude,b=a.grep,c=a.inArray,f=a.isArray,w=a.isNumber,x=a.isString,m=a.merge,I=a.normalizeTickInterval,z=a.objectEach,u=a.pick,r=a.removeEvent,K=a.splat,H=a.syncTimeout,p=a.Tick,D=function(){this.init.apply(this,arguments)};a.extend(D.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",
range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",
textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var g=b.isX,y=this;y.chart=a;y.horiz=a.inverted&&!y.isZAxis?!g:g;y.isXAxis=g;y.coll=y.coll||(g?"xAxis":"yAxis");d(this,"init",{userOptions:b});y.opposite=
b.opposite;y.side=b.side||(y.horiz?y.opposite?0:2:y.opposite?1:3);y.setOptions(b);var f=this.options,p=f.type;y.labelFormatter=f.labels.formatter||y.defaultLabelFormatter;y.userOptions=b;y.minPixelPadding=0;y.reversed=f.reversed;y.visible=!1!==f.visible;y.zoomEnabled=!1!==f.zoomEnabled;y.hasNames="category"===p||!0===f.categories;y.categories=f.categories||y.hasNames;y.names||(y.names=[],y.names.keys={});y.plotLinesAndBandsGroups={};y.isLog="logarithmic"===p;y.isDatetimeAxis="datetime"===p;y.positiveValuesOnly=
y.isLog&&!y.allowNegativeLog;y.isLinked=C(f.linkedTo);y.ticks={};y.labelEdge=[];y.minorTicks={};y.plotLinesAndBands=[];y.alternateBands={};y.len=0;y.minRange=y.userMinRange=f.minRange||f.maxZoom;y.range=f.range;y.offset=f.offset||0;y.stacks={};y.oldStacks={};y.stacksTouched=0;y.max=null;y.min=null;y.crosshair=u(f.crosshair,K(a.options.tooltip.crosshairs)[g?0:1],!1);b=y.options.events;-1===c(y,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,y):a.axes.push(y),a[y.coll].push(y));y.series=y.series||[];a.inverted&&
!y.isZAxis&&g&&void 0===y.reversed&&(y.reversed=!0);z(b,function(a,g){E(y,g,a)});y.lin2log=f.linearToLogConverter||y.lin2log;y.isLog&&(y.val2lin=y.log2lin,y.lin2val=y.lin2log);d(this,"afterInit")},setOptions:function(a){this.options=m(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],m(t[this.coll],a));d(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var g=
this.axis,b=this.value,c=g.chart.time,f=g.categories,d=this.dateTimeLabelFormat,p=t.lang,r=p.numericSymbols,p=p.numericSymbolMagnitude||1E3,e=r&&r.length,D,w=g.options.labels.format,g=g.isLog?Math.abs(b):g.tickInterval;if(w)D=l(w,this,c);else if(f)D=b;else if(d)D=c.dateFormat(d,b);else if(e&&1E3<=g)for(;e--&&void 0===D;)c=Math.pow(p,e+1),g>=c&&0===10*b%c&&null!==r[e]&&0!==b&&(D=a.numberFormat(b/c,-1)+r[e]);void 0===D&&(D=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return D},
getSeriesExtremes:function(){var a=this,y=a.chart;d(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();B(a.series,function(g){if(g.visible||!y.options.chart.ignoreHiddenSeries){var c=g.options,f=c.threshold,d;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=f&&(f=null);if(a.isXAxis)c=g.xData,c.length&&(g=q(c),d=G(c),w(g)||g instanceof Date||(c=b(c,w),g=q(c),d=G(c)),c.length&&(a.dataMin=Math.min(u(a.dataMin,
c[0],g),g),a.dataMax=Math.max(u(a.dataMax,c[0],d),d)));else if(g.getExtremes(),d=g.dataMax,g=g.dataMin,C(g)&&C(d)&&(a.dataMin=Math.min(u(a.dataMin,g),g),a.dataMax=Math.max(u(a.dataMax,d),d)),C(f)&&(a.threshold=f),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});d(this,"afterGetSeriesExtremes")},translate:function(a,b,c,f,d,p){var g=this.linkedParent||this,y=1,r=0,e=f?g.oldTransA:g.transA;f=f?g.oldMin:g.min;var D=g.minPixelPadding;d=(g.isOrdinal||g.isBroken||g.isLog&&d)&&g.lin2val;e||
(e=g.transA);c&&(y*=-1,r=g.len);g.reversed&&(y*=-1,r-=y*(g.sector||g.len));b?(a=(a*y+r-D)/e+f,d&&(a=g.lin2val(a))):(d&&(a=g.val2lin(a)),a=w(f)?y*(a-f)*e+r+y*D+(w(p)?e*p:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,f,d){var g=this.chart,y=this.left,p=this.top,r,e,D=c&&g.oldChartHeight||g.chartHeight,L=c&&g.oldChartWidth||
g.chartWidth,m;r=this.transB;var v=function(a,g,b){if("pass"!==f&&a<g||a>b)f?a=Math.min(Math.max(g,a),b):m=!0;return a};d=u(d,this.translate(a,null,null,c));d=Math.min(Math.max(-1E5,d),1E5);a=c=Math.round(d+r);r=e=Math.round(D-d-r);w(d)?this.horiz?(r=p,e=D-this.bottom,a=c=v(a,y,y+this.width)):(a=y,c=L-this.right,r=e=v(r,p,p+this.height)):(m=!0,f=!1);return m&&!f?null:g.renderer.crispLine(["M",a,r,"L",c,e],b||1)},getLinearTickPositions:function(a,b,c){var g,y=h(Math.floor(b/a)*a);c=h(Math.ceil(c/a)*
a);var f=[],d;h(y+a)===y&&(d=20);if(this.single)return[b];for(b=y;b<=c;){f.push(b);b=h(b+a,d);if(b===g)break;g=b}return f},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?u(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,f=a.minorTickInterval,d=[],p=a.pointRangePadding||0,r=a.min-p,p=a.max+p,e=p-r;if(e&&e/f<a.len/3)if(a.isLog)B(this.paddedTicks,function(g,b,y){b&&d.push.apply(d,
a.getLogTickPositions(f,y[b-1],y[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())d=d.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f),r,p,b.startOfWeek));else for(b=r+(c[0]-r)%f;b<=p&&b!==d[0];b+=f)d.push(b);0!==d.length&&a.trimTicks(d);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,f,d,p,r,e,D,w,m;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(C(a.min)||C(a.max)?this.minRange=null:(B(this.series,function(a){D=a.xData;for(r=w=a.xIncrement?
1:D.length-1;0<r;r--)if(e=D[r]-D[r-1],void 0===p||e<p)p=e}),this.minRange=Math.min(5*p,this.dataMax-this.dataMin)));c-b<this.minRange&&(d=this.dataMax-this.dataMin>=this.minRange,m=this.minRange,f=(m-c+b)/2,f=[b-f,u(a.min,b-f)],d&&(f[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(f),c=[b+m,u(a.max,b+m)],d&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=q(c),c-b<m&&(f[0]=c-m,f[1]=u(a.min,c-m),b=G(f)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:B(this.series,
function(g){var b=g.closestPointRange,y=g.visible||!g.chart.options.chart.ignoreHiddenSeries;!g.noSharedTooltip&&C(b)&&y&&(a=C(a)?Math.min(a,b):b)});return a},nameToX:function(a){var g=f(this.categories),b=g?this.categories:this.names,d=a.options.x,p;a.series.requireSorting=!1;C(d)||(d=!1===this.options.uniqueNames?a.series.autoIncrement():g?c(a.name,b):u(b.keys[a.name],-1));-1===d?g||(p=b.length):p=d;void 0!==p&&(this.names[p]=a.name,this.names.keys[a.name]=p);return p},updateNames:function(){var g=
this,b=this.names;0<b.length&&(B(a.keys(b.keys),function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,B(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();B(a.points,function(b,y){var c;b.options&&(c=g.nameToX(b),void 0!==c&&c!==b.x&&(b.x=c,a.xData[y]=c))})}))},setAxisTranslation:function(a){var g=this,b=g.max-g.min,c=g.axisPointRange||0,f,p=0,r=0,e=g.linkedParent,D=!!g.categories,w=g.transA,m=g.isXAxis;if(m||D||c)f=g.getClosest(),
e?(p=e.minPointOffset,r=e.pointRangePadding):B(g.series,function(a){var b=D?1:m?u(a.options.pointRange,f,0):g.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,b);g.single||(p=Math.max(p,x(a)?0:b/2),r=Math.max(r,"on"===a?0:b))}),e=g.ordinalSlope&&f?g.ordinalSlope/f:1,g.minPointOffset=p*=e,g.pointRangePadding=r*=e,g.pointRange=Math.min(c,b),m&&(g.closestPointRange=f);a&&(g.oldTransA=w);g.translationSlope=g.transA=w=g.staticScale||g.len/(b+r||1);g.transB=g.horiz?g.left:g.bottom;g.minPixelPadding=
w*p;d(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(g){var b=this,c=b.chart,f=b.options,p=b.isLog,r=b.isDatetimeAxis,e=b.isXAxis,D=b.isLinked,m=f.maxPadding,l=f.minPadding,x=f.tickInterval,z=f.tickPixelInterval,H=b.categories,K=w(b.threshold)?b.threshold:null,k=b.softThreshold,n,t,A,q;r||H||D||this.getTickAmount();A=u(b.userMin,f.min);q=u(b.userMax,f.max);D?(b.linkedParent=c[b.coll][f.linkedTo],c=b.linkedParent.getExtremes(),b.min=u(c.min,
c.dataMin),b.max=u(c.max,c.dataMax),f.type!==b.linkedParent.options.type&&a.error(11,1)):(!k&&C(K)&&(b.dataMin>=K?(n=K,l=0):b.dataMax<=K&&(t=K,m=0)),b.min=u(A,n,b.dataMin),b.max=u(q,t,b.dataMax));p&&(b.positiveValuesOnly&&!g&&0>=Math.min(b.min,u(b.dataMin,b.min))&&a.error(10,1),b.min=h(b.log2lin(b.min),15),b.max=h(b.log2lin(b.max),15));b.range&&C(b.max)&&(b.userMin=b.min=A=Math.max(b.dataMin,b.minFromRange()),b.userMax=q=b.max,b.range=null);d(b,"foundExtremes");b.beforePadding&&b.beforePadding();
b.adjustForMinRange();!(H||b.axisPointRange||b.usePercentage||D)&&C(b.min)&&C(b.max)&&(c=b.max-b.min)&&(!C(A)&&l&&(b.min-=c*l),!C(q)&&m&&(b.max+=c*m));w(f.softMin)&&!w(b.userMin)&&(b.min=Math.min(b.min,f.softMin));w(f.softMax)&&!w(b.userMax)&&(b.max=Math.max(b.max,f.softMax));w(f.floor)&&(b.min=Math.max(b.min,f.floor));w(f.ceiling)&&(b.max=Math.min(b.max,f.ceiling));k&&C(b.dataMin)&&(K=K||0,!C(A)&&b.min<K&&b.dataMin>=K?b.min=K:!C(q)&&b.max>K&&b.dataMax<=K&&(b.max=K));b.tickInterval=b.min===b.max||
void 0===b.min||void 0===b.max?1:D&&!x&&z===b.linkedParent.options.tickPixelInterval?x=b.linkedParent.tickInterval:u(x,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,H?1:(b.max-b.min)*z/Math.max(b.len,z));e&&!g&&B(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!x&&(b.tickInterval=
Math.max(b.pointRange,b.tickInterval));g=u(f.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!x&&b.tickInterval<g&&(b.tickInterval=g);r||p||x||(b.tickInterval=I(b.tickInterval,null,v(b.tickInterval),u(f.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var b=this.options,c,f=b.tickPositions;c=this.getMinorTickInterval();var p=b.tickPositioner,r=
b.startOnTick,e=b.endOnTick;this.tickmarkOffset=this.categories&&"between"===b.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===c&&this.tickInterval?this.tickInterval/5:c;this.single=this.min===this.max&&C(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==b.allowDecimals);this.tickPositions=c=f&&f.slice();!c&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(c=[this.min,this.max],a.error(19)):c=this.isDatetimeAxis?
this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,b.units),this.min,this.max,b.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()],c[0]===c[1]&&(c.length=1)),this.tickPositions=c,p&&(p=p.apply(this,[this.min,this.max])))&&(this.tickPositions=c=p);this.paddedTicks=c.slice(0);this.trimTicks(c,r,e);this.isLinked||
(this.single&&2>c.length&&(this.min-=.5,this.max+=.5),f||p||this.adjustTickAmount());d(this,"afterSetTickPositions")},trimTicks:function(a,b,c){var g=a[0],f=a[a.length-1],d=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-d>a[0];)a.shift();if(c)this.max=f;else for(;this.max+d<a[a.length-1];)a.pop();0===a.length&&C(g)&&!this.options.tickPositions&&a.push((f+g)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||
!1===c.alignTicks||!1===c.startOnTick||!1===c.endOnTick||this.isLog||B(this.chart[this.coll],function(g){var c=g.options,c=[g.horiz?c.left:c.top,c.width,c.height,c.pane].join();g.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!C(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=
b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,f=this.finalTickAmt,d=b&&b.length,p=u(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(d<c){for(;b.length<c;)b.length%2||this.min===p?b.push(h(b[b.length-1]+a)):b.unshift(h(b[0]-a));this.transA*=(d-1)/(c-1);this.min=b[0];this.max=b[b.length-1]}else d>c&&(this.tickInterval*=2,this.setTickPositions());if(C(f)){for(a=c=b.length;a--;)(3===f&&1===a%2||2>=f&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=
void 0}}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;B(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=
this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();d(this,"afterSetScale")},setExtremes:function(a,b,c,f,p){var g=this,r=g.chart;c=u(c,!0);B(g.series,function(a){delete a.kdTree});p=e(p,{min:a,max:b});d(g,"setExtremes",p,function(){g.userMin=a;g.userMax=b;g.eventArgs=p;c&&r.redraw(f)})},zoom:function(a,b){var g=this.dataMin,c=this.dataMax,f=this.options,d=Math.min(g,u(f.min,g)),f=Math.max(c,u(f.max,c));if(a!==this.min||
b!==this.max)this.allowZoomOutside||(C(g)&&(a<d&&(a=d),a>f&&(a=f)),C(c)&&(b<d&&(b=d),b>f&&(b=f))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,f=c.offsets||[0,0,0,0],d=this.horiz,p=this.width=Math.round(a.relativeLength(u(c.width,b.plotWidth-f[3]+f[1]),b.plotWidth)),r=this.height=Math.round(a.relativeLength(u(c.height,b.plotHeight-f[0]+f[2]),b.plotHeight)),e=this.top=Math.round(a.relativeLength(u(c.top,
b.plotTop+f[0]),b.plotHeight,b.plotTop)),c=this.left=Math.round(a.relativeLength(u(c.left,b.plotLeft+f[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-r-e;this.right=b.chartWidth-p-c;this.len=Math.max(d?p:r,0);this.pos=d?c:e},getExtremes:function(){var a=this.isLog;return{min:a?h(this.lin2log(this.min)):this.min,max:a?h(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=b?this.lin2log(this.min):
this.min,b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=g:Infinity===a?a=b:g>a?a=g:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(u(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,g=b[a+"Length"],c=u(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,f=c,d=this.len/(((this.categories?1:0)+this.max-this.min)/c),p,r=a.rotation,e=this.labelMetrics(),D,m=Number.MAX_VALUE,w,v=function(a){a/=d||1;a=1<a?Math.ceil(a):1;return h(a*c)};b?(w=!a.staggerLines&&!a.step&&(C(r)?[r]:d<u(a.autoRotationLimit,80)&&a.autoRotation))&&B(w,function(a){var b;if(a===r||a&&-90<=a&&90>=a)D=v(Math.abs(e.h/Math.sin(n*a))),b=
D+Math.abs(a/360),b<m&&(m=b,p=a,f=D)}):a.step||(f=v(e.h));this.autoRotation=w;this.labelRotation=u(p,r);return f},getSlotWidth:function(a){var b=this.chart,g=this.horiz,c=this.options.labels,f=Math.max(this.tickPositions.length-(this.categories?0:1),1),d=b.margin[3];return a&&a.slotWidth||g&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/f||!g&&(c.style&&parseInt(c.style.width,10)||d&&d-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,
f=this.ticks,d=this.options.labels,p=d&&d.style||{},r=this.horiz,e=this.getSlotWidth(),D=Math.max(1,Math.round(e-2*(d.padding||5))),w={},m=this.labelMetrics(),v=d.style&&d.style.textOverflow,l,z,H=0,u;x(d.rotation)||(w.rotation=d.rotation||0);B(c,function(a){(a=f[a])&&a.label&&a.label.textPxLength>H&&(H=a.label.textPxLength)});this.maxLabelLength=H;if(this.autoRotation)H>D&&H>m.h?w.rotation=this.labelRotation:this.labelRotation=0;else if(e&&(l=D,!v))for(z="clip",D=c.length;!r&&D--;)if(u=c[D],u=f[u].label)u.styles&&
"ellipsis"===u.styles.textOverflow?u.css({textOverflow:"clip"}):u.textPxLength>e&&u.css({width:e+"px"}),u.getBBox().height>this.len/c.length-(m.h-m.f)&&(u.specificTextOverflow="ellipsis");w.rotation&&(l=H>.5*a.chartHeight?.33*a.chartHeight:H,v||(z="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))w.align=this.labelAlign;B(c,function(a){var b=(a=f[a])&&a.label,g=p.width,c={};b&&(b.attr(w),a.shortenLabel?a.shortenLabel():l&&!g&&"nowrap"!==p.whiteSpace&&(l<b.textPxLength||
"SPAN"===b.element.tagName)?(c.width=l,v||(c.textOverflow=b.specificTextOverflow||z),b.css(c)):b.styles&&b.styles.width&&!c.width&&!g&&b.css({width:null}),delete b.specificTextOverflow,a.rotation=w.rotation)},this);this.tickRotCorr=b.rotCorr(m.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||C(this.min)&&C(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,g=this.horiz,c=this.opposite,f=this.options.title,
d;this.axisTitle||((d=f.textAlign)||(d=(g?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[f.align]),this.axisTitle=b.text(f.text,0,0,f.useHTML).attr({zIndex:7,rotation:f.rotation||0,align:d}).addClass("highcharts-axis-title").css(m(f.style)).add(this.axisGroup),this.axisTitle.isNew=!0);f.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():
b[a]=new p(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,f=a.options,p=a.tickPositions,r=a.ticks,e=a.horiz,D=a.side,w=b.inverted&&!a.isZAxis?[1,0,3,2][D]:D,m,v,l=0,x,H=0,K=f.title,h=f.labels,k=0,I=b.axisOffset,b=b.clipOffset,n=[-1,1,1,-1][D],t=f.className,A=a.axisParent;m=a.hasData();a.showAxis=v=m||u(f.showEmpty,!0);a.staggerLines=a.horiz&&h.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+
(t||"")).add(A),a.axisGroup=c.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(A),a.labelGroup=c.g("axis-labels").attr({zIndex:h.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(t||"")).add(A));m||a.isLinked?(B(p,function(b,g){a.generateTick(b,g)}),a.renderUnsquish(),a.reserveSpaceDefault=0===D||2===D||{1:"left",3:"right"}[D]===a.labelAlign,u(h.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&B(p,function(a){k=
Math.max(r[a].getLabelSize(),k)}),a.staggerLines&&(k*=a.staggerLines),a.labelOffset=k*(a.opposite?-1:1)):z(r,function(a,b){a.destroy();delete r[b]});K&&K.text&&!1!==K.enabled&&(a.addTitle(v),v&&!1!==K.reserveSpace&&(a.titleOffset=l=a.axisTitle.getBBox()[e?"height":"width"],x=K.offset,H=C(x)?0:u(K.margin,e?5:10)));a.renderLine();a.offset=n*u(f.offset,I[D]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===D?-a.labelMetrics().h:2===D?a.tickRotCorr.y:0;H=Math.abs(k)+H;k&&(H=H-c+n*(e?u(h.y,a.tickRotCorr.y+
8*n):h.x));a.axisTitleMargin=u(x,H);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(r,p));e=this.tickSize("tick");I[D]=Math.max(I[D],a.axisTitleMargin+l+n*a.offset,H,m&&p.length&&e?e[0]+n*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[w]=Math.max(b[w],f);d(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,g=this.opposite,c=this.offset,f=this.horiz,d=this.left+(g?this.width:0)+c,c=b.chartHeight-this.bottom-(g?this.height:0)+c;g&&(a*=-1);return b.renderer.crispLine(["M",
f?this.left:d,f?c:this.top,"L",f?b.chartWidth-this.right:d,f?c:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,f=this.len,d=this.options.title,p=a?b:c,r=this.opposite,e=this.offset,D=d.x||0,w=d.y||0,m=this.axisTitle,v=
this.chart.renderer.fontMetrics(d.style&&d.style.fontSize,m),m=Math.max(m.getBBox(null,0).height-v.h-1,0),f={low:p+(a?0:f),middle:p+f/2,high:p+(a?f:0)}[d.align],b=(a?c+this.height:b)+(a?1:-1)*(r?-1:1)*this.axisTitleMargin+[-m,m,v.f,-m][this.side];return{x:a?f+D:b+(r?this.width:0)+e+D,y:a?b+w-(r?this.height:0)+e:f+w}},renderMinorTick:function(a){var b=this.chart.hasRendered&&w(this.oldMin),g=this.minorTicks;g[a]||(g[a]=new p(this,a,"minor"));b&&g[a].isNew&&g[a].render(null,!0);g[a].render(null,!1,
1)},renderTick:function(a,b){var g=this.isLinked,c=this.ticks,f=this.chart.hasRendered&&w(this.oldMin);if(!g||a>=this.min&&a<=this.max)c[a]||(c[a]=new p(this,a)),f&&c[a].isNew&&c[a].render(b,!0,-1),c[a].render(b)},render:function(){var b=this,c=b.chart,f=b.options,r=b.isLog,e=b.isLinked,D=b.tickPositions,m=b.axisTitle,v=b.ticks,l=b.minorTicks,x=b.alternateBands,u=f.stackLabels,K=f.alternateGridColor,h=b.tickmarkOffset,k=b.axisLine,I=b.showAxis,n=F(c.renderer.globalAnimation),t,A;b.labelEdge.length=
0;b.overlap=!1;B([v,l,x],function(a){z(a,function(a){a.isActive=!1})});if(b.hasData()||e)b.minorTickInterval&&!b.categories&&B(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),D.length&&(B(D,function(a,g){b.renderTick(a,g)}),h&&(0===b.min||b.single)&&(v[-1]||(v[-1]=new p(b,-1,null,!0)),v[-1].render(-1))),K&&B(D,function(g,f){A=void 0!==D[f+1]?D[f+1]+h:b.max-h;0===f%2&&g<b.max&&A<=b.max+(c.polar?-h:h)&&(x[g]||(x[g]=new a.PlotLineOrBand(b)),t=g+h,x[g].options={from:r?b.lin2log(t):t,to:r?
b.lin2log(A):A,color:K},x[g].render(),x[g].isActive=!0)}),b._addedPlotLB||(B((f.plotLines||[]).concat(f.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);B([v,l,x],function(a){var b,g=[],f=n.duration;z(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,g.push(b))});H(function(){for(b=g.length;b--;)a[g[b]]&&!a[g[b]].isActive&&(a[g[b]].destroy(),delete a[g[b]])},a!==x&&c.hasRendered&&f?f:0)});k&&(k[k.isPlaced?"animate":"attr"]({d:this.getLinePath(k.strokeWidth())}),k.isPlaced=
!0,k[I?"show":"hide"](!0));m&&I&&(f=b.getTitlePosition(),w(f.y)?(m[m.isNew?"attr":"animate"](f),m.isNew=!1):(m.attr("y",-9999),m.isNew=!0));u&&u.enabled&&b.renderStackTotals();b.isDirty=!1;d(this,"afterRender")},redraw:function(){this.visible&&(this.render(),B(this.plotLinesAndBands,function(a){a.render()}));B(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,g=b.stacks,f=b.plotLinesAndBands,p;d(this,"destroy",
{keepEvents:a});a||r(b);z(g,function(a,b){A(a);g[b]=null});B([b.ticks,b.minorTicks,b.alternateBands],function(a){A(a)});if(f)for(a=f.length;a--;)f[a].destroy();B("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(p in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[p]=b.plotLinesAndBandsGroups[p].destroy();z(b,function(a,g){-1===c(g,b.keepProps)&&delete b[g]})},drawCrosshair:function(a,b){var g,c=this.crosshair,
f=u(c.snap,!0),p,r=this.cross;d(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(C(b)||!f)){f?C(b)&&(p=u(b.crosshairPos,this.isXAxis?b.plotX:this.len-b.plotY)):p=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);C(p)&&(g=this.getPlotLinePath(b&&(this.isXAxis?b.x:u(b.stackY,b.y)),null,null,null,p)||null);if(!C(g)){this.hideCrosshair();return}f=this.categories&&!this.isRadial;r||(this.cross=r=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(f?"category ":"thin ")+c.className).attr({zIndex:u(c.zIndex,2)}).add(),r.attr({stroke:c.color||(f?k("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":u(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&r.attr({dashstyle:c.dashStyle}));r.show().attr({d:g});f&&!c.width&&r.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();d(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=D}(J);(function(a){var E=
a.Axis,F=a.getMagnitude,G=a.normalizeTickInterval,q=a.timeUnits;E.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};E.prototype.normalizeTimeTickInterval=function(a,h){var k=h||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];h=k[k.length-1];var C=q[h[0]],n=h[1],A;for(A=0;A<k.length&&!(h=k[A],C=q[h[0]],
n=h[1],k[A+1]&&a<=(C*n[n.length-1]+q[k[A+1][0]])/2);A++);C===q.year&&a<5*C&&(n=[1,2,5]);a=G(a/C,n,"year"===h[0]?Math.max(F(a/C),1):1);return{unitRange:C,count:a,unitName:h[0]}}})(J);(function(a){var E=a.Axis,F=a.getMagnitude,G=a.map,q=a.normalizeTickInterval,k=a.pick;E.prototype.getLogTickPositions=function(a,t,C,n){var h=this.options,B=this.len,e=[];n||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),e=this.getLinearTickPositions(a,t,C);else if(.08<=a)for(var B=Math.floor(t),d,l,v,b,c,h=.3<
a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];B<C+1&&!c;B++)for(l=h.length,d=0;d<l&&!c;d++)v=this.log2lin(this.lin2log(B)*h[d]),v>t&&(!n||b<=C)&&void 0!==b&&e.push(b),b>C&&(c=!0),b=v;else t=this.lin2log(t),C=this.lin2log(C),a=n?this.getMinorTickInterval():h.tickInterval,a=k("auto"===a?null:a,this._minorAutoInterval,h.tickPixelInterval/(n?5:1)*(C-t)/((n?B/this.tickPositions.length:B)||1)),a=q(a,null,F(a)),e=G(this.getLinearTickPositions(a,t,C),this.log2lin),n||(this._minorAutoInterval=a/5);n||(this.tickInterval=
a);return e};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}})(J);(function(a,E){var F=a.arrayMax,G=a.arrayMin,q=a.defined,k=a.destroyObjectProperties,h=a.each,t=a.erase,C=a.merge,n=a.pick;a.PlotLineOrBand=function(a,h){this.axis=a;h&&(this.options=h,this.id=h.id)};a.PlotLineOrBand.prototype={render:function(){a.fireEvent(this,"render");var h=this,k=h.axis,e=k.horiz,d=h.options,l=d.label,v=h.label,b=d.to,c=d.from,f=d.value,w=q(c)&&
q(b),x=q(f),m=h.svgElem,I=!m,z=[],u=d.color,r=n(d.zIndex,0),K=d.events,z={"class":"highcharts-plot-"+(w?"band ":"line ")+(d.className||"")},H={},p=k.chart.renderer,D=w?"bands":"lines";k.isLog&&(c=k.log2lin(c),b=k.log2lin(b),f=k.log2lin(f));x?(z.stroke=u,z["stroke-width"]=d.width,d.dashStyle&&(z.dashstyle=d.dashStyle)):w&&(u&&(z.fill=u),d.borderWidth&&(z.stroke=d.borderColor,z["stroke-width"]=d.borderWidth));H.zIndex=r;D+="-"+r;(u=k.plotLinesAndBandsGroups[D])||(k.plotLinesAndBandsGroups[D]=u=p.g("plot-"+
D).attr(H).add());I&&(h.svgElem=m=p.path().attr(z).add(u));if(x)z=k.getPlotLinePath(f,m.strokeWidth());else if(w)z=k.getPlotBandPath(c,b,d);else return;I&&z&&z.length?(m.attr({d:z}),K&&a.objectEach(K,function(a,b){m.on(b,function(a){K[b].apply(h,[a])})})):m&&(z?(m.show(),m.animate({d:z})):(m.hide(),v&&(h.label=v=v.destroy())));l&&q(l.text)&&z&&z.length&&0<k.width&&0<k.height&&!z.isFlat?(l=C({align:e&&w&&"center",x:e?!w&&4:10,verticalAlign:!e&&w&&"middle",y:e?w?16:10:w?6:-4,rotation:e&&!w&&90},l),
this.renderLabel(l,z,w,r)):v&&v.hide();return h},renderLabel:function(a,h,e,d){var l=this.label,v=this.axis.chart.renderer;l||(l={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(e?"band":"line")+"-label "+(a.className||"")},l.zIndex=d,this.label=l=v.text(a.text,0,0,a.useHTML).attr(l).add(),l.css(a.style));d=h.xBounds||[h[1],h[4],e?h[6]:h[1]];h=h.yBounds||[h[2],h[5],e?h[7]:h[2]];e=G(d);v=G(h);l.align(a,!1,{x:e,y:v,width:F(d)-e,height:F(h)-v});l.show()},destroy:function(){t(this.axis.plotLinesAndBands,
this);delete this.axis;k(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,h){var e=this.getPlotLinePath(h,null,null,!0),d=this.getPlotLinePath(a,null,null,!0),l=[],v=this.horiz,b=1,c;a=a<this.min&&h<this.min||a>this.max&&h>this.max;if(d&&e)for(a&&(c=d.toString()===e.toString(),b=0),a=0;a<d.length;a+=6)v&&e[a+1]===d[a+1]?(e[a+1]+=b,e[a+4]+=b):v||e[a+2]!==d[a+2]||(e[a+2]+=b,e[a+5]+=b),l.push("M",d[a+1],d[a+2],"L",d[a+4],d[a+5],e[a+4],e[a+5],e[a+1],e[a+2],"z"),l.isFlat=c;return l},addPlotBand:function(a){return this.addPlotBandOrLine(a,
"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(h,k){var e=(new a.PlotLineOrBand(this,h)).render(),d=this.userOptions;e&&(k&&(d[k]=d[k]||[],d[k].push(h)),this.plotLinesAndBands.push(e));return e},removePlotBandOrLine:function(a){for(var k=this.plotLinesAndBands,e=this.options,d=this.userOptions,l=k.length;l--;)k[l].id===a&&k[l].destroy();h([e.plotLines||[],d.plotLines||[],e.plotBands||[],d.plotBands||[]],function(d){for(l=d.length;l--;)d[l].id===
a&&t(d,d[l])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(J,fa);(function(a){var E=a.doc,F=a.each,G=a.extend,q=a.format,k=a.isNumber,h=a.map,t=a.merge,C=a.pick,n=a.splat,A=a.syncTimeout,B=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||
this.split;this.outside=d.outside&&!this.split},cleanSplit:function(a){F(this.chart.series,function(d){var e=d&&d.tt;e&&(!e.isActive||a?d.tt=e.destroy():e.isActive=!1)})},getLabel:function(){var e=this.chart.renderer,d=this.options,l;this.label||(this.outside&&(this.container=l=a.doc.createElement("div"),l.className="highcharts-tooltip-container",a.css(l,{position:"absolute",top:"1px",pointerEvents:d.style&&d.style.pointerEvents}),a.doc.body.appendChild(l),this.renderer=e=new a.Renderer(l,0,0)),this.split?
this.label=e.g("tooltip"):(this.label=e.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.outside&&(this.label.attr({x:this.distance,y:this.distance}),this.label.xSetter=function(a){l.style.left=a+"px"},this.label.ySetter=function(a){l.style.top=a+"px"}),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();
t(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,t(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),a.discardElement(this.container));a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(e,d,l,v){var b=this,c=b.now,f=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(e-c.x)||1<Math.abs(d-
c.y)),w=b.followPointer||1<b.len;G(c,{x:f?(2*c.x+e)/3:e,y:f?(c.y+d)/2:d,anchorX:w?void 0:f?(2*c.anchorX+l)/3:l,anchorY:w?void 0:f?(c.anchorY+v)/2:v});b.getLabel().attr(c);f&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(e,d,l,v)},32))},hide:function(e){var d=this;a.clearTimeout(this.hideTimer);e=C(e,this.options.hideDelay,500);this.isHidden||(this.hideTimer=A(function(){d.getLabel()[e?"fadeOut":"hide"]();d.isHidden=!0},e))},getAnchor:function(a,d){var e=
this.chart,v=e.pointer,b=e.inverted,c=e.plotTop,f=e.plotLeft,w=0,x=0,m,k;a=n(a);this.followPointer&&d?(void 0===d.chartX&&(d=v.normalize(d)),a=[d.chartX-e.plotLeft,d.chartY-c]):a[0].tooltipPos?a=a[0].tooltipPos:(F(a,function(a){m=a.series.yAxis;k=a.series.xAxis;w+=a.plotX+(!b&&k?k.left-f:0);x+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!b&&m?m.top-c:0)}),w/=a.length,x/=a.length,a=[b?e.plotWidth-x:w,this.shared&&!b&&1<a.length&&d?d.chartY-c:b?e.plotHeight-w:x]);return h(a,Math.round)},getPosition:function(a,
d,l){var e=this.chart,b=this.distance,c={},f=e.inverted&&l.h||0,w,x=this.outside,m=x?E.documentElement.clientWidth-2*b:e.chartWidth,h=x?Math.max(E.body.scrollHeight,E.documentElement.scrollHeight,E.body.offsetHeight,E.documentElement.offsetHeight,E.documentElement.clientHeight):e.chartHeight,z=e.pointer.chartPosition,u=["y",h,d,(x?z.top-b:0)+l.plotY+e.plotTop,x?0:e.plotTop,x?h:e.plotTop+e.plotHeight],r=["x",m,a,(x?z.left-b:0)+l.plotX+e.plotLeft,x?0:e.plotLeft,x?m:e.plotLeft+e.plotWidth],K=!this.followPointer&&
C(l.ttBelow,!e.inverted===!!l.negative),H=function(a,g,d,p,r,e){var D=d<p-b,m=p+b+d<g,w=p-b-d;p+=b;if(K&&m)c[a]=p;else if(!K&&D)c[a]=w;else if(D)c[a]=Math.min(e-d,0>w-f?w:w-f);else if(m)c[a]=Math.max(r,p+f+d>g?p:p+f);else return!1},p=function(a,g,f,d){var p;d<b||d>g-b?p=!1:c[a]=d<f/2?1:d>g-f/2?g-f-2:d-f/2;return p},D=function(a){var b=u;u=r;r=b;w=a},g=function(){!1!==H.apply(0,u)?!1!==p.apply(0,r)||w||(D(!0),g()):w?c.x=c.y=0:(D(!0),g())};(e.inverted||1<this.len)&&D();g();return c},defaultFormatter:function(a){var d=
this.points||n(this),e;e=[a.tooltipFooterHeaderFormatter(d[0])];e=e.concat(a.bodyFormatter(d));e.push(a.tooltipFooterHeaderFormatter(d[0],!0));return e},refresh:function(e,d){var l,v=this.options,b,c=e,f,w={},x=[];l=v.formatter||this.defaultFormatter;var w=this.shared,m;v.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=n(c)[0].series.tooltipOptions.followPointer,f=this.getAnchor(c,d),d=f[0],b=f[1],!w||c.series&&c.series.noSharedTooltip?w=c.getLabelConfig():(F(c,function(a){a.setState("hover");
x.push(a.getLabelConfig())}),w={x:c[0].category,y:c[0].y},w.points=x,c=c[0]),this.len=x.length,w=l.call(w,this),m=c.series,this.distance=C(m.tooltipOptions.distance,16),!1===w?this.hide():(l=this.getLabel(),this.isHidden&&l.attr({opacity:1}).show(),this.split?this.renderSplit(w,n(e)):(v.style.width||l.css({width:this.chart.spacingBox.width}),l.attr({text:w&&w.join?w.join(""):w}),l.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+C(c.colorIndex,m.colorIndex)),l.attr({stroke:v.borderColor||
c.color||m.color||"#666666"}),this.updatePosition({plotX:d,plotY:b,negative:c.negative,ttBelow:c.ttBelow,h:f[2]||0})),this.isHidden=!1))},renderSplit:function(e,d){var l=this,v=[],b=this.chart,c=b.renderer,f=!0,w=this.options,x=0,m,h=this.getLabel(),z=b.plotTop;a.isString(e)&&(e=[!1,e]);F(e.slice(0,d.length+1),function(a,r){if(!1!==a){r=d[r-1]||{isHeader:!0,plotX:d[0].plotX};var e=r.series||l,H=e.tt,p=r.series||{},D="highcharts-color-"+C(r.colorIndex,p.colorIndex,"none");H||(e.tt=H=c.label(null,null,
null,"callout",null,null,w.useHTML).addClass("highcharts-tooltip-box "+D+(r.isHeader?" highcharts-tooltip-header":"")).attr({padding:w.padding,r:w.borderRadius,fill:w.backgroundColor,stroke:w.borderColor||r.color||p.color||"#333333","stroke-width":w.borderWidth}).add(h));H.isActive=!0;H.attr({text:a});H.css(w.style).shadow(w.shadow);a=H.getBBox();p=a.width+H.strokeWidth();r.isHeader?(x=a.height,b.xAxis[0].opposite&&(m=!0,z-=x),p=Math.max(0,Math.min(r.plotX+b.plotLeft-p/2,b.chartWidth+(b.scrollablePixels?
b.scrollablePixels-b.marginRight:0)-p))):p=r.plotX+b.plotLeft-C(w.distance,16)-p;0>p&&(f=!1);a=(r.series&&r.series.yAxis&&r.series.yAxis.pos)+(r.plotY||0);a-=z;r.isHeader&&(a=m?-x:b.plotHeight+x);v.push({target:a,rank:r.isHeader?1:0,size:e.tt.getBBox().height+1,point:r,x:p,tt:H})}});this.cleanSplit();a.distribute(v,b.plotHeight+x);F(v,function(a){var c=a.point,d=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:f||c.isHeader?a.x:c.plotX+b.plotLeft+C(w.distance,16),y:a.pos+z,anchorX:c.isHeader?
c.plotX+b.plotLeft:c.plotX+d.xAxis.pos,anchorY:c.isHeader?b.plotTop+b.plotHeight/2:c.plotY+d.yAxis.pos})})},updatePosition:function(a){var d=this.chart,e=this.getLabel(),v=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a),b=a.plotX+d.plotLeft;a=a.plotY+d.plotTop;var c;this.outside&&(c=(this.options.borderWidth||0)+2*this.distance,this.renderer.setSize(e.width+c,e.height+c,!1),b+=d.pointer.chartPosition.left-v.x,a+=d.pointer.chartPosition.top-v.y);this.move(Math.round(v.x),
Math.round(v.y||0),b,a)},getDateFormat:function(a,d,l,v){var b=this.chart.time,c=b.dateFormat("%m-%d %H:%M:%S.%L",d),f,e,x={millisecond:15,second:12,minute:9,hour:6,day:3},m="millisecond";for(e in B){if(a===B.week&&+b.dateFormat("%w",d)===l&&"00:00:00.000"===c.substr(6)){e="week";break}if(B[e]>a){e=m;break}if(x[e]&&c.substr(x[e])!=="01-01 00:00:00.000".substr(x[e]))break;"week"!==e&&(m=e)}e&&(f=b.resolveDTLFormat(v[e]).main);return f},getXDateFormat:function(a,d,l){d=d.dateTimeLabelFormats;var e=
l&&l.closestPointRange;return(e?this.getDateFormat(e,a.x,l.options.startOfWeek,d):d.day)||d.year},tooltipFooterHeaderFormatter:function(a,d){d=d?"footer":"header";var e=a.series,v=e.tooltipOptions,b=v.xDateFormat,c=e.xAxis,f=c&&"datetime"===c.options.type&&k(a.key),w=v[d+"Format"];f&&!b&&(b=this.getXDateFormat(a,v,c));f&&b&&F(a.point&&a.point.tooltipDateKeys||["key"],function(a){w=w.replace("{point."+a+"}","{point."+a+":"+b+"}")});return q(w,{point:a,series:e},this.chart.time)},bodyFormatter:function(a){return h(a,
function(a){var d=a.series.tooltipOptions;return(d[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,d[(a.point.formatPrefix||"point")+"Format"])})}}})(J);(function(a){var E=a.addEvent,F=a.attr,G=a.charts,q=a.color,k=a.css,h=a.defined,t=a.each,C=a.extend,n=a.find,A=a.fireEvent,B=a.isNumber,e=a.isObject,d=a.offset,l=a.pick,v=a.splat,b=a.Tooltip;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,f){this.options=f;this.chart=a;this.runChartClick=
f.chart.events&&!!f.chart.events.click;this.pinchDown=[];this.lastValidTouch={};b&&(a.tooltip=new b(a,f.tooltip),this.followTouchMove=l(f.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,d=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=l(c.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&!b||a&&b;this.hasZoom=a||d},normalize:function(a,b){var c;c=a.touches?a.touches.length?a.touches.item(0):
a.changedTouches[0]:a;b||(this.chartPosition=b=d(this.chart.container));return C(a,{chartX:Math.round(c.pageX-b.left),chartY:Math.round(c.pageY-b.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,d){var c;t(a,function(a){var f=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(d,f);if((f=e(a,
!0))&&!(f=!e(c,!0)))var f=c.distX-a.distX,m=c.dist-a.dist,w=(a.series.group&&a.series.group.zIndex)-(c.series.group&&c.series.group.zIndex),f=0<(0!==f&&b?f:0!==m?m:0!==w?w:c.series.index>a.series.index?-1:1);f&&(c=a)});return c},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,f=c.xAxis,c=c.yAxis,d=l(a.clientX,a.plotX),e=a.shapeArgs;if(f&&c)return b?{chartX:f.len+f.pos-d,chartY:c.len+c.pos-a.plotY}:
{chartX:d+f.pos,chartY:a.plotY+c.pos};if(e&&e.x&&e.y)return{chartX:e.x,chartY:e.y}},getHoverData:function(b,f,d,v,m,h,z){var c,r=[],w=z&&z.isBoosting;v=!(!v||!b);z=f&&!f.stickyTracking?[f]:a.grep(d,function(a){return a.visible&&!(!m&&a.directTouch)&&l(a.options.enableMouseTracking,!0)&&a.stickyTracking});f=(c=v?b:this.findNearestKDPoint(z,m,h))&&c.series;c&&(m&&!f.noSharedTooltip?(z=a.grep(d,function(a){return a.visible&&!(!m&&a.directTouch)&&l(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),
t(z,function(a){var b=n(a.points,function(a){return a.x===c.x&&!a.isNull});e(b)&&(w&&(b=a.getPoint(b)),r.push(b))})):r.push(c));return{hoverPoint:c,hoverSeries:f,hoverPoints:r}},runPointActions:function(b,f){var c=this.chart,d=c.tooltip&&c.tooltip.options.enabled?c.tooltip:void 0,e=d?d.shared:!1,v=f||c.hoverPoint,z=v&&v.series||c.hoverSeries,z=this.getHoverData(v,z,c.series,"touchmove"!==b.type&&(!!f||z&&z.directTouch&&this.isDirectTouch),e,b,{isBoosting:c.isBoosting}),u,v=z.hoverPoint;u=z.hoverPoints;
f=(z=z.hoverSeries)&&z.tooltipOptions.followPointer;e=e&&z&&!z.noSharedTooltip;if(v&&(v!==c.hoverPoint||d&&d.isHidden)){t(c.hoverPoints||[],function(b){-1===a.inArray(b,u)&&b.setState()});t(u||[],function(a){a.setState("hover")});if(c.hoverSeries!==z)z.onMouseOver();c.hoverPoint&&c.hoverPoint.firePointEvent("mouseOut");if(!v.series)return;v.firePointEvent("mouseOver");c.hoverPoints=u;c.hoverPoint=v;d&&d.refresh(e?u:v,b)}else f&&d&&!d.isHidden&&(v=d.getAnchor([{}],b),d.updatePosition({plotX:v[0],plotY:v[1]}));
this.unDocMouseMove||(this.unDocMouseMove=E(c.container.ownerDocument,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));t(c.axes,function(c){var f=l(c.crosshair.snap,!0),d=f?a.find(u,function(a){return a.series[c.coll]===c}):void 0;d||!f?c.drawCrosshair(b,d):c.hideCrosshair()})},reset:function(a,b){var c=this.chart,f=c.hoverSeries,d=c.hoverPoint,e=c.hoverPoints,l=c.tooltip,u=l&&l.shared?e:d;a&&u&&t(v(u),function(b){b.series.isCartesian&&void 0===b.plotX&&
(a=!1)});if(a)l&&u&&(l.refresh(u),l.shared&&e?t(e,function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):d&&(d.setState(d.state,!0),t(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,d)})));else{if(d)d.onMouseOut();e&&t(e,function(a){a.setState()});if(f)f.onMouseOut();l&&l.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(c.axes,function(a){a.hideCrosshair()});
this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,f;t(c.series,function(d){f=a||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(f),d.markerGroup&&(d.markerGroup.attr(f),d.markerGroup.clip(b?c.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(f))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,v=this.zoomHor,l=this.zoomVert,u=b.plotLeft,r=b.plotTop,h=b.plotWidth,H=b.plotHeight,p,D=this.selectionMarker,g=this.mouseDownX,y=this.mouseDownY,k=c.panKey&&a[c.panKey+"Key"];D&&D.touch||(d<u?d=u:d>u+h&&(d=u+h),e<r?e=r:e>r+H&&(e=r+H),this.hasDragged=Math.sqrt(Math.pow(g-d,2)+Math.pow(y-e,2)),10<this.hasDragged&&(p=b.isInsidePlot(g-u,y-r),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&p&&!k&&!D&&(this.selectionMarker=D=b.renderer.rect(u,r,v?1:h,
l?1:H,0).attr({fill:c.selectionMarkerFill||q("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),D&&v&&(d-=g,D.attr({width:Math.abs(d),x:(0<d?0:d)+g})),D&&l&&(d=e-y,D.attr({height:Math.abs(d),y:(0<d?0:d)+y})),p&&!D&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},v=this.selectionMarker,l=v.attr?v.attr("x"):v.x,u=v.attr?v.attr("y"):v.y,r=v.attr?v.attr("width"):
v.width,K=v.attr?v.attr("height"):v.height,H;if(this.hasDragged||d)t(c.axes,function(c){if(c.zoomEnabled&&h(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,g="touchend"===a.type?c.minPixelPadding:0,p=c.toValue((f?l:u)+g),f=c.toValue((f?l+r:u+K)-g);e[c.coll].push({axis:c,min:Math.min(p,f),max:Math.max(p,f)});H=!0}}),H&&A(c,"selection",e,function(a){c.zoom(C(a,d?{animation:!1}:null))});B(c.index)&&(this.selectionMarker=this.selectionMarker.destroy());d&&this.scaleGroups()}c&&B(c.index)&&
(k(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||
b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;h(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-
c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var c;a;){if(c=F(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},
onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(A(c.series,"click",C(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(C(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&A(b,"click",a)))},setDOMEvents:function(){var b=this,d=b.chart.container,e=d.ownerDocument;d.onmousedown=function(a){b.onContainerMouseDown(a)};d.onmousemove=function(a){b.onContainerMouseMove(a)};
d.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=E(d,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=E(e,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(d.ontouchstart=function(a){b.onContainerTouchStart(a)},d.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=E(e,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();
a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(J);(function(a){var E=a.charts,F=a.each,G=a.extend,q=a.map,k=a.noop,h=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,h,k,q,B,e){this.zoomHor&&this.pinchTranslateDirection(!0,a,h,k,q,B,e);this.zoomVert&&this.pinchTranslateDirection(!1,a,h,k,q,
B,e)},pinchTranslateDirection:function(a,h,k,q,B,e,d,l){var v=this.chart,b=a?"x":"y",c=a?"X":"Y",f="chart"+c,w=a?"width":"height",x=v["plot"+(a?"Left":"Top")],m,n,z=l||1,u=v.inverted,r=v.bounds[a?"h":"v"],K=1===h.length,H=h[0][f],p=k[0][f],D=!K&&h[1][f],g=!K&&k[1][f],y;k=function(){!K&&20<Math.abs(H-D)&&(z=l||Math.abs(p-g)/Math.abs(H-D));n=(x-p)/z+H;m=v["plot"+(a?"Width":"Height")]/z};k();h=n;h<r.min?(h=r.min,y=!0):h+m>r.max&&(h=r.max-m,y=!0);y?(p-=.8*(p-d[b][0]),K||(g-=.8*(g-d[b][1])),k()):d[b]=
[p,g];u||(e[b]=n-x,e[w]=m);e=u?1/z:z;B[w]=m;B[b]=h;q[u?a?"scaleY":"scaleX":"scale"+c]=z;q["translate"+c]=e*x+(p-e*H)},pinch:function(a){var t=this,n=t.chart,A=t.pinchDown,B=a.touches,e=B.length,d=t.lastValidTouch,l=t.hasZoom,v=t.selectionMarker,b={},c=1===e&&(t.inClass(a.target,"highcharts-tracker")&&n.runTrackerClick||t.runChartClick),f={};1<e&&(t.initiated=!0);l&&t.initiated&&!c&&a.preventDefault();q(B,function(a){return t.normalize(a)});"touchstart"===a.type?(F(B,function(a,b){A[b]={chartX:a.chartX,
chartY:a.chartY}}),d.x=[A[0].chartX,A[1]&&A[1].chartX],d.y=[A[0].chartY,A[1]&&A[1].chartY],F(n.axes,function(a){if(a.zoomEnabled){var b=n.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(h(a.options.min,a.dataMin)),f=a.toPixels(h(a.options.max,a.dataMax)),e=Math.max(d,f);b.min=Math.min(a.pos,Math.min(d,f)-c);b.max=Math.max(a.pos+a.len,e+c)}}),t.res=!0):t.followTouchMove&&1===e?this.runPointActions(t.normalize(a)):A.length&&(v||(t.selectionMarker=v=G({destroy:k,touch:!0},n.plotBox)),t.pinchTranslate(A,
B,b,v,f,d),t.hasPinched=l,t.scaleGroups(b,f),t.res&&(t.res=!1,this.reset(!1,0)))},touch:function(k,q){var n=this.chart,t,B;if(n.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=n.index;1===k.touches.length?(k=this.normalize(k),(B=n.isInsidePlot(k.chartX-n.plotLeft,k.chartY-n.plotTop))&&!n.openMenu?(q&&this.runPointActions(k),"touchmove"===k.type&&(q=this.pinchDown,t=q[0]?4<=Math.sqrt(Math.pow(q[0].chartX-k.chartX,2)+Math.pow(q[0].chartY-k.chartY,2)):!1),h(t,
!0)&&this.pinch(k)):q&&this.reset()):2===k.touches.length&&this.pinch(k)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(h){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(h)}})})(J);(function(a){var E=a.addEvent,F=a.charts,G=a.css,q=a.doc,k=a.extend,h=a.noop,t=a.Pointer,C=a.removeEvent,n=a.win,A=a.wrap;if(!a.hasTouch&&(n.PointerEvent||n.MSPointerEvent)){var B={},e=!!n.PointerEvent,d=function(){var d=
[];d.item=function(a){return this[a]};a.objectEach(B,function(a){d.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return d},l=function(e,b,c,f){"touch"!==e.pointerType&&e.pointerType!==e.MSPOINTER_TYPE_TOUCH||!F[a.hoverChartIndex]||(f(e),f=F[a.hoverChartIndex].pointer,f[b]({type:c,target:e.currentTarget,preventDefault:h,touches:d()}))};k(t.prototype,{onContainerPointerDown:function(a){l(a,"onContainerTouchStart","touchstart",function(a){B[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){l(a,"onContainerTouchMove","touchmove",function(a){B[a.pointerId]={pageX:a.pageX,pageY:a.pageY};B[a.pointerId].target||(B[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){l(a,"onDocumentTouchEnd","touchend",function(a){delete B[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,e?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,e?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(q,e?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});A(t.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&G(b.container,{"-ms-touch-action":"none","touch-action":"none"})});A(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});A(t.prototype,"destroy",function(a){this.batchMSEvents(C);a.call(this)})}})(J);(function(a){var E=a.addEvent,F=a.css,G=a.discardElement,q=a.defined,k=a.each,h=a.fireEvent,t=a.isFirefox,C=a.marginNames,
n=a.merge,A=a.pick,B=a.setAnimation,e=a.stableSort,d=a.win,l=a.wrap;a.Legend=function(a,b){this.init(a,b)};a.Legend.prototype={init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=E(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},setOptions:function(a){var b=A(a.padding,8);this.options=
a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=n(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.symbolWidth=A(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,b){var c=this.chart;this.setOptions(n(!0,this.options,a));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;A(b,!0)&&c.redraw();h(this,"afterUpdate")},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");
var c=this.options,d=a.legendItem,e=a.legendLine,v=a.legendSymbol,m=this.itemHiddenStyle.color,c=b?c.itemStyle.color:m,l=b?a.color||m:m,z=a.options&&a.options.marker,u={fill:l};d&&d.css({fill:c,color:c});e&&e.attr({stroke:l});v&&(z&&v.isMarker&&(u=a.pointAttribs(),b||(u.stroke=u.fill=m)),v.attr(u));h(this,"afterColorizeItem",{item:a,visible:b})},positionItems:function(){k(this.allItems,this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var b=this.options,
c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],l=a.checkbox;if((a=a.legendGroup)&&a.element)a[q(a.translateY)?"animate":"attr"]({translateX:b?e:this.legendWidth-e-2*c-4,translateY:d});l&&(l.x=e,l.y=d)},destroyItem:function(a){var b=a.checkbox;k(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}k(this.getAllItems(),function(b){k(["legendItem","legendGroup"],
a,b)});k("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b,c=this.clipHeight||this.legendHeight,d=this.titleHeight;a&&(b=a.translateY,k(this.allItems,function(f){var e=f.checkbox,m;e&&(m=b+d+e.y+(this.scrollOffset||0)+3,F(e,{left:a.translateX+f.checkboxOffset+e.x-20+"px",top:m+"px",display:this.proximate||m>b-6&&m<b+c-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,b=this.padding,
c=a.title,d=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(c.style).add(this.group)),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d},setText:function(d){var b=this.options;d.legendItem.attr({text:b.labelFormat?a.format(b.labelFormat,d,this.chart.time):b.labelFormatter.call(d)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=
this.options,e=this.symbolWidth,l=d.symbolPadding,m=this.itemStyle,v=this.itemHiddenStyle,z="horizontal"===d.layout?A(d.itemDistance,20):0,u=!d.rtl,r=a.legendItem,h=!a.series,H=!h&&a.series.drawLegendSymbol?a.series:a,p=H.options,p=this.createCheckboxForItem&&p&&p.showCheckbox,z=e+l+z+(p?20:0),D=d.useHTML,g=a.options.className;r||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+H.type+"-series highcharts-color-"+a.colorIndex+(g?" "+g:"")+(h?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),
a.legendItem=r=c.text("",u?e+l:-l,this.baseline||0,D).css(n(a.visible?m:v)).attr({align:u?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(e=m.fontSize,this.fontMetrics=c.fontMetrics(e,r),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,r.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,H.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,r,D),p&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);m.width||r.css({width:(d.itemWidth||
d.width||b.spacingBox.width)-z});this.setText(a);b=r.getBBox();a.itemWidth=a.checkboxOffset=d.itemWidth||a.legendItemWidth||b.width+z;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight)},layoutItem:function(a){var b=this.options,c=this.padding,d="horizontal"===b.layout,e=a.itemHeight,l=b.itemMarginBottom||0,m=this.itemMarginTop,v=d?A(b.itemDistance,20):0,z=b.width,u=z||this.chart.spacingBox.width-
2*c-b.x,b=b.alignColumns&&this.totalItemWidth>u?this.maxItemWidth:a.itemWidth;d&&this.itemX-c+b>u&&(this.itemX=c,this.itemY+=m+this.lastLineHeight+l,this.lastLineHeight=0);this.lastItemY=m+this.itemY+l;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];d?this.itemX+=b:(this.itemY+=m+e+l,this.lastLineHeight=e);this.offsetWidth=z||Math.max((d?this.itemX-c-(a.checkbox?0:v):b)+c,this.offsetWidth)},getAllItems:function(){var a=[];k(this.chart.series,function(b){var c=
b&&b.options;b&&A(c.showInLegend,q(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});h(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=this.getAlignment();e&&k([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,
m){f.test(e)&&!q(a[m])&&(c[C[m]]=Math.max(c[C[m]],c.legend[(m+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][m]*d[m%2?"x":"y"]+A(d.margin,12)+b[m]+(0===m&&void 0!==c.options.title.margin?c.titleOffset+c.options.title.margin:0)))})},proximatePositions:function(){var d=this.chart,b=[],c="left"===this.options.align;k(this.allItems,function(f){var e,l;e=c;f.xAxis&&f.points&&(f.xAxis.options.reversed&&(e=!e),e=a.find(e?f.points:f.points.slice(0).reverse(),function(b){return a.isNumber(b.plotY)}),l=f.legendGroup.getBBox().height,
b.push({target:f.visible?(e?e.plotY:f.xAxis.height)-.3*l:d.plotHeight,size:l,item:f}))},this);a.distribute(b,d.plotHeight);k(b,function(a){a.item._legendItemPos[1]=d.plotTop-d.spacing[0]+a.pos})},render:function(){var a=this.chart,b=a.renderer,c=this.group,d,l,h,m=this.box,I=this.options,z=this.padding;this.itemX=z;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;c||(this.group=c=b.g("legend").attr({zIndex:7}).add(),this.contentGroup=b.g().attr({zIndex:1}).add(c),this.scrollGroup=b.g().add(this.contentGroup));
this.renderTitle();d=this.getAllItems();e(d,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});I.reversed&&d.reverse();this.allItems=d;this.display=l=!!d.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;k(d,this.renderItem,this);k(d,this.layoutItem,this);d=(I.width||this.offsetWidth)+z;h=this.lastItemY+this.lastLineHeight+this.titleHeight;h=this.handleOverflow(h);h+=z;m||(this.box=m=b.rect().addClass("highcharts-legend-box").attr({r:I.borderRadius}).add(c),
m.isNew=!0);m.attr({stroke:I.borderColor,"stroke-width":I.borderWidth||0,fill:I.backgroundColor||"none"}).shadow(I.shadow);0<d&&0<h&&(m[m.isNew?"attr":"animate"](m.crisp.call({},{x:0,y:0,width:d,height:h},m.strokeWidth())),m.isNew=!1);m[l?"show":"hide"]();this.legendWidth=d;this.legendHeight=h;l&&(b=a.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(b=n(b,{y:b.y+a.titleOffset+a.options.title.margin})),c.align(n(I,{width:d,height:h,verticalAlign:this.proximate?"top":I.verticalAlign}),!0,b));this.proximate||
this.positionItems()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,l=e.y,m=this.padding,c=c.spacingBox.height+("top"===e.verticalAlign?-l:l)-m,l=e.maxHeight,h,z=this.clipRect,u=e.navigation,r=A(u.animation,!0),v=u.arrowSize||12,H=this.nav,p=this.pages,D,g=this.allItems,y=function(a){"number"===typeof a?z.attr({height:a}):z&&(b.clipRect=z.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")};
"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(c/=2);l&&(c=Math.min(c,l));p.length=0;a>c&&!1!==u.enabled?(this.clipHeight=h=Math.max(c-20-this.titleHeight-m,0),this.currentPage=A(this.currentPage,1),this.fullHeight=a,k(g,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),f=p.length;if(!f||c-p[f-1]>h&&(D||c)!==p[f-1])p.push(D||c),f++;a.pageIx=f-1;D&&(g[b-1].pageIx=f-1);b===g.length-1&&c+d-p[f-1]>h&&(p.push(c),a.pageIx=f);c!==D&&(D=c)}),z||(z=b.clipRect=
d.clipRect(0,m,9999,0),b.contentGroup.clip(z)),y(h),H||(this.nav=H=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,v,v).on("click",function(){b.scroll(-1,r)}).add(H),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(u.style).add(H),this.down=d.symbol("triangle-down",0,0,v,v).on("click",function(){b.scroll(1,r)}).add(H)),b.scroll(0),a=c):H&&(y(),this.nav=H.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var c=
this.pages,d=c.length;a=this.currentPage+a;var e=this.clipHeight,l=this.options.navigation,m=this.pager,h=this.padding;a>d&&(a=d);0<a&&(void 0!==b&&B(b,this.chart),this.nav.attr({translateX:h,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),m.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
this.up.attr({fill:1===a?l.inactiveColor:l.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?l.inactiveColor:l.activeColor}).css({cursor:a===d?"default":"pointer"}),this.scrollOffset=-c[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.symbolHeight,d=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-c)/2:
0,a.baseline-c+1,d?c:a.symbolWidth,c,A(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,e=a.symbolHeight,l=e/2,m=this.chart.renderer,h=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var z;z={"stroke-width":b.lineWidth||0};b.dashStyle&&(z.dashstyle=b.dashStyle);this.legendLine=m.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(z).add(h);c&&!1!==c.enabled&&d&&
(b=Math.min(A(c.radius,l),l),0===this.symbol.indexOf("url")&&(c=n(c,{width:e,height:e}),b=0),this.legendSymbol=c=m.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(h),c.isMarker=!0)}};(/Trident\/7\.0/.test(d.navigator.userAgent)||t)&&l(a.Legend.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)})})(J);(function(a){var E=a.addEvent,F=a.animate,G=a.animObject,q=a.attr,k=a.doc,h=a.Axis,t=a.createElement,C=a.defaultOptions,
n=a.discardElement,A=a.charts,B=a.css,e=a.defined,d=a.each,l=a.extend,v=a.find,b=a.fireEvent,c=a.grep,f=a.isNumber,w=a.isObject,x=a.isString,m=a.Legend,I=a.marginNames,z=a.merge,u=a.objectEach,r=a.Pointer,K=a.pick,H=a.pInt,p=a.removeEvent,D=a.seriesTypes,g=a.splat,y=a.syncTimeout,O=a.win,Q=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,g){return new Q(a,b,g)};l(Q.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(x(a[0])||a[0].nodeName)this.renderTo=
a.shift();this.init(a[0],a[1])},init:function(g,c){var d,e,f=g.series,p=g.plotOptions||{};b(this,"init",{args:arguments},function(){g.series=null;d=z(C,g);for(e in d.plotOptions)d.plotOptions[e].tooltip=p[e]&&z(p[e].tooltip)||void 0;d.tooltip.userOptions=g.chart&&g.chart.forExport&&g.tooltip.userOptions||g.tooltip;d.series=g.series=f;this.userOptions=g;var r=d.chart,D=r.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=
d;this.axes=[];this.series=[];this.time=g.time&&a.keys(g.time).length?new a.Time(g.time):a.time;this.hasCartesianSeries=r.showAxes;var l=this;l.index=A.length;A.push(l);a.chartCount++;D&&u(D,function(a,b){E(l,b,a)});l.xAxis=[];l.yAxis=[];l.pointCount=l.colorCounter=l.symbolCounter=0;b(l,"afterInit");l.firstRender()})},initSeries:function(b){var g=this.options.chart;(g=D[b.type||g.type||g.defaultSeriesType])||a.error(17,!0);g=new g;g.init(this,b);return g},orderSeries:function(a){var b=this.series;
for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,g){var c=g?b:a;a=g?a:b;return 0<=c&&c<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(g){b(this,"beforeRedraw");var c=this.axes,e=this.series,f=this.pointer,p=this.legend,r=this.userOptions.legend,D=this.isDirtyLegend,m,y,H=this.hasCartesianSeries,h=this.isDirtyBox,z,u=this.renderer,w=u.isHidden(),k=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(g,this);w&&this.temporaryDisplay();
this.layOutTitles();for(g=e.length;g--;)if(z=e[g],z.options.stacking&&(m=!0,z.isDirty)){y=!0;break}if(y)for(g=e.length;g--;)z=e[g],z.options.stacking&&(z.isDirty=!0);d(e,function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),D=!0):r&&(r.labelFormatter||r.labelFormat)&&(D=!0));a.isDirtyData&&b(a,"updatedData")});D&&p&&p.options.enabled&&(p.render(),this.isDirtyLegend=!1);m&&this.getStacks();H&&d(c,function(a){a.updateNames();a.updateYNames&&a.updateYNames();a.setScale()});
this.getMargins();H&&(d(c,function(a){a.isDirty&&(h=!0)}),d(c,function(a){var g=a.min+","+a.max;a.extKey!==g&&(a.extKey=g,k.push(function(){b(a,"afterSetExtremes",l(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(h||m)&&a.redraw()}));h&&this.drawChartBox();b(this,"predraw");d(e,function(a){(h||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});f&&f.reset(!0);u.draw();b(this,"redraw");b(this,"render");w&&this.temporaryDisplay(!0);d(k,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var g,c=this.series,d;g=v(this.axes,b)||v(this.series,b);for(d=0;!g&&d<c.length;d++)g=v(c[d].points||[],b);return g},getAxes:function(){var a=this,c=this.options,e=c.xAxis=g(c.xAxis||{}),c=c.yAxis=g(c.yAxis||{});b(this,"getAxes");d(e,function(a,b){a.index=b;a.isX=!0});d(c,function(a,b){a.index=b});e=e.concat(c);d(e,function(b){new h(a,b)});b(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];d(this.series,function(b){a=a.concat(c(b.data||[],function(a){return a.selected}))});
return a},getSelectedSeries:function(){return c(this.series,function(a){return a.selected})},setTitle:function(a,b,g){var c=this,e=c.options,f;f=e.title=z({style:{color:"#333333",fontSize:e.isStock?"16px":"18px"}},e.title,a);e=e.subtitle=z({style:{color:"#666666"}},e.subtitle,b);d([["title",a,f],["subtitle",b,e]],function(a,b){var g=a[0],d=c[g],e=a[1];a=a[2];d&&e&&(c[g]=d=d.destroy());a&&!d&&(c[g]=c.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+g,zIndex:a.zIndex||4}).add(),
c[g].update=function(a){c.setTitle(!b&&a,b&&a)},c[g].css(a.style))});c.layOutTitles(g)},layOutTitles:function(a){var b=0,g,c=this.renderer,e=this.spacingBox;d(["title","subtitle"],function(a){var g=this[a],d=this.options[a];a="title"===a?-3:d.verticalAlign?0:b+2;var f;g&&(f=d.style.fontSize,f=c.fontMetrics(f,g).b,g.css({width:(d.width||e.width+d.widthAdjust)+"px"}).align(l({y:a+f},d),!1,"spacingBox"),d.floating||d.verticalAlign||(b=Math.ceil(b+g.getBBox(d.useHTML).height)))},this);g=this.titleOffset!==
b;this.titleOffset=b;!this.isDirtyBox&&g&&(this.isDirtyBox=this.isDirtyLegend=g,this.hasRendered&&K(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,g=b.width,b=b.height,c=this.renderTo;e(g)||(this.containerWidth=a.getStyle(c,"width"));e(b)||(this.containerHeight=a.getStyle(c,"height"));this.chartWidth=Math.max(0,g||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},
temporaryDisplay:function(b){var g=this.renderTo;if(b)for(;g&&g.style;)g.hcOrigStyle&&(a.css(g,g.hcOrigStyle),delete g.hcOrigStyle),g.hcOrigDetached&&(k.body.removeChild(g),g.hcOrigDetached=!1),g=g.parentNode;else for(;g&&g.style;){k.body.contains(g)||g.parentNode||(g.hcOrigDetached=!0,k.body.appendChild(g));if("none"===a.getStyle(g,"display",!1)||g.hcOricDetached)g.hcOrigStyle={display:g.style.display,height:g.style.height,overflow:g.style.overflow},b={display:"block",overflow:"hidden"},g!==this.renderTo&&
(b.height=0),a.css(g,b),g.offsetWidth||g.style.setProperty("display","block","important");g=g.parentNode;if(g===k.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var g,c=this.options,d=c.chart,e,p;g=this.renderTo;var r=a.uniqueKey(),D;g||(this.renderTo=g=d.renderTo);x(g)&&(this.renderTo=g=k.getElementById(g));g||a.error(13,!0);e=H(q(g,"data-highcharts-chart"));f(e)&&A[e]&&A[e].hasRendered&&A[e].destroy();q(g,"data-highcharts-chart",
this.index);g.innerHTML="";d.skipClone||g.offsetWidth||this.temporaryDisplay();this.getChartSize();e=this.chartWidth;p=this.chartHeight;D=l({position:"relative",overflow:"hidden",width:e+"px",height:p+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=g=t("div",{id:r},D,g);this._cursor=g.style.cursor;this.renderer=new (a[d.renderer]||a.Renderer)(g,e,p,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);
this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index;b(this,"afterGetContainer")},getMargins:function(a){var g=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();d&&!e(c[0])&&(this.plotTop=Math.max(this.plotTop,d+this.options.title.margin+g[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,g);b(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],g=a.margin;a.hasCartesianSeries&&d(a.axes,function(a){a.visible&&
a.getOffset()});d(I,function(c,d){e(g[d])||(a[c]+=b[d])});a.setChartSize()},reflow:function(b){var g=this,c=g.options.chart,d=g.renderTo,f=e(c.width)&&e(c.height),p=c.width||a.getStyle(d,"width"),c=c.height||a.getStyle(d,"height"),d=b?b.target:O;if(!f&&!g.isPrinting&&p&&c&&(d===O||d===k)){if(p!==g.containerWidth||c!==g.containerHeight)a.clearTimeout(g.reflowTimeout),g.reflowTimeout=y(function(){g.container&&g.setSize(void 0,void 0,!1)},b?100:0);g.containerWidth=p;g.containerHeight=c}},setReflow:function(a){var b=
this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=E(O,"resize",function(a){b.reflow(a)}),E(this,"destroy",this.unbindReflow))},setSize:function(g,c,e){var f=this,p=f.renderer;f.isResizing+=1;a.setAnimation(e,f);f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;void 0!==g&&(f.options.chart.width=g);void 0!==c&&(f.options.chart.height=c);f.getChartSize();g=p.globalAnimation;(g?F:B)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+
"px"},g);f.setChartSize(!0);p.setSize(f.chartWidth,f.chartHeight,e);d(f.axes,function(a){a.isDirty=!0;a.setScale()});f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();f.getMargins();f.redraw(e);f.oldChartHeight=null;b(f,"resize");y(function(){f&&b(f,"endResize",null,function(){--f.isResizing})},G(g).duration)},setChartSize:function(a){var g=this.inverted,c=this.renderer,e=this.chartWidth,f=this.chartHeight,p=this.options.chart,r=this.spacing,D=this.clipOffset,l,m,y,H;this.plotLeft=l=Math.round(this.plotLeft);
this.plotTop=m=Math.round(this.plotTop);this.plotWidth=y=Math.max(0,Math.round(e-l-this.marginRight));this.plotHeight=H=Math.max(0,Math.round(f-m-this.marginBottom));this.plotSizeX=g?H:y;this.plotSizeY=g?y:H;this.plotBorderWidth=p.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:r[3],y:r[0],width:e-r[3]-r[1],height:f-r[0]-r[2]};this.plotBox=c.plotBox={x:l,y:m,width:y,height:H};e=2*Math.floor(this.plotBorderWidth/2);g=Math.ceil(Math.max(e,D[3])/2);c=Math.ceil(Math.max(e,D[0])/2);this.clipBox={x:g,
y:c,width:Math.floor(this.plotSizeX-Math.max(e,D[1])/2-g),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(e,D[2])/2-c))};a||d(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()});b(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){var a=this,b=a.options.chart;d(["margin","spacing"],function(g){var c=b[g],e=w(c)?c:[c,c,c,c];d(["Top","Right","Bottom","Left"],function(c,d){a[g][d]=K(b[g+c],e[d])})});d(I,function(b,g){a[b]=K(a.margin[g],a.spacing[g])});a.axisOffset=[0,0,0,
0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,g=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,p=this.plotBorder,r,D=this.plotBGImage,l=a.backgroundColor,m=a.plotBackgroundColor,y=a.plotBackgroundImage,H,z=this.plotLeft,h=this.plotTop,u=this.plotWidth,w=this.plotHeight,k=this.plotBox,v=this.clipRect,K=this.clipBox,x="animate";e||(this.chartBackground=e=g.rect().addClass("highcharts-background").add(),x="attr");r=a.borderWidth||
0;H=r+(a.shadow?8:0);l={fill:l||"none"};if(r||e["stroke-width"])l.stroke=a.borderColor,l["stroke-width"]=r;e.attr(l).shadow(a.shadow);e[x]({x:H/2,y:H/2,width:c-H-r%2,height:d-H-r%2,r:a.borderRadius});x="animate";f||(x="attr",this.plotBackground=f=g.rect().addClass("highcharts-plot-background").add());f[x](k);f.attr({fill:m||"none"}).shadow(a.plotShadow);y&&(D?D.animate(k):this.plotBGImage=g.image(y,z,h,u,w).add());v?v.animate({width:K.width,height:K.height}):this.clipRect=g.clipRect(K);x="animate";
p||(x="attr",this.plotBorder=p=g.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());p.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});p[x](p.crisp({x:z,y:h,width:u,height:w},-p.strokeWidth()));this.isDirtyBox=!1;b(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,g,c=a.options.series,e,f;d(["inverted","angular","polar"],function(d){g=D[b.type||b.defaultSeriesType];f=b[d]||g&&g.prototype[d];for(e=c&&c.length;!f&&e--;)(g=
D[c[e].type])&&g.prototype[d]&&(f=!0);a[d]=f})},linkSeries:function(){var a=this,g=a.series;d(g,function(a){a.linkedSeries.length=0});d(g,function(b){var g=b.options.linkedTo;x(g)&&(g=":previous"===g?a.series[b.index-1]:a.get(g))&&g.linkedParent!==b&&(g.linkedSeries.push(b),b.linkedParent=g,b.visible=K(b.options.visible,g.options.visible,b.visible))});b(this,"afterLinkSeries")},renderSeries:function(){d(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;
b.items&&d(b.items,function(g){var c=l(b.style,g.style),d=H(c.left)+a.plotLeft,e=H(c.top)+a.plotTop+12;delete c.left;delete c.top;a.renderer.text(g.html,d,e).attr({zIndex:2}).css(c).add()})},render:function(){var a=this.axes,b=this.renderer,g=this.options,c,e,f;this.setTitle();this.legend=new m(this,g.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();g=this.plotWidth;c=this.plotHeight=Math.max(this.plotHeight-21,0);d(a,function(a){a.setScale()});this.getAxisMargins();
e=1.1<g/this.plotWidth;f=1.05<c/this.plotHeight;if(e||f)d(a,function(a){(a.horiz&&e||!a.horiz&&f)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&d(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=z(!0,this.options.credits,a);a.enabled&&
!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(O.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var g=this,c=g.axes,e=g.series,f=g.container,r,D=f&&f.parentNode;b(g,"destroy");g.renderer.forExport?a.erase(A,g):A[g.index]=void 0;a.chartCount--;g.renderTo.removeAttribute("data-highcharts-chart");
p(g);for(r=c.length;r--;)c[r]=c[r].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(r=e.length;r--;)e[r]=e[r].destroy();d("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var b=g[a];b&&b.destroy&&(g[a]=b.destroy())});f&&(f.innerHTML="",p(f),D&&n(f));u(g,function(a,b){delete g[b]})},firstRender:function(){var a=this,g=a.options;if(!a.isReadyToRender||
a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();d(g.series||[],function(b){a.initSeries(b)});a.linkSeries();b(a,"beforeRender");r&&(a.pointer=new r(a,g));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){d([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);b(this,"load");b(this,"render");e(this.index)&&this.setReflow(this.options.chart.reflow);
this.onload=null}})})(J);(function(a){var E=a.addEvent,F=a.Chart,G=a.each;E(F,"afterSetChartSize",function(q){var k=this.options.chart.scrollablePlotArea;(k=k&&k.minWidth)&&!this.renderer.forExport&&(this.scrollablePixels=k=Math.max(0,k-this.chartWidth))&&(this.plotWidth+=k,this.clipBox.width+=k,q.skipAxes||G(this.axes,function(h){1===h.side?h.getPlotLinePath=function(){var k=this.right,q;this.right=k-h.chart.scrollablePixels;q=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=k;return q}:
(h.setAxisSize(),h.setAxisTranslation())}))});E(F,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});F.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);
this.setUpScrolling=null};F.prototype.applyFixed=function(){var q=this.container,k,h,t=!this.fixedDiv;t&&(this.fixedDiv=a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.fixedRenderer=k=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=k.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),
a.each([this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title",".highcharts-legend-checkbox"],function(h){a.each(q.querySelectorAll(h),function(a){(a.namespaceURI===k.SVG_NS?k.box:k.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);h=this.chartWidth+
this.scrollablePixels;a.stop(this.container);this.container.style.width=h+"px";this.renderer.boxWrapper.attr({width:h,height:this.chartHeight,viewBox:[0,0,h,this.chartHeight].join(" ")});this.chartBackground.attr({width:h});t&&(h=this.options.chart.scrollablePlotArea,h.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixels*h.scrollPositionX));t=this.axisOffset;h=this.plotTop-t[0]-1;var t=this.plotTop+this.plotHeight+t[2],C=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?
["M",0,h,"L",this.plotLeft-1,h,"L",this.plotLeft-1,t,"L",0,t,"Z","M",C,h,"L",this.chartWidth,h,"L",this.chartWidth,t,"L",C,t,"Z"]:["M",0,0]})}})(J);(function(a){var E,F=a.each,G=a.extend,q=a.erase,k=a.fireEvent,h=a.format,t=a.isArray,C=a.isNumber,n=a.pick,A=a.uniqueKey,B=a.defined,e=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,e,h){this.series=a;this.color=a.color;this.applyOptions(e,h);this.id=B(this.id)?this.id:A();a.options.colorByPoint?(e=a.options.colors||a.chart.options.colors,
this.color=this.color||e[a.colorCounter],e=e.length,h=a.colorCounter,a.colorCounter++,a.colorCounter===e&&(a.colorCounter=0)):h=a.colorIndex;this.colorIndex=n(this.colorIndex,h);a.chart.pointCount++;k(this,"afterInit");return this},applyOptions:function(a,e){var d=this.series,b=d.options.pointValKey||d.pointValKey;a=E.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;a.dataLabels&&delete this.dataLabels;b&&(this.y=this[b]);this.isNull=
n(this.isValid&&!this.isValid(),null===this.x||!C(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===e&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));void 0===this.x&&d&&(this.x=void 0===e?d.autoIncrement(this):e);return this},setNestedProperty:function(d,e,h){h=h.split(".");a.reduce(h,function(b,c,d,l){b[c]=l.length-1===d?e:a.isObject(b[c],!0)?b[c]:{};return b[c]},d);return d},optionsToObject:function(d){var e={},h=this.series,b=h.options.keys,c=b||h.pointArrayMap||
["y"],f=c.length,w=0,k=0;if(C(d)||null===d)e[c[0]]=d;else if(t(d))for(!b&&d.length>f&&(h=typeof d[0],"string"===h?e.name=d[0]:"number"===h&&(e.x=d[0]),w++);k<f;)b&&void 0===d[w]||(0<c[k].indexOf(".")?a.Point.prototype.setNestedProperty(e,d[w],c[k]):e[c[k]]=d[w]),w++,k++;else"object"===typeof d&&(e=d,d.dataLabels&&(h._hasPointLabels=!0),d.marker&&(h._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":
"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,e=a.zones,a=a.zoneAxis||"y",h=0,b;for(b=e[h];this[a]>=b.value;)b=e[++h];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=b&&b.color&&!this.options.color?b.color:this.nonZonedColor;return b},
destroy:function(){var a=this.series.chart,l=a.hoverPoints,h;a.pointCount--;l&&(this.setState(),q(l,this),l.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)e(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(h in this)this[h]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],e,h=6;h--;)e=a[h],this[e]&&(this[e]=this[e].destroy());this.dataLabels&&
(F(this.dataLabels,function(a){a.element&&a.destroy()}),delete this.dataLabels);this.connectors&&(F(this.connectors,function(a){a.element&&a.destroy()}),delete this.connectors)},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,e=d.tooltipOptions,b=n(e.valueDecimals,""),c=e.valuePrefix||
"",f=e.valueSuffix||"";F(d.pointArrayMap||["y"],function(d){d="{point."+d;if(c||f)a=a.replace(RegExp(d+"}","g"),c+d+"}"+f);a=a.replace(RegExp(d+"}","g"),d+":,."+b+"f}")});return h(a,{point:this,series:this.series},d.chart.time)},firePointEvent:function(a,e,h){var b=this,c=this.series.options;(c.point.events[a]||b.options&&b.options.events&&b.options.events[a])&&this.importEvents();"click"===a&&c.allowPointSelect&&(h=function(a){b.select&&b.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});k(this,a,
e,h)},visible:!0}})(J);(function(a){var E=a.addEvent,F=a.animObject,G=a.arrayMax,q=a.arrayMin,k=a.correctFloat,h=a.defaultOptions,t=a.defaultPlotOptions,C=a.defined,n=a.each,A=a.erase,B=a.extend,e=a.fireEvent,d=a.grep,l=a.isArray,v=a.isNumber,b=a.isString,c=a.merge,f=a.objectEach,w=a.pick,x=a.removeEvent,m=a.splat,I=a.SVGElement,z=a.syncTimeout,u=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",
enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},
hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,d,r=a.series,g;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();B(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});
d=b.events;f(d,function(a,b){E(c,b,a)});if(d&&d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();n(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);r.length&&(g=r[r.length-1]);c._i=w(g&&g._i,-1)+1;a.orderSeries(this.insert(r));e(this,"afterInit")},insert:function(a){var b=this.options.index,c;if(v(b)){for(c=a.length;c--;)if(b>=w(a[c].options.index,a[c]._i)){a.splice(c+
1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return w(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;n(b.axisTypes||[],function(f){n(d[f],function(a){e=a.options;if(c[f]===e.index||void 0!==c[f]&&c[f]===e.id||void 0===c[f]&&0===e.index)b.insert(a.series),b[f]=a,a.isDirty=!0});b[f]||b.optionalAxis===f||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,e=v(b)?function(g){var d="y"===g&&c.toYData?c.toYData(a):a[g];c[g+"Data"][b]=
d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};n(c.parallelArrays,e)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,e=this.chart.time,b=w(b,a.pointStart,0);this.pointInterval=c=w(this.pointInterval,a.pointInterval,1);d&&(a=new e.Date(b),"day"===d?e.set("Date",a,e.get("Date",a)+c):"month"===d?e.set("Month",a,e.get("Month",a)+c):"year"===d&&e.set("FullYear",a,e.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},
setOptions:function(a){var b=this.chart,d=b.options,f=d.plotOptions,r=(b.userOptions||{}).plotOptions||{},g=f[this.type];this.userOptions=a;b=c(g,f.series,a);this.tooltipOptions=c(h.tooltip,h.plotOptions.series&&h.plotOptions.series.tooltip,h.plotOptions[this.type].tooltip,d.tooltip.userOptions,f.series&&f.series.tooltip,f[this.type].tooltip,a.tooltip);this.stickyTracking=w(a.stickyTracking,r[this.type]&&r[this.type].stickyTracking,r.series&&r.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?
!0:b.stickyTracking);null===g.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&C(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});e(this,"afterSetOptions",{options:b});return b},getName:function(){return this.name||"Series "+(this.index+
1)},getCyclic:function(a,b,c){var d,e=this.chart,g=this.userOptions,f=a+"Index",r=a+"Counter",m=c?c.length:w(e.options.chart[a+"Count"],e[a+"Count"]);b||(d=w(g[f],g["_"+f]),C(d)||(e.series.length||(e[r]=0),g["_"+f]=d=e[r]%m,e[r]+=1),c&&(b=c[d]));void 0!==d&&(this[f]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,
this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,e=[],f,g,r,m=this.requireSorting;n(b,function(b){var g;g=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b).x;v(g)&&(g=a.inArray(g,this.xData,r),-1===g||d[g].touched?e.push(b):b!==c.data[g]?(d[g].update(b,!1,null,!1),d[g].touched=!0,m&&(r=g+1)):d[g]&&(d[g].touched=!0),f=!0)},this);if(f)for(b=d.length;b--;)g=d[b],g.touched||g.remove(!1),
g.touched=!1;else if(b.length===d.length)n(b,function(a,b){d[b].update&&a!==c.data[b]&&d[b].update(a,!1,null,!1)});else return!1;n(e,function(a){this.addPoint(a,!1)},this);return!0},setData:function(c,d,e,f){var p=this,g=p.points,r=g&&g.length||0,m,h=p.options,z=p.chart,u=null,k=p.xAxis,x=h.turboThreshold,H=this.xData,K=this.yData,I=(m=p.pointArrayMap)&&m.length,q;c=c||[];m=c.length;d=w(d,!0);!1!==f&&m&&r&&!p.cropped&&!p.hasGroupedData&&p.visible&&!p.isSeriesBoosting&&(q=this.updateData(c));if(!q){p.xIncrement=
null;p.colorCounter=0;n(this.parallelArrays,function(a){p[a+"Data"].length=0});if(x&&m>x){for(e=0;null===u&&e<m;)u=c[e],e++;if(v(u))for(e=0;e<m;e++)H[e]=this.autoIncrement(),K[e]=c[e];else if(l(u))if(I)for(e=0;e<m;e++)u=c[e],H[e]=u[0],K[e]=u.slice(1,I+1);else for(e=0;e<m;e++)u=c[e],H[e]=u[0],K[e]=u[1];else a.error(12)}else for(e=0;e<m;e++)void 0!==c[e]&&(u={series:p},p.pointClass.prototype.applyOptions.apply(u,[c[e]]),p.updateParallelArrays(u,e));K&&b(K[0])&&a.error(14,!0);p.data=[];p.options.data=
p.userOptions.data=c;for(e=r;e--;)g[e]&&g[e].destroy&&g[e].destroy();k&&(k.minRange=k.userMinRange);p.isDirty=z.isDirtyBox=!0;p.isDirtyData=!!g;e=!1}"point"===h.legendType&&(this.processData(),this.generatePoints());d&&z.redraw(e)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,f;f=0;var g,r,m=this.xAxis,l,h=this.options;l=h.cropThreshold;var z=this.getExtremesFromAll||h.getExtremesFromAll,u=this.isCartesian,h=m&&m.val2lin,k=m&&m.isLog,w=this.requireSorting,x,v;if(u&&!this.isDirty&&
!m.isDirty&&!this.yAxis.isDirty&&!b)return!1;m&&(b=m.getExtremes(),x=b.min,v=b.max);u&&this.sorted&&!z&&(!l||e>l||this.forceCrop)&&(c[e-1]<x||c[0]>v?(c=[],d=[]):this.yData&&(c[0]<x||c[e-1]>v)&&(f=this.cropData(this.xData,this.yData,x,v),c=f.xData,d=f.yData,f=f.start,g=!0));for(l=c.length||1;--l;)e=k?h(c[l])-h(c[l-1]):c[l]-c[l-1],0<e&&(void 0===r||e<r)?r=e:0>e&&w&&(a.error(15),w=!1);this.cropped=g;this.cropStart=f;this.processedXData=c;this.processedYData=d;this.closestPointRange=r},cropData:function(a,
b,c,d,e){var g=a.length,f=0,p=g,r;e=w(e,this.cropShoulder,1);for(r=0;r<g;r++)if(a[r]>=c){f=Math.max(0,r-e);break}for(c=r;c<g;c++)if(a[c]>d){p=c+e;break}return{xData:a.slice(f,p),yData:b.slice(f,p),start:f,end:p}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,e=this.processedXData,g=this.processedYData,f=this.pointClass,l=e.length,h=this.cropStart||0,z,u=this.hasGroupedData,a=a.keys,k,w=[],x;c||u||(c=[],c.length=b.length,c=this.data=c);a&&u&&(this.options.keys=!1);for(x=0;x<l;x++)z=
h+x,u?(k=(new f).init(this,[e[x]].concat(m(g[x]))),k.dataGroup=this.groupMap[x],k.dataGroup.options&&(k.options=k.dataGroup.options,B(k,k.dataGroup.options))):(k=c[z])||void 0===b[z]||(c[z]=k=(new f).init(this,b[z],e[x])),k&&(k.index=z,w[x]=k);this.options.keys=a;if(c&&(l!==(d=c.length)||u))for(x=0;x<d;x++)x!==h||u||(x+=l),c[x]&&(c[x].destroyElements(),c[x].plotX=void 0);this.data=c;this.points=w},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],g=0;d=this.xAxis.getExtremes();
var f=d.min,r=d.max,m,h,z=this.requireSorting?1:0,u,k;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(k=0;k<d;k++)if(h=c[k],u=a[k],m=(v(u,!0)||l(u))&&(!b.positiveValuesOnly||u.length||0<u),h=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[k+z]||h)>=f&&(c[k-z]||h)<=r,m&&h)if(m=u.length)for(;m--;)"number"===typeof u[m]&&(e[g++]=u[m]);else e[g++]=u;this.dataMin=q(e);this.dataMax=G(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();
var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,f=this.yAxis,g=this.points,m=g.length,l=!!this.modifyValue,h=a.pointPlacement,z="between"===h||v(h),u=a.threshold,x=a.startFromThreshold?u:0,n,I,q,t,B=Number.MAX_VALUE;"between"===h&&(h=.5);v(h)&&(h*=w(a.pointRange||c.pointRange));for(a=0;a<m;a++){var A=g[a],F=A.x,E=A.y;I=A.low;var G=b&&f.stacks[(this.negStacks&&E<(x?0:u)?"-":"")+this.stackKey],J;f.positiveValuesOnly&&null!==E&&0>=E&&(A.isNull=!0);A.plotX=n=k(Math.min(Math.max(-1E5,c.translate(F,
0,0,0,1,h,"flags"===this.type)),1E5));b&&this.visible&&!A.isNull&&G&&G[F]&&(t=this.getStackIndicator(t,F,this.index),J=G[F],E=J.points[t.key],I=E[0],E=E[1],I===x&&t.key===G[F].base&&(I=w(v(u)&&u,f.min)),f.positiveValuesOnly&&0>=I&&(I=null),A.total=A.stackTotal=J.total,A.percentage=J.total&&A.y/J.total*100,A.stackY=E,J.setOffset(this.pointXOffset||0,this.barW||0));A.yBottom=C(I)?Math.min(Math.max(-1E5,f.translate(I,0,1,0,1)),1E5):null;l&&(E=this.modifyValue(E,A));A.plotY=I="number"===typeof E&&Infinity!==
E?Math.min(Math.max(-1E5,f.translate(E,0,1,0,1)),1E5):void 0;A.isInside=void 0!==I&&0<=I&&I<=f.len&&0<=n&&n<=c.len;A.clientX=z?k(c.translate(F,0,0,0,1,h)):n;A.negative=A.y<(u||0);A.category=d&&void 0!==d[A.x]?d[A.x]:A.x;A.isNull||(void 0!==q&&(B=Math.min(B,Math.abs(n-q))),q=n);A.zone=this.zones.length&&A.getZone()}this.closestPointRangePx=B;e(this,"afterTranslate")},getValidPoints:function(a,b){var c=this.chart;return d(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?
!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,g=this.clipBox,f=g||b.clipBox,r=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,f.height,c.xAxis,c.yAxis].join(),m=b[r],l=b[r+"m"];m||(a&&(f.width=0,e&&(f.x=b.plotSizeX),b[r+"m"]=l=d.clipRect(e?b.plotSizeX+99:-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight)),b[r]=m=d.clipRect(f),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);!1!==c.clip&&
(this.group.clip(a||g?m:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=r);a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&r&&b[r]&&(g||(b[r]=b[r].destroy()),b[r+"m"]&&(b[r+"m"]=b[r+"m"].destroy())))},animate:function(a){var b=this.chart,c=F(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();
e(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d,e,g,f=this.options.marker,m,l,h,z=this[this.specialGroup]||this.markerGroup,u,k=w(f.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=f.enabledThreshold*f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],g=d.graphic,m=d.marker||{},l=!!d.marker,e=k&&void 0===m.enabled||m.enabled,h=d.isInside,e&&!d.isNull?(e=w(m.symbol,this.symbol),u=this.markerAttribs(d,
d.selected&&"select"),g?g[h?"show":"hide"](!0).animate(u):h&&(0<u.width||d.hasImage)&&(d.graphic=g=b.renderer.symbol(e,u.x,u.y,u.width,u.height,l?m:f).add(z)),g&&g.attr(this.pointAttribs(d,d.selected&&"select")),g&&g.addClass(d.getClassName(),!0)):g&&(d.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},e=d.symbol||c.symbol,g=w(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],g=w(b&&b.radius,c&&c.radius,g+(c&&c.radiusPlus||0)));a.hasImage=e&&0===
e.indexOf("url");a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,e=d&&d.marker||{},g=this.color,f=d&&d.color,m=a&&a.color,d=w(e.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=f||a||m||g;a=e.fillColor||c.fillColor||g;g=e.lineColor||c.lineColor||g;b&&(c=c.states[b],b=e.states&&e.states[b]||{},d=w(b.lineWidth,c.lineWidth,d+w(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||
a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":d,fill:a}},destroy:function(){var b=this,c=b.chart,d=/AppleWebKit\/533/.test(u.navigator.userAgent),p,m,g=b.data||[],l,h;e(b,"destroy");x(b);n(b.axisTypes||[],function(a){(h=b[a])&&h.series&&(A(h.series,b),h.isDirty=h.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(m=g.length;m--;)(l=g[m])&&l.destroy&&l.destroy();b.points=null;a.clearTimeout(b.animationTimeout);f(b,function(a,b){a instanceof I&&!a.survive&&(p=d&&"group"===
b?"hide":"destroy",a[p]())});c.hoverSeries===b&&(c.hoverSeries=null);A(c.series,b);c.orderSeries();f(b,function(a,c){delete b[c]})},getGraphPath:function(a,b,c){var d=this,e=d.options,g=e.step,f,m=[],r=[],l;a=a||d.points;(f=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&f&&(g=4-g);!e.connectNulls||b||c||(a=this.getValidPoints(a));n(a,function(f,p){var h=f.plotX,D=f.plotY,u=a[p-1];(f.leftCliff||u&&u.rightCliff)&&!c&&(l=!0);f.isNull&&!C(b)&&0<p?l=!e.connectNulls:f.isNull&&!b?l=!0:(0===p||
l?p=["M",f.plotX,f.plotY]:d.getPointSpline?p=d.getPointSpline(a,f,p):g?(p=1===g?["L",u.plotX,D]:2===g?["L",(u.plotX+h)/2,u.plotY,"L",(u.plotX+h)/2,D]:["L",h,u.plotY],p.push("L",h,D)):p=["L",h,D],r.push(f.x),g&&(r.push(f.x),2===g&&r.push(f.x)),m.push.apply(m,p),l=!1)});m.xMap=r;return d.graphPath=m},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]],d=a.getZonesGraphs(d);n(d,function(d,
g){var e=d[0],f=a[e];f?(f.endX=a.preventGraphAnimation?null:c.xMap,f.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),f={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?f.dashstyle=d[3]:"square"!==b.linecap&&(f["stroke-linecap"]=f["stroke-linejoin"]="round"),f=a[e].attr(f).shadow(2>g&&b.shadow));f&&(f.startX=c.xMap,f.isArea=c.isArea)})},getZonesGraphs:function(a){n(this.zones,function(b,c){a.push(["zone-graph-"+c,
"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||""),b.color||this.color,b.dashStyle||this.options.dashStyle])},this);return a},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,g,f=this.clips||[],m,l=this.graph,h=this.area,u=Math.max(b.chartWidth,b.chartHeight),z=this[(this.zoneAxis||"y")+"Axis"],k,x,v=b.inverted,I,q,t,B,A=!1;d.length&&(l||h)&&z&&void 0!==z.min&&(x=z.reversed,I=z.horiz,l&&!this.showLine&&l.hide(),h&&h.hide(),k=z.getExtremes(),n(d,function(d,p){e=
x?I?b.plotWidth:0:I?0:z.toPixels(k.min);e=Math.min(Math.max(w(g,e),0),u);g=Math.min(Math.max(Math.round(z.toPixels(w(d.value,k.max),!0)),0),u);A&&(e=g=z.toPixels(k.max));q=Math.abs(e-g);t=Math.min(e,g);B=Math.max(e,g);z.isXAxis?(m={x:v?B:t,y:0,width:q,height:u},I||(m.x=b.plotHeight-m.x)):(m={x:0,y:v?B:t,width:u,height:q},I&&(m.y=b.plotWidth-m.y));v&&c.isVML&&(m=z.isXAxis?{x:0,y:x?t:B,height:m.width,width:b.chartWidth}:{x:m.y-b.plotLeft-b.spacingBox.x,y:0,width:m.height,height:b.chartHeight});f[p]?
f[p].animate(m):(f[p]=c.clipRect(m),l&&a["zone-graph-"+p].clip(f[p]),h&&a["zone-area-"+p].clip(f[p]));A=d.value>k.max;a.resetZones&&0===g&&(g=void 0)}),this.clips=f)},invertGroups:function(a){function b(){n(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=E(d,"resize",b),E(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,
e){var g=this[a],f=!g;f&&(this[a]=g=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(C(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[f?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);
return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&F(d.animation).duration,g=a.visible?"inherit":"hidden",m=d.zIndex,l=a.hasRendered,h=b.seriesGroup,u=b.inverted;c=a.plotGroup("group","series",g,m,h);a.markerGroup=a.plotGroup("markerGroup","markers",g,m,h);f&&a.animate(!0);c.inverted=a.isCartesian?u:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();
a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(u);!1===d.clip||a.sharedClipKey||l||c.clip(b.clipRect);f&&a.animate();l||(a.animationTimeout=z(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0;e(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:w(d&&d.left,a.plotLeft),
translateY:w(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,g){var e,f;if(f=c&&c.length)return e=b.kdAxisArray[d%g],c.sort(function(a,b){return a[e]-b[e]}),f=Math.floor(f/2),{point:c[f],left:a(c.slice(0,
f),d+1,g),right:a(c.slice(f+1),d+1,g)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;z(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,p,m){var l=b.point,h=d.kdAxisArray[p%m],u,z,r=l;z=C(a[e])&&C(l[e])?Math.pow(a[e]-l[e],2):null;u=C(a[g])&&C(l[g])?Math.pow(a[g]-l[g],2):null;u=(z||0)+(u||0);l.dist=C(u)?Math.sqrt(u):Number.MAX_VALUE;l.distX=C(z)?
Math.sqrt(z):Number.MAX_VALUE;h=a[h]-l[h];u=0>h?"left":"right";z=0>h?"right":"left";b[u]&&(u=c(a,b[u],p+1,m),r=u[f]<r[f]?u:l);b[z]&&Math.sqrt(h*h)<r[f]&&(a=c(a,b[z],p+1,m),r=a[f]<r[f]?a:r);return r}var d=this,e=this.kdAxisArray[0],g=this.kdAxisArray[1],f=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(J);(function(a){var E=a.Axis,F=a.Chart,G=a.correctFloat,q=a.defined,k=a.destroyObjectProperties,
h=a.each,t=a.format,C=a.objectEach,n=a.pick,A=a.Series;a.StackItem=function(a,e,d,l,h){var b=a.chart.inverted;this.axis=a;this.isNegative=d;this.options=e;this.x=l;this.total=null;this.points={};this.stack=h;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(b?d?"left":"right":"center"),verticalAlign:e.verticalAlign||(b?"middle":d?"bottom":"top"),y:n(e.y,b?4:d?14:-6),x:n(e.x,b?d?-6:6:0)};this.textAlign=e.textAlign||(b?d?"right":"left":"center")};a.StackItem.prototype={destroy:function(){k(this,
this.axis)},render:function(a){var e=this.axis.chart,d=this.options,l=d.format,l=l?t(l,this,e.time):d.formatter.call(this);this.label?this.label.attr({text:l,visibility:"hidden"}):this.label=e.renderer.text(l,null,null,d.useHTML).css(d.style).attr({align:this.textAlign,rotation:d.rotation,visibility:"hidden"}).add(a);this.label.labelrank=e.plotHeight},setOffset:function(a,e){var d=this.axis,l=d.chart,h=d.translate(d.usePercentage?100:this.total,0,0,0,1),b=d.translate(0),b=q(h)&&Math.abs(h-b);a=l.xAxis[0].translate(this.x)+
a;d=q(h)&&this.getStackBox(l,this,a,h,e,b,d);(e=this.label)&&d&&(e.align(this.alignOptions,null,d),d=e.alignAttr,e[!1===this.options.crop||l.isInsidePlot(d.x,d.y)?"show":"hide"](!0))},getStackBox:function(a,e,d,l,h,b,c){var f=e.axis.reversed,k=a.inverted;a=c.height+c.pos-(k?a.plotLeft:a.plotTop);e=e.isNegative&&!f||!e.isNegative&&f;return{x:k?e?l:l-b:d,y:k?a-d-h:e?a-l-b:a-l,width:k?b:h,height:k?h:b}}};F.prototype.getStacks=function(){var a=this;h(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});h(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+n(e.options.stack,""))})};E.prototype.buildStacks=function(){var a=this.series,e=n(this.options.reversedStacks,!0),d=a.length,l;if(!this.isXAxis){this.usePercentage=!1;for(l=d;l--;)a[e?l:d-l-1].setStackedPoints();for(l=0;l<d;l++)a[l].modifyStacks()}};E.prototype.renderStackTotals=function(){var a=this.chart,e=a.renderer,d=this.stacks,l=this.stackTotalGroup;
l||(this.stackTotalGroup=l=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());l.translate(a.plotLeft,a.plotTop);C(d,function(a){C(a,function(a){a.render(l)})})};E.prototype.resetStacks=function(){var a=this,e=a.stacks;a.isXAxis||C(e,function(d){C(d,function(e,h){e.touched<a.stacksTouched?(e.destroy(),delete d[h]):(e.total=null,e.cumulative=null)})})};E.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),C(a,function(a){C(a,function(a){a.cumulative=
a.total})}))};A.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var h=this.processedXData,e=this.processedYData,d=[],l=e.length,k=this.options,b=k.threshold,c=n(k.startFromThreshold&&b,0),f=k.stack,k=k.stacking,w=this.stackKey,x="-"+w,m=this.negStacks,I=this.yAxis,z=I.stacks,u=I.oldStacks,r,t,H,p,D,g,y;I.stacksTouched+=1;for(D=0;D<l;D++)g=h[D],y=e[D],r=this.getStackIndicator(r,g,this.index),p=r.key,H=(t=m&&y<(c?
0:b))?x:w,z[H]||(z[H]={}),z[H][g]||(u[H]&&u[H][g]?(z[H][g]=u[H][g],z[H][g].total=null):z[H][g]=new a.StackItem(I,I.options.stackLabels,t,g,f)),H=z[H][g],null!==y?(H.points[p]=H.points[this.index]=[n(H.cumulative,c)],q(H.cumulative)||(H.base=p),H.touched=I.stacksTouched,0<r.index&&!1===this.singleStacks&&(H.points[p][0]=H.points[this.index+","+g+",0"][0])):H.points[p]=H.points[this.index]=null,"percent"===k?(t=t?w:x,m&&z[t]&&z[t][g]?(t=z[t][g],H.total=t.total=Math.max(t.total,H.total)+Math.abs(y)||
0):H.total=G(H.total+(Math.abs(y)||0))):H.total=G(H.total+(y||0)),H.cumulative=n(H.cumulative,c)+(y||0),null!==y&&(H.points[p].push(H.cumulative),d[D]=H.cumulative);"percent"===k&&(I.usePercentage=!0);this.stackedYData=d;I.oldStacks={}}};A.prototype.modifyStacks=function(){var a=this,e=a.stackKey,d=a.yAxis.stacks,l=a.processedXData,k,b=a.options.stacking;a[b+"Stacker"]&&h([e,"-"+e],function(c){for(var e=l.length,h,x;e--;)if(h=l[e],k=a.getStackIndicator(k,h,a.index,c),x=(h=d[c]&&d[c][h])&&h.points[k.key])a[b+
"Stacker"](x,h,e)})};A.prototype.percentStacker=function(a,e,d){e=e.total?100/e.total:0;a[0]=G(a[0]*e);a[1]=G(a[1]*e);this.stackedYData[d]=a[1]};A.prototype.getStackIndicator=function(a,e,d,h){!q(a)||a.x!==e||h&&a.key!==h?a={x:e,index:0,key:h}:a.index++;a.key=[d,e,a.index].join();return a}})(J);(function(a){var E=a.addEvent,F=a.animate,G=a.Axis,q=a.createElement,k=a.css,h=a.defined,t=a.each,C=a.erase,n=a.extend,A=a.fireEvent,B=a.inArray,e=a.isNumber,d=a.isObject,l=a.isArray,v=a.merge,b=a.objectEach,
c=a.pick,f=a.Point,w=a.Series,x=a.seriesTypes,m=a.setAnimation,I=a.splat;n(a.Chart.prototype,{addSeries:function(a,b,d){var e,f=this;a&&(b=c(b,!0),A(f,"addSeries",{options:a},function(){e=f.initSeries(a);f.isDirtyLegend=!0;f.linkSeries();A(f,"afterAddSeries");b&&f.redraw(d)}));return e},addAxis:function(a,b,d,e){var f=b?"xAxis":"yAxis",p=this.options;a=v(a,{index:this[f].length,isX:b});b=new G(this,a);p[f]=I(p[f]||{});p[f].push(a);c(d,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,
c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&k(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=q("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=q("span",{className:"highcharts-loading-inner"},null,d),E(b,"redraw",f));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;k(d,n(e.style,{zIndex:10}));k(b.loadingSpan,e.labelStyle);b.loadingShown||(k(d,{opacity:0,
display:""}),F(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",F(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){k(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,d,f,m){var l=this,p={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},u=a.chart,g,r,z=[];A(l,"update",{options:a});if(u){v(!0,l.options.chart,u);"className"in u&&l.setClassName(u.className);"reflow"in u&&l.setReflow(u.reflow);if("inverted"in u||"polar"in u||"type"in u)l.propFromSeries(),g=!0;"alignTicks"in u&&(g=!0);b(u,function(a,b){-1!==
B("chart."+b,l.propsRequireUpdateSeries)&&(r=!0);-1!==B(b,l.propsRequireDirtyBox)&&(l.isDirtyBox=!0)});"style"in u&&l.renderer.setStyle(u.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&v(!0,this.options.plotOptions,a.plotOptions);b(a,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[p[b]])l[p[b]](a);"chart"!==b&&-1!==B(b,l.propsRequireUpdateSeries)&&(r=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){var c;
a[b]&&("series"===b&&(c=[],t(l[b],function(a,b){a.options.isInternal||c.push(b)})),t(I(a[b]),function(a,g){(g=h(a.id)&&l.get(a.id)||l[b][c?c[g]:g])&&g.coll===b&&(g.update(a,!1),f&&(g.touched=!0));if(!g&&f)if("series"===b)l.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)l.addAxis(a,"xAxis"===b,!1).touched=!0}),f&&t(l[b],function(a){a.touched||a.options.isInternal?delete a.touched:z.push(a)}))});t(z,function(a){a.remove&&a.remove(!1)});g&&t(l.axes,function(a){a.update({},!1)});r&&t(l.series,
function(a){a.update({},!1)});a.loading&&v(!0,l.options.loading,a.loading);g=u&&u.width;u=u&&u.height;e(g)&&g!==l.chartWidth||e(u)&&u!==l.chartHeight?l.setSize(g,u,m):c(d,!0)&&l.redraw(m);A(l,"afterUpdate",{options:a})},setSubtitle:function(a){this.setTitle(void 0,a)}});n(f.prototype,{update:function(a,b,e,f){function m(){p.applyOptions(a);null===p.y&&g&&(p.graphic=g.destroy());d(a,!0)&&(g&&g.element&&a&&a.marker&&void 0!==a.marker.symbol&&(p.graphic=g.destroy()),a&&a.dataLabels&&p.dataLabel&&(p.dataLabel=
p.dataLabel.destroy()),p.connector&&(p.connector=p.connector.destroy()));h=p.index;l.updateParallelArrays(p,h);r.data[h]=d(r.data[h],!0)||d(a,!0)?p.options:c(a,r.data[h]);l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(u.isDirtyBox=!0);"point"===r.legendType&&(u.isDirtyLegend=!0);b&&u.redraw(e)}var p=this,l=p.series,g=p.graphic,h,u=l.chart,r=l.options;b=c(b,!0);!1===f?m():p.firePointEvent("update",{options:a},m)},remove:function(a,b){this.series.removePoint(B(this,this.series.data),
a,b)}});n(w.prototype,{addPoint:function(a,b,d,e){var f=this.options,p=this.data,m=this.chart,g=this.xAxis,g=g&&g.hasNames&&g.names,l=f.data,h,u,r=this.xData,k,z;b=c(b,!0);h={series:this};this.pointClass.prototype.applyOptions.apply(h,[a]);z=h.x;k=r.length;if(this.requireSorting&&z<r[k-1])for(u=!0;k&&r[k-1]>z;)k--;this.updateParallelArrays(h,"splice",k,0,0);this.updateParallelArrays(h,k);g&&h.name&&(g[z]=h.name);l.splice(k,0,a);u&&(this.data.splice(k,0,null),this.processData());"point"===f.legendType&&
this.generatePoints();d&&(p[0]&&p[0].remove?p[0].remove(!1):(p.shift(),this.updateParallelArrays(h,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&m.redraw(e)},removePoint:function(a,b,d){var e=this,f=e.data,p=f[a],l=e.points,g=e.chart,h=function(){l&&l.length===f.length&&l.splice(a,1);f.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(p||{series:e},"splice",a,1);p&&p.destroy();e.isDirty=!0;e.isDirtyData=!0;b&&g.redraw()};m(d,g);b=c(b,!0);p?p.firePointEvent("remove",null,h):
h()},remove:function(a,b,d){function e(){f.destroy();f.remove=null;p.isDirtyLegend=p.isDirtyBox=!0;p.linkSeries();c(a,!0)&&p.redraw(b)}var f=this,p=f.chart;!1!==d?A(f,"remove",null,e):e()},update:function(b,d){var e=this,f=e.chart,m=e.userOptions,p=e.oldType||e.type,l=b.type||m.type||f.options.chart.type,g=x[p].prototype,h,u=["group","markerGroup","dataLabelsGroup"],k=["navigatorSeries","baseSeries"],z=e.finishedAnimating&&{animation:!1},w=["data","name","turboThreshold"],I=a.keys(b),q=0<I.length;
t(I,function(a){-1===B(a,w)&&(q=!1)});if(q)b.data&&this.setData(b.data,!1),b.name&&this.setName(b.name,!1);else{k=u.concat(k);t(k,function(a){k[a]=e[a];delete e[a]});b=v(m,z,{index:e.index,pointStart:c(m.pointStart,e.xData[0])},{data:e.options.data},b);e.remove(!1,null,!1);for(h in g)e[h]=void 0;x[l||p]?n(e,x[l||p].prototype):a.error(17,!0);t(k,function(a){e[a]=k[a]});e.init(f,b);b.zIndex!==m.zIndex&&t(u,function(a){e[a]&&e[a].attr({zIndex:b.zIndex})});e.oldType=p;f.linkSeries()}A(this,"afterUpdate");
c(d,!0)&&f.redraw(q?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});n(G.prototype,{update:function(a,d){var e=this.chart,f=a&&a.events||{};a=v(this.userOptions,a);e.options[this.coll].indexOf&&(e.options[this.coll][e.options[this.coll].indexOf(this.userOptions)]=a);b(e.options[this.coll].events,function(a,b){"undefined"===typeof f[b]&&(f[b]=void 0)});this.destroy(!0);this.init(e,n(a,{events:f}));e.isDirtyBox=!0;c(d,!0)&&e.redraw()},
remove:function(a){for(var b=this.chart,d=this.coll,e=this.series,f=e.length;f--;)e[f]&&e[f].remove(!1);C(b.axes,this);C(b[d],this);l(b.options[d])?b.options[d].splice(this.options.index,1):delete b.options[d];t(b[d],function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;c(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(J);(function(a){var E=a.color,F=a.each,G=a.map,q=a.pick,k=a.Series,
h=a.seriesType;h("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(h){var k=[],n=[],t=this.xAxis,B=this.yAxis,e=B.stacks[this.stackKey],d={},l=this.index,v=B.series,b=v.length,c,f=q(B.options.reversedStacks,!0)?1:-1,w;h=h||this.points;if(this.options.stacking){for(w=0;w<h.length;w++)h[w].leftNull=h[w].rightNull=null,d[h[w].x]=h[w];a.objectEach(e,function(a,b){null!==a.total&&n.push(b)});n.sort(function(a,b){return a-b});c=G(v,function(){return this.visible});F(n,
function(a,m){var h=0,z,u;if(d[a]&&!d[a].isNull)k.push(d[a]),F([-1,1],function(h){var k=1===h?"rightNull":"leftNull",r=0,p=e[n[m+h]];if(p)for(w=l;0<=w&&w<b;)z=p.points[w],z||(w===l?d[a][k]=!0:c[w]&&(u=e[a].points[w])&&(r-=u[1]-u[0])),w+=f;d[a][1===h?"rightCliff":"leftCliff"]=r});else{for(w=l;0<=w&&w<b;){if(z=e[a].points[w]){h=z[1];break}w+=f}h=B.translate(h,0,1,0,1);k.push({isNull:!0,plotX:t.translate(a,0,0,0,1),x:a,plotY:h,yBottom:h})}})}return k},getGraphPath:function(a){var h=k.prototype.getGraphPath,
n=this.options,t=n.stacking,B=this.yAxis,e,d,l=[],v=[],b=this.index,c,f=B.stacks[this.stackKey],w=n.threshold,x=B.getThreshold(n.threshold),m,n=n.connectNulls||"percent"===t,I=function(d,e,m){var h=a[d];d=t&&f[h.x].points[b];var k=h[m+"Null"]||0;m=h[m+"Cliff"]||0;var p,u,h=!0;m||k?(p=(k?d[0]:d[1])+m,u=d[0]+m,h=!!k):!t&&a[e]&&a[e].isNull&&(p=u=w);void 0!==p&&(v.push({plotX:c,plotY:null===p?x:B.getThreshold(p),isNull:h,isCliff:!0}),l.push({plotX:c,plotY:null===u?x:B.getThreshold(u),doCurve:!1}))};a=
a||this.points;t&&(a=this.getStackPoints(a));for(e=0;e<a.length;e++)if(d=a[e].isNull,c=q(a[e].rectPlotX,a[e].plotX),m=q(a[e].yBottom,x),!d||n)n||I(e,e-1,"left"),d&&!t&&n||(v.push(a[e]),l.push({x:e,plotX:c,plotY:m})),n||I(e,e+1,"right");e=h.call(this,v,!0,!0);l.reversed=!0;d=h.call(this,l,!0,!0);d.length&&(d[0]="L");d=e.concat(d);h=h.call(this,v,!1,n);d.xMap=e.xMap;this.areaPath=d;return h},drawGraph:function(){this.areaPath=[];k.prototype.drawGraph.apply(this);var a=this,h=this.areaPath,n=this.options,
A=[["area","highcharts-area",this.color,n.fillColor]];F(this.zones,function(h,e){A.push(["zone-area-"+e,"highcharts-area highcharts-zone-area-"+e+" "+h.className,h.color||a.color,h.fillColor||n.fillColor])});F(A,function(k){var e=k[0],d=a[e];d?(d.endX=a.preventGraphAnimation?null:h.xMap,d.animate({d:h})):(d=a[e]=a.chart.renderer.path(h).addClass(k[1]).attr({fill:q(k[3],E(k[2]).setOpacity(q(n.fillOpacity,.75)).get()),zIndex:0}).add(a.group),d.isArea=!0);d.startX=h.xMap;d.shiftUnit=n.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(J);
(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,q){var k=G.plotX,h=G.plotY,t=a[q-1];q=a[q+1];var C,n,A,B;if(t&&!t.isNull&&!1!==t.doCurve&&!G.isCliff&&q&&!q.isNull&&!1!==q.doCurve&&!G.isCliff){a=t.plotY;A=q.plotX;q=q.plotY;var e=0;C=(1.5*k+t.plotX)/2.5;n=(1.5*h+a)/2.5;A=(1.5*k+A)/2.5;B=(1.5*h+q)/2.5;A!==C&&(e=(B-n)*(A-k)/(A-C)+h-B);n+=e;B+=e;n>a&&n>h?(n=Math.max(a,h),B=2*h-n):n<a&&n<h&&(n=Math.min(a,h),B=2*h-n);B>q&&B>h?(B=Math.max(q,h),n=2*h-B):B<q&&B<h&&
(B=Math.min(q,h),n=2*h-B);G.rightContX=A;G.rightContY=B}G=["C",E(t.rightContX,t.plotX),E(t.rightContY,t.plotY),E(C,k),E(n,h),k,h];t.rightContX=t.rightContY=null;return G}})})(J);(function(a){var E=a.seriesTypes.area.prototype,F=a.seriesType;F("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,getGraphPath:E.getGraphPath,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(J);(function(a){var E=a.animObject,F=a.color,G=a.each,q=a.extend,k=a.defined,
h=a.isNumber,t=a.merge,C=a.pick,n=a.Series,A=a.seriesType,B=a.svg;A("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){n.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&G(d.series,function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=this,d=a.options,h=a.xAxis,k=a.yAxis,b=h.options.reversedStacks,b=h.reversed&&!b||!h.reversed&&b,c,f={},w=0;!1===d.grouping?w=1:G(a.chart.series,function(b){var d=b.options,e=b.yAxis,h;b.type!==a.type||!b.visible&&a.chart.options.chart.ignoreHiddenSeries||k.len!==e.len||k.pos!==e.pos||
(d.stacking?(c=b.stackKey,void 0===f[c]&&(f[c]=w++),h=f[c]):!1!==d.grouping&&(h=w++),b.columnIndex=h)});var x=Math.min(Math.abs(h.transA)*(h.ordinalSlope||d.pointRange||h.closestPointRange||h.tickInterval||1),h.len),m=x*d.groupPadding,n=(x-2*m)/(w||1),d=Math.min(d.maxPointWidth||h.len,C(d.pointWidth,n*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(n-d)/2+(m+((a.columnIndex||0)+(b?1:0))*n-x/2)*(b?-1:1)};return a.columnMetrics},crispCol:function(a,d,h,k){var b=this.chart,c=this.borderWidth,
e=-(c%2?.5:0),c=c%2?.5:1;b.inverted&&b.renderer.isVML&&(c+=1);this.options.crisp&&(h=Math.round(a+h)+e,a=Math.round(a)+e,h-=a);k=Math.round(d+k)+c;e=.5>=Math.abs(d)&&.5<k;d=Math.round(d)+c;k-=d;e&&k&&(--d,k+=1);return{x:a,y:d,width:h,height:k}},translate:function(){var a=this,d=a.chart,h=a.options,v=a.dense=2>a.closestPointRange*a.xAxis.transA,v=a.borderWidth=C(h.borderWidth,v?0:1),b=a.yAxis,c=h.threshold,f=a.translatedThreshold=b.getThreshold(c),w=C(h.minPointLength,5),x=a.getColumnMetrics(),m=x.width,
I=a.barW=Math.max(m,1+2*v),z=a.pointXOffset=x.offset;d.inverted&&(f-=.5);h.pointPadding&&(I=Math.ceil(I));n.prototype.translate.apply(a);G(a.points,function(e){var h=C(e.yBottom,f),l=999+Math.abs(h),u=m,l=Math.min(Math.max(-l,e.plotY),b.len+l),p=e.plotX+z,D=I,g=Math.min(l,h),y,x=Math.max(l,h)-g;w&&Math.abs(x)<w&&(x=w,y=!b.reversed&&!e.negative||b.reversed&&e.negative,e.y===c&&a.dataMax<=c&&b.min<c&&(y=!y),g=Math.abs(g-f)>w?h-w:f-(y?w:0));k(e.options.pointWidth)&&(u=D=Math.ceil(e.options.pointWidth),
p-=Math.round((u-m)/2));e.barX=p;e.pointWidth=u;e.tooltipPos=d.inverted?[b.len+b.pos-d.plotLeft-l,a.xAxis.len-p-D/2,x]:[p+D/2,l+b.pos-d.plotTop,x];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[p,f,D,0]:[p,g,D,x])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,d){var e=this.options,h,b=this.pointAttrToOptions||{};h=b.stroke||"borderColor";var c=
b["stroke-width"]||"borderWidth",f=a&&a.color||this.color,k=a&&a[h]||e[h]||this.color||f,x=a&&a[c]||e[c]||this[c]||0,b=e.dashStyle;a&&this.zones.length&&(f=a.getZone(),f=a.options.color||f&&f.color||this.color);d&&(a=t(e.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,f=a.color||void 0!==d&&F(f).brighten(a.brightness).get()||f,k=a[h]||k,x=a[c]||x,b=a.dashStyle||b);h={fill:f,stroke:k,"stroke-width":x};b&&(h.dashstyle=b);return h},drawPoints:function(){var a=this,d=this.chart,l=
a.options,k=d.renderer,b=l.animationLimit||250,c;G(a.points,function(e){var f=e.graphic,x=f&&d.pointCount<b?"animate":"attr";if(h(e.plotY)&&null!==e.y){c=e.shapeArgs;if(f)f[x](t(c));else e.graphic=f=k[e.shapeType](c).add(e.group||a.group);l.borderRadius&&f.attr({r:l.borderRadius});f[x](a.pointAttribs(e,e.selected&&"select")).shadow(l.shadow,null,l.stacking&&!l.borderRadius);f.addClass(e.getClassName(),!0)}else f&&(e.graphic=f.destroy())})},animate:function(a){var d=this,e=this.yAxis,h=d.options,b=
this.chart.inverted,c={},f=b?"translateX":"translateY",k;B&&(a?(c.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(h.threshold))),b?c.translateX=a-e.len:c.translateY=a,d.group.attr(c)):(k=d.group.attr(f),d.group.animate({scaleY:1},q(E(d.options.animation),{step:function(a,b){c[f]=k+b.pos*(e.pos-k);d.group.attr(c)}})),d.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&G(d.series,function(d){d.type===a.type&&(d.isDirty=!0)});n.prototype.remove.apply(a,arguments)}})})(J);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(J);(function(a){var E=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)}})})(J);(function(a){var E=a.deg2rad,F=a.isNumber,G=a.pick,q=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,h=this.chart,t=2*(a.slicedOffset||0),C=h.plotWidth-2*t,h=h.plotHeight-2*t,n=a.center,n=[G(n[0],"50%"),G(n[1],"50%"),a.size||"100%",a.innerSize||0],A=Math.min(C,h),B,e;for(B=0;4>B;++B)e=n[B],a=2>B||2===B&&
/%$/.test(e),n[B]=q(e,[C,h,A,n[2]][B])+(a?t:0);n[3]>n[2]&&(n[3]=n[2]);return n},getStartAndEndRadians:function(a,h){a=F(a)?a:0;h=F(h)&&h>a&&360>h-a?h:a+360;return{start:E*(a+-90),end:E*(h+-90)}}}})(J);(function(a){var E=a.addEvent,F=a.CenteredSeriesMixin,G=a.defined,q=a.each,k=a.extend,h=F.getStartAndEndRadians,t=a.inArray,C=a.noop,n=a.pick,A=a.Point,B=a.Series,e=a.seriesType,d=a.setAnimation;e("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,distance:30,enabled:!0,
formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var d=this,b=d.points,
c=d.startAngleRad;a||(q(b,function(a){var b=a.graphic,e=a.shapeArgs;b&&(b.attr({r:a.startR||d.center[3]/2,start:c,end:c}),b.animate({r:e.r,start:e.start,end:e.end},d.options.animation))}),d.animate=null)},updateTotals:function(){var a,d=0,b=this.points,c=b.length,e,h=this.options.ignoreHiddenPoint;for(a=0;a<c;a++)e=b[a],d+=h&&!e.visible?0:e.isNull?0:e.y;this.total=d;for(a=0;a<c;a++)e=b[a],e.percentage=0<d&&(e.visible||!h)?e.y/d*100:0,e.total=d},generatePoints:function(){B.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var d=0,b=this.options,c=b.slicedOffset,e=c+(b.borderWidth||0),l,k,m,I=h(b.startAngle,b.endAngle),z=this.startAngleRad=I.start,I=(this.endAngleRad=I.end)-z,u=this.points,r,q=b.dataLabels.distance,b=b.ignoreHiddenPoint,t,p=u.length,D;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){m=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+d.labelDistance)};for(t=0;t<p;t++){D=u[t];
D.labelDistance=n(D.options.dataLabels&&D.options.dataLabels.distance,q);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,D.labelDistance);l=z+d*I;if(!b||D.visible)d+=D.percentage/100;k=z+d*I;D.shapeType="arc";D.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*l)/1E3,end:Math.round(1E3*k)/1E3};m=(k+l)/2;m>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);D.slicedTranslation={translateX:Math.round(Math.cos(m)*c),translateY:Math.round(Math.sin(m)*c)};k=Math.cos(m)*a[2]/
2;r=Math.sin(m)*a[2]/2;D.tooltipPos=[a[0]+.7*k,a[1]+.7*r];D.half=m<-Math.PI/2||m>Math.PI/2?1:0;D.angle=m;l=Math.min(e,D.labelDistance/5);D.labelPos=[a[0]+k+Math.cos(m)*D.labelDistance,a[1]+r+Math.sin(m)*D.labelDistance,a[0]+k+Math.cos(m)*l,a[1]+r+Math.sin(m)*l,a[0]+k,a[1]+r,0>D.labelDistance?"center":D.half?"right":"left",m]}},drawGraph:null,drawPoints:function(){var a=this,d=a.chart.renderer,b,c,e,h,x=a.options.shadow;x&&!a.shadowGroup&&(a.shadowGroup=d.g("shadow").add(a.group));q(a.points,function(f){c=
f.graphic;if(f.isNull)c&&(f.graphic=c.destroy());else{h=f.shapeArgs;b=f.getTranslate();var m=f.shadowGroup;x&&!m&&(m=f.shadowGroup=d.g("shadow").add(a.shadowGroup));m&&m.attr(b);e=a.pointAttribs(f,f.selected&&"select");c?c.setRadialReference(a.center).attr(e).animate(k(h,b)):(f.graphic=c=d[f.shapeType](h).setRadialReference(a.center).attr(b).add(a.group),c.attr(e).attr({"stroke-linejoin":"round"}).shadow(x,m));c.attr({visibility:f.visible?"inherit":"hidden"});c.addClass(f.getClassName())}})},searchPoint:C,
sortByAngle:function(a,d){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*d})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:F.getCenter,getSymbol:C},{init:function(){A.prototype.init.apply(this,arguments);var a=this,d;a.name=n(a.name,"Slice");d=function(b){a.slice("select"===b.type)};E(a,"select",d);E(a,"unselect",d);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,d){var b=this,c=b.series,e=c.chart,h=c.options.ignoreHiddenPoint;
d=n(d,h);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,c.options.data[t(b,c.data)]=b.options,q(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)}),b.legendItem&&e.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),h&&(c.isDirty=!0),d&&e.redraw())},slice:function(a,e,b){var c=this.series;d(b,c.chart);n(e,!0);this.sliced=this.options.sliced=G(a)?a:!this.sliced;c.options.data[t(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var d=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(d.x,d.y,d.r+a,d.r+a,{innerR:this.shapeArgs.r-1,start:d.start,end:d.end})}})})(J);(function(a){var E=a.addEvent,F=a.arrayMax,G=a.defined,q=a.each,k=a.extend,h=a.format,t=a.map,C=a.merge,n=a.noop,A=a.pick,B=a.relativeLength,e=
a.Series,d=a.seriesTypes,l=a.some,v=a.stableSort,b=a.isArray,c=a.splat;a.distribute=function(b,c,d){function e(a,b){return a.target-b.target}var f,h=!0,k=b,r=[],x;x=0;var w=k.reducedLen||c;for(f=b.length;f--;)x+=b[f].size;if(x>w){v(b,function(a,b){return(b.rank||0)-(a.rank||0)});for(x=f=0;x<=w;)x+=b[f].size,f++;r=b.splice(f-1,b.length)}v(b,e);for(b=t(b,function(a){return{size:a.size,targets:[a.target],align:A(a.align,.5)}});h;){for(f=b.length;f--;)h=b[f],x=(Math.min.apply(0,h.targets)+Math.max.apply(0,
h.targets))/2,h.pos=Math.min(Math.max(0,x-h.size*h.align),c-h.size);f=b.length;for(h=!1;f--;)0<f&&b[f-1].pos+b[f-1].size>b[f].pos&&(b[f-1].size+=b[f].size,b[f-1].targets=b[f-1].targets.concat(b[f].targets),b[f-1].align=.5,b[f-1].pos+b[f-1].size>c&&(b[f-1].pos=c-b[f-1].size),b.splice(f,1),h=!0)}k.push.apply(k,r);f=0;l(b,function(b){var e=0;if(l(b.targets,function(){k[f].pos=b.pos+e;if(Math.abs(k[f].pos-k[f].target)>d)return q(k.slice(0,f+1),function(a){delete a.pos}),k.reducedLen=(k.reducedLen||c)-
.1*c,k.reducedLen>.1*c&&a.distribute(k,c,d),!0;e+=k[f].size;f++}))return!0});v(k,e)};e.prototype.drawDataLabels=function(){function d(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}function e(a,c){var d=[],g;if(b(a)&&!b(c))d=t(a,function(a){return C(a,c)});else if(b(c)&&!b(a))d=t(c,function(b){return C(a,b)});else if(b(a)||b(c))for(g=Math.max(a.length,
c.length);g--;)d[g]=C(a[g],c[g]);else d=C(a,c);return d}var k=this,m=k.chart,l=k.options,z=l.dataLabels,u=k.points,r,n=k.hasRendered||0,v,p=A(z.defer,!!l.animation),D=m.renderer,z=e(e(m.options.plotOptions&&m.options.plotOptions.series&&m.options.plotOptions.series.dataLabels,m.options.plotOptions&&m.options.plotOptions[k.type]&&m.options.plotOptions[k.type].dataLabels),z);if(b(z)||z.enabled||k._hasPointLabels)v=k.plotGroup("dataLabelsGroup","data-labels",p&&!n?"hidden":"visible",z.zIndex||6),p&&
(v.attr({opacity:+n}),n||E(k,"afterAnimate",function(){k.visible&&v.show(!0);v[l.animation?"animate":"attr"]({opacity:1},{duration:200})})),q(u,function(b){r=c(e(z,b.dlOptions||b.options&&b.options.dataLabels));q(r,function(c,g){var e=c.enabled&&!b.isNull&&d(b,c),f,p,u,r,z=b.dataLabels?b.dataLabels[g]:b.dataLabel,x=b.connectors?b.connectors[g]:b.connector,y=!z;e&&(f=b.getLabelConfig(),p=c[b.formatPrefix+"Format"]||c.format,f=G(p)?h(p,f,m.time):(c[b.formatPrefix+"Formatter"]||c.formatter).call(f,c),
p=c.style,u=c.rotation,p.color=A(c.color,p.color,k.color,"#000000"),"contrast"===p.color&&(b.contrastColor=D.getContrast(b.color||k.color),p.color=c.inside||0>A(c.distance,b.labelDistance)||l.stacking?b.contrastColor:"#000000"),l.cursor&&(p.cursor=l.cursor),r={fill:c.backgroundColor,stroke:c.borderColor,"stroke-width":c.borderWidth,r:c.borderRadius||0,rotation:u,padding:c.padding,zIndex:1},a.objectEach(r,function(a,b){void 0===a&&delete r[b]}));!z||e&&G(f)?e&&G(f)&&(z?r.text=f:(b.dataLabels=b.dataLabels||
[],z=b.dataLabels[g]=u?D.text(f,0,-9999).addClass("highcharts-data-label"):D.label(f,0,-9999,c.shape,null,null,c.useHTML,null,"data-label"),g||(b.dataLabel=z),z.addClass(" highcharts-data-label-color-"+b.colorIndex+" "+(c.className||"")+(c.useHTML?" highcharts-tracker":""))),z.options=c,z.attr(r),z.css(p).shadow(c.shadow),z.added||z.add(v),k.alignDataLabel(b,z,c,null,y)):(b.dataLabel=b.dataLabel.destroy(),b.dataLabels&&(1===b.dataLabels.length?delete b.dataLabels:delete b.dataLabels[g]),g||delete b.dataLabel,
x&&(b.connector=b.connector.destroy(),b.connectors&&(1===b.connectors.length?delete b.connectors:delete b.connectors[g])))})});a.fireEvent(this,"afterDrawDataLabels")};e.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,h=f.inverted,m=A(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),l=A(a.plotY,-9999),x=b.getBBox(),p,D=c.rotation,g=c.align,y=this.visible&&(a.series.forceDL||f.isInsidePlot(m,Math.round(l),h)||d&&f.isInsidePlot(m,h?d.x+1:d.y+d.height-1,h)),w="justify"===A(c.overflow,"justify");
if(y&&(p=c.style.fontSize,p=f.renderer.fontMetrics(p,b).b,d=k({x:h?this.yAxis.len-l:m,y:Math.round(h?this.xAxis.len-m:l),width:0,height:0},d),k(c,{width:x.width,height:x.height}),D?(w=!1,m=f.renderer.rotCorr(p,D),m={x:d.x+c.x+d.width/2+m.x,y:d.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*d.height},b[e?"attr":"animate"](m).attr({align:g}),l=(D+720)%360,l=180<l&&360>l,"left"===g?m.y-=l?x.height:0:"center"===g?(m.x-=x.width/2,m.y-=x.height/2):"right"===g&&(m.x-=x.width,m.y-=l?0:x.height),b.placed=
!0,b.alignAttr=m):(b.align(c,null,d),m=b.alignAttr),w&&0<=d.height?a.isLabelJustified=this.justifyDataLabel(b,c,m,x,d,e):A(c.crop,!0)&&(y=f.isInsidePlot(m.x,m.y)&&f.isInsidePlot(m.x+x.width,m.y+x.height)),c.shape&&!D))b[e?"attr":"animate"]({anchorX:h?f.plotWidth-a.plotY:a.plotX,anchorY:h?f.plotHeight-a.plotX:a.plotY});y||(b.attr({y:-9999}),b.placed=!1)};e.prototype.justifyDataLabel=function(a,b,c,d,e,h){var f=this.chart,m=b.align,k=b.verticalAlign,l,p,D=a.box?0:a.padding||0;l=c.x+D;0>l&&("right"===
m?b.align="left":b.x=-l,p=!0);l=c.x+d.width-D;l>f.plotWidth&&("left"===m?b.align="right":b.x=f.plotWidth-l,p=!0);l=c.y+D;0>l&&("bottom"===k?b.verticalAlign="top":b.y=-l,p=!0);l=c.y+d.height-D;l>f.plotHeight&&("top"===k?b.verticalAlign="bottom":b.y=f.plotHeight-l,p=!0);p&&(a.placed=!h,a.align(b,null,e));return p};d.pie&&(d.pie.prototype.drawDataLabels=function(){var b=this,c=b.data,d,h=b.chart,l=b.options.dataLabels,k=A(l.connectorPadding,10),u=A(l.connectorWidth,1),r=h.plotWidth,n=h.plotHeight,v=
Math.round(h.chartWidth/3),p,D=b.center,g=D[2]/2,y=D[1],t,B,C,N,E=[[],[]],M,P,S,X,J=[0,0,0,0];b.visible&&(l.enabled||b._hasPointLabels)&&(q(c,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),e.prototype.drawDataLabels.apply(b),q(c,function(a){a.dataLabel&&(a.visible?(E[a.half].push(a),a.dataLabel._pos=null,!G(l.style.width)&&!G(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&
a.dataLabel.getBBox().width>v&&(a.dataLabel.css({width:.7*v}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),q(E,function(c,e){var f,p,m=c.length,u=[],z;if(m)for(b.sortByAngle(c,e-.5),0<b.maxLabelDistance&&(f=Math.max(0,y-g-b.maxLabelDistance),p=Math.min(y+g+b.maxLabelDistance,h.plotHeight),q(c,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,y-g-a.labelDistance),a.bottom=Math.min(y+g+a.labelDistance,h.plotHeight),
z=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPos[1]-a.top+z/2,size:z,rank:a.y},u.push(a.distributeBox))}),f=p+z-f,a.distribute(u,f,f/5)),X=0;X<m;X++)d=c[X],C=d.labelPos,t=d.dataLabel,S=!1===d.visible?"hidden":"inherit",P=f=C[1],u&&G(d.distributeBox)&&(void 0===d.distributeBox.pos?S="hidden":(N=d.distributeBox.size,P=d.top+d.distributeBox.pos)),delete d.positionIndex,M=l.justify?D[0]+(e?-1:1)*(g+d.labelDistance):b.getX(P<d.top+2||P>d.bottom-2?f:P,e,d),t._attr={visibility:S,align:C[6]},
t._pos={x:M+l.x+({left:k,right:-k}[C[6]]||0),y:P+l.y-10},C.x=M,C.y=P,A(l.crop,!0)&&(B=t.getBBox().width,f=null,M-B<k&&1===e?(f=Math.round(B-M+k),J[3]=Math.max(f,J[3])):M+B>r-k&&0===e&&(f=Math.round(M+B-r+k),J[1]=Math.max(f,J[1])),0>P-N/2?J[0]=Math.max(Math.round(-P+N/2),J[0]):P+N/2>n&&(J[2]=Math.max(Math.round(P+N/2-n),J[2])),t.sideOverflow=f)}),0===F(J)||this.verifyDataLabelOverflow(J))&&(this.placeDataLabels(),u&&q(this.points,function(a){var c;p=a.connector;if((t=a.dataLabel)&&t._pos&&a.visible&&
0<a.labelDistance){S=t._attr.visibility;if(c=!p)a.connector=p=h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(b.dataLabelsGroup),p.attr({"stroke-width":u,stroke:l.connectorColor||a.color||"#666666"});p[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});p.attr("visibility",S)}else p&&(a.connector=p.destroy())}))},d.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return A(this.options.dataLabels.softConnector,
!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},d.pie.prototype.placeDataLabels=function(){q(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=
!0):b&&b.attr({y:-9999}))},this)},d.pie.prototype.alignDataLabel=n,d.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f,h=null!==c.size;h||(null!==d[0]?f=Math.max(b[2]-Math.max(a[1],a[3]),e):(f=Math.max(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2),null!==d[1]?f=Math.max(Math.min(f,b[2]-Math.max(a[0],a[2])),e):(f=Math.max(Math.min(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2),f<b[2]?(b[2]=f,b[3]=Math.min(B(c.innerSize||0,f),f),this.translate(b),this.drawDataLabels&&
this.drawDataLabels()):h=!0);return h});d.column&&(d.column.prototype.alignDataLabel=function(a,b,c,d,h){var f=this.chart.inverted,m=a.series,l=a.dlBox||a.shapeArgs,k=A(a.below,a.plotY>A(this.translatedThreshold,m.yAxis.len)),x=A(c.inside,!!this.options.stacking);l&&(d=C(l),0>d.y&&(d.height+=d.y,d.y=0),l=d.y+d.height-m.yAxis.len,0<l&&(d.height-=l),f&&(d={x:m.yAxis.len-d.y-d.height,y:m.xAxis.len-d.x-d.width,width:d.height,height:d.width}),x||(f?(d.x+=k?0:d.width,d.width=0):(d.y+=k?d.height:0,d.height=
0)));c.align=A(c.align,!f||x?"center":k?"right":"left");c.verticalAlign=A(c.verticalAlign,f||x?"middle":k?"top":"bottom");e.prototype.alignDataLabel.call(this,a,b,c,d,h);a.isLabelJustified&&a.contrastColor&&b.css({color:a.contrastColor})})})(J);(function(a){var E=a.Chart,F=a.each,G=a.isArray,q=a.objectEach,k=a.pick;a=a.addEvent;a(E,"render",function(){var a=[];F(this.labelCollectors||[],function(h){a=a.concat(h())});F(this.yAxis||[],function(h){h.options.stackLabels&&!h.options.stackLabels.allowOverlap&&
q(h.stacks,function(h){q(h,function(h){a.push(h.label)})})});F(this.series||[],function(h){var q=h.options.dataLabels;h.visible&&(!1!==q.enabled||h._hasPointLabels)&&F(h.points,function(h){if(h.visible){var n=G(h.dataLabels)?h.dataLabels:h.dataLabel?[h.dataLabel]:[];F(n,function(n){var e=n.options;n.labelrank=k(e.labelrank,h.labelrank,h.shapeArgs&&h.shapeArgs.height);e.allowOverlap||a.push(n)})}})});this.hideOverlappingLabels(a)});E.prototype.hideOverlappingLabels=function(a){var h=a.length,k=this.renderer,
n,q,B,e,d,l,v=function(a,c,d,e,h,m,l,k){return!(h>a+d||h+l<a||m>c+e||m+k<c)};B=function(a){var b,d,e,h=a.box?0:a.padding||0;e=0;if(a&&(!a.alignAttr||a.placed))return b=a.alignAttr||{x:a.attr("x"),y:a.attr("y")},d=a.parentGroup,a.width||(e=a.getBBox(),a.width=e.width,a.height=e.height,e=k.fontMetrics(null,a.element).h),{x:b.x+(d.translateX||0)+h,y:b.y+(d.translateY||0)+h-e,width:a.width-2*h,height:a.height-2*h}};for(q=0;q<h;q++)if(n=a[q])n.oldOpacity=n.opacity,n.newOpacity=1,n.absoluteBox=B(n);a.sort(function(a,
c){return(c.labelrank||0)-(a.labelrank||0)});for(q=0;q<h;q++)for(l=(B=a[q])&&B.absoluteBox,n=q+1;n<h;++n)if(d=(e=a[n])&&e.absoluteBox,l&&d&&B!==e&&0!==B.newOpacity&&0!==e.newOpacity&&(d=v(l.x,l.y,l.width,l.height,d.x,d.y,d.width,d.height)))(B.labelrank<e.labelrank?B:e).newOpacity=0;F(a,function(a){var b,d;a&&(d=a.newOpacity,a.oldOpacity!==d&&(a.alignAttr&&a.placed?(d?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=d,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)):a.attr({opacity:d})),a.isOld=
!0)})}})(J);(function(a){var E=a.addEvent,F=a.Chart,G=a.createElement,q=a.css,k=a.defaultOptions,h=a.defaultPlotOptions,t=a.each,C=a.extend,n=a.fireEvent,A=a.hasTouch,B=a.inArray,e=a.isObject,d=a.Legend,l=a.merge,v=a.pick,b=a.Point,c=a.Series,f=a.seriesTypes,w=a.svg,x;x=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&
(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(A)a[d].on("touchstart",c);a.options.cursor&&a[d].css(q).css({cursor:a.options.cursor})}}),a._hasTracking=!0);n(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=
f.pointer,p=f.renderer,l=f.options.tooltip.snap,g=a.tracker,k,x=function(){if(f.hoverSeries!==a)a.onMouseOver()},v="rgba(192,192,192,"+(w?.0001:.002)+")";if(e&&!c)for(k=e+1;k--;)"M"===d[k]&&d.splice(k+1,0,d[k+1]-l,d[k+2],"L"),(k&&"M"===d[k]||k===e)&&d.splice(k,0,"L",d[k-2]+l,d[k-1]);g?g.attr({d:d}):a.graph&&(a.tracker=p.path(d).attr({"stroke-linejoin":"round",stroke:v,fill:c?v:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":
"highcharts-tracker-line").add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",x).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(A)a.on("touchstart",x)}));n(this,"afterDrawTracker")}};f.column&&(f.column.prototype.drawTracker=x.drawTrackerPoint);f.pie&&(f.pie.prototype.drawTracker=x.drawTrackerPoint);f.scatter&&(f.scatter.prototype.drawTracker=x.drawTrackerPoint);k.legend.itemStyle.cursor="pointer";C(d.prototype,
{setItemEvents:function(a,c,d){var e=this,f=e.chart.renderer.boxWrapper,h="highcharts-legend-"+(a instanceof b?"point":"series")+"-active";(d?c:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(h);c.css(e.options.itemHoverStyle)}).on("mouseout",function(){c.css(l(a.visible?e.itemStyle:e.itemHiddenStyle));f.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};f.removeClass(h);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",
b,c):n(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){n(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});C(F.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=k.lang,d=b.options.chart.resetZoomButton,e=d.theme,f=
e.states,h="chart"===d.relativeTo?null:"plotBox";n(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,f&&f.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,h)})},zoomOut:function(){n(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b,c=this.pointer,d=!1,f;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom()}),c.initiated=!1):t(a.xAxis.concat(a.yAxis),
function(a){var e=a.axis;c[e.isXAxis?"zoomX":"zoomY"]&&(b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0))});f=this.resetZoomButton;d&&!f?this.showResetZoom():!d&&e(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(v(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],g=(b.pointRange||
0)/2,k=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,l=b.getExtremes(),m=b.toValue(h-f,!0)+g*k,k=b.toValue(h+b.len-f,!0)-g*k,u=k<m,h=u?k:m,m=u?m:k,k=Math.min(l.dataMin,g?l.min:b.toValue(b.toPixels(l.min)-b.minPixelPadding)),g=Math.max(l.dataMax,g?l.max:b.toValue(b.toPixels(l.max)+b.minPixelPadding)),u=k-h;0<u&&(m+=u,h=k);u=m-g;0<u&&(m=g,h-=u);b.series.length&&h!==l.min&&m!==l.max&&(b.setExtremes(h,m,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);q(c.container,{cursor:"move"})}});C(b.prototype,
{select:function(a,b){var c=this,d=c.series,e=d.chart;a=v(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[B(c,d.data)]=c.options;c.setState(a&&"select");b||t(e.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[B(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,
b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=l(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){E(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,e=this.series,f=e.options.states[a||"normal"]||{},k=
h[e.type].marker&&e.options.marker,p=k&&!1===k.enabled,l=k&&k.states&&k.states[a||"normal"]||{},g=!1===l.enabled,m=e.stateMarkerGraphic,x=this.marker||{},w=e.chart,q=e.halo,t,A=k&&e.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===f.enabled||a&&(g||p&&!1===l.enabled)||a&&x.states&&x.states[a]&&!1===x.states[a].enabled)){A&&(t=e.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+
a),this.graphic.animate(e.pointAttribs(this,a),v(w.options.chart.animation,f.animation)),t&&this.graphic.animate(t,v(w.options.chart.animation,l.animation,k.animation)),m&&m.hide();else{if(a&&l){k=x.symbol||e.symbol;m&&m.currentSymbol!==k&&(m=m.destroy());if(m)m[b?"animate":"attr"]({x:t.x,y:t.y});else k&&(e.stateMarkerGraphic=m=w.renderer.symbol(k,t.x,t.y,t.width,t.height).add(e.markerGroup),m.currentSymbol=k);m&&m.attr(e.pointAttribs(this,a))}m&&(m[a&&w.isInsidePlot(c,d,w.inverted)?"show":"hide"](),
m.element.point=this)}(c=f.halo)&&c.size?(q||(e.halo=q=w.renderer.path().add((this.graphic||m).parentGroup)),q.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),q.attr({"class":"highcharts-halo highcharts-color-"+v(this.colorIndex,e.colorIndex)+(this.className?" "+this.className:""),zIndex:-1}),q.point=this,q.attr(C({fill:this.color||e.color,"fill-opacity":c.opacity},c.attributes))):q&&q.point&&q.point.haloPath&&q.animate({d:q.point.haloPath(0)},null,q.hide);this.state=a;n(this,"afterSetState")}},
haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});C(c.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&n(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&n(this,"mouseOut");!c||this.stickyTracking||
c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(f={"stroke-width":f},d.animate(f,v(e[a||"normal"]&&e[a||"normal"].animation,
b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(f),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,p=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!p:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&
t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);n(c,f);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);n(this,a?"select":"unselect")},drawTracker:x.drawTrackerGraph})})(J);(function(a){var E=a.Chart,F=a.each,G=a.inArray,q=a.isArray,k=a.isObject,h=a.pick,t=a.splat;
E.prototype.setResponsive=function(h){var k=this.options.responsive,q=[],t=this.currentResponsive;k&&k.rules&&F(k.rules,function(d){void 0===d._id&&(d._id=a.uniqueKey());this.matchResponsiveRule(d,q,h)},this);var e=a.merge.apply(0,a.map(q,function(d){return a.find(k.rules,function(a){return a._id===d}).chartOptions})),q=q.toString()||void 0;q!==(t&&t.ruleIds)&&(t&&this.update(t.undoOptions,h),q?(this.currentResponsive={ruleIds:q,mergedOptions:e,undoOptions:this.currentOptions(e)},this.update(e,h)):
this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,k){var n=a.condition;(n.callback||function(){return this.chartWidth<=h(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=h(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=h(n.minWidth,0)&&this.chartHeight>=h(n.minHeight,0)}).call(this)&&k.push(a._id)};E.prototype.currentOptions=function(h){function n(h,e,d,l){var v;a.objectEach(h,function(a,c){if(!l&&-1<G(c,["series","xAxis","yAxis"]))for(a=t(a),d[c]=[],v=0;v<a.length;v++)e[c][v]&&
(d[c][v]={},n(a[v],e[c][v],d[c][v],l+1));else k(a)?(d[c]=q(a)?[]:{},n(a,e[c]||{},d[c],l+1)):d[c]=e[c]||null})}var A={};n(h,this.options,A,0);return A}})(J);(function(a){var E=a.addEvent,F=a.Axis,G=a.Chart,q=a.css,k=a.defined,h=a.each,t=a.extend,C=a.noop,n=a.pick,A=a.timeUnits,B=a.wrap;B(a.Series.prototype,"init",function(a){var d;a.apply(this,Array.prototype.slice.call(arguments,1));(d=this.xAxis)&&d.options.ordinal&&E(this,"updatedData",function(){delete d.ordinalIndex})});B(F.prototype,"getTimeTicks",
function(a,d,h,n,b,c,f,w){var e=0,l,v,z={},u,r,q,t=[],p=-Number.MAX_VALUE,D=this.options.tickPixelInterval,g=this.chart.time;if(!this.options.ordinal&&!this.options.breaks||!c||3>c.length||void 0===h)return a.call(this,d,h,n,b);r=c.length;for(l=0;l<r;l++){q=l&&c[l-1]>n;c[l]<h&&(e=l);if(l===r-1||c[l+1]-c[l]>5*f||q){if(c[l]>p){for(v=a.call(this,d,c[e],c[l],b);v.length&&v[0]<=p;)v.shift();v.length&&(p=v[v.length-1]);t=t.concat(v)}e=l+1}if(q)break}a=v.info;if(w&&a.unitRange<=A.hour){l=t.length-1;for(e=
1;e<l;e++)g.dateFormat("%d",t[e])!==g.dateFormat("%d",t[e-1])&&(z[t[e]]="day",u=!0);u&&(z[t[0]]="day");a.higherRanks=z}t.info=a;if(w&&k(D)){w=g=t.length;l=[];var y;for(u=[];w--;)e=this.translate(t[w]),y&&(u[w]=y-e),l[w]=y=e;u.sort();u=u[Math.floor(u.length/2)];u<.6*D&&(u=null);w=t[g-1]>n?g-1:g;for(y=void 0;w--;)e=l[w],n=Math.abs(y-e),y&&n<.8*D&&(null===u||n<.8*u)?(z[t[w]]&&!z[t[w+1]]?(n=w+1,y=e):n=w,t.splice(n,1)):y=e}return t});t(F.prototype,{beforeSetTickPositions:function(){var a,d=[],l,v=!1,b,
c=this.getExtremes(),f=c.min,w=c.max,x,m=this.isXAxis&&!!this.options.breaks,c=this.options.ordinal,q=Number.MAX_VALUE,z=this.chart.options.chart.ignoreHiddenSeries;b="highcharts-navigator-xaxis"===this.options.className;var u;!this.options.overscroll||this.max!==this.dataMax||this.chart.mouseIsDown&&!b||this.eventArgs&&(!this.eventArgs||"navigator"===this.eventArgs.trigger)||(this.max+=this.options.overscroll,!b&&k(this.userMin)&&(this.min+=this.options.overscroll));if(c||m){h(this.series,function(b,
c){l=[];if(!(z&&!1===b.visible||!1===b.takeOrdinalPosition&&!m)&&(d=d.concat(b.processedXData),a=d.length,d.sort(function(a,b){return a-b}),q=Math.min(q,n(b.closestPointRange,q)),a)){for(c=0;c<a-1;)d[c]!==d[c+1]&&l.push(d[c+1]),c++;l[0]!==d[0]&&l.unshift(d[0]);d=l}b.isSeriesBoosting&&(u=!0)});u&&(d.length=0);a=d.length;if(2<a){b=d[1]-d[0];for(x=a-1;x--&&!v;)d[x+1]-d[x]!==b&&(v=!0);!this.options.keepOrdinalPadding&&(d[0]-f>b||w-d[d.length-1]>b)&&(v=!0)}else this.options.overscroll&&(2===a?q=d[1]-d[0]:
1===a?(q=this.options.overscroll,d=[d[0],d[0]+q]):q=this.overscrollPointsRange);v?(this.options.overscroll&&(this.overscrollPointsRange=q,d=d.concat(this.getOverscrollPositions())),this.ordinalPositions=d,b=this.ordinal2lin(Math.max(f,d[0]),!0),x=Math.max(this.ordinal2lin(Math.min(w,d[d.length-1]),!0),1),this.ordinalSlope=w=(w-f)/(x-b),this.ordinalOffset=f-b*w):(this.overscrollPointsRange=n(this.closestPointRange,this.overscrollPointsRange),this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=
void 0)}this.isOrdinal=c&&v;this.groupIntervalFactor=null},val2lin:function(a,d){var e=this.ordinalPositions;if(e){var h=e.length,b,c;for(b=h;b--;)if(e[b]===a){c=b;break}for(b=h-1;b--;)if(a>e[b]||0===b){a=(a-e[b])/(e[b+1]-e[b]);c=b+a;break}d=d?c:this.ordinalSlope*(c||0)+this.ordinalOffset}else d=a;return d},lin2val:function(a,d){var e=this.ordinalPositions;if(e){var h=this.ordinalSlope,b=this.ordinalOffset,c=e.length-1,f;if(d)0>a?a=e[0]:a>c?a=e[c]:(c=Math.floor(a),f=a-c);else for(;c--;)if(d=h*c+b,
a>=d){h=h*(c+1)+b;f=(a-d)/(h-d);break}return void 0!==f&&void 0!==e[c]?e[c]+(f?f*(e[c+1]-e[c]):0):a}return a},getExtendedPositions:function(){var a=this,d=a.chart,k=a.series[0].currentDataGrouping,n=a.ordinalIndex,b=k?k.count+k.unitName:"raw",c=a.options.overscroll,f=a.getExtremes(),w,x;n||(n=a.ordinalIndex={});n[b]||(w={series:[],chart:d,getExtremes:function(){return{min:f.dataMin,max:f.dataMax+c}},options:{ordinal:!0},val2lin:F.prototype.val2lin,ordinal2lin:F.prototype.ordinal2lin},h(a.series,function(b){x=
{xAxis:w,xData:b.xData.slice(),chart:d,destroyGroupedData:C};x.xData=x.xData.concat(a.getOverscrollPositions());x.options={dataGrouping:k?{enabled:!0,forced:!0,approximation:"open",units:[[k.unitName,[k.count]]]}:{enabled:!1}};b.processData.apply(x);w.series.push(x)}),a.beforeSetTickPositions.apply(w),n[b]=w.ordinalPositions);return n[b]},getOverscrollPositions:function(){var e=this.options.overscroll,d=this.overscrollPointsRange,h=[],k=this.dataMax;if(a.defined(d))for(h.push(k);k<=this.dataMax+e;)k+=
d,h.push(k);return h},getGroupIntervalFactor:function(a,d,h){var e;h=h.processedXData;var b=h.length,c=[];e=this.groupIntervalFactor;if(!e){for(e=0;e<b-1;e++)c[e]=h[e+1]-h[e];c.sort(function(a,b){return a-b});c=c[Math.floor(b/2)];a=Math.max(a,h[0]);d=Math.min(d,h[b-1]);this.groupIntervalFactor=e=b*c/(d-a)}return e},postProcessTickInterval:function(a){var d=this.ordinalSlope;return d?this.options.breaks?this.closestPointRange||a:a/(d/this.closestPointRange):a}});F.prototype.ordinal2lin=F.prototype.val2lin;
B(G.prototype,"pan",function(a,d){var e=this.xAxis[0],k=e.options.overscroll,b=d.chartX,c=!1;if(e.options.ordinal&&e.series.length){var f=this.mouseDownX,n=e.getExtremes(),x=n.dataMax,m=n.min,t=n.max,z=this.hoverPoints,u=e.closestPointRange||e.overscrollPointsRange,f=(f-b)/(e.translationSlope*(e.ordinalSlope||u)),r={ordinalPositions:e.getExtendedPositions()},u=e.lin2val,A=e.val2lin,B;r.ordinalPositions?1<Math.abs(f)&&(z&&h(z,function(a){a.setState()}),0>f?(z=r,B=e.ordinalPositions?e:r):(z=e.ordinalPositions?
e:r,B=r),r=B.ordinalPositions,x>r[r.length-1]&&r.push(x),this.fixedRange=t-m,f=e.toFixedRange(null,null,u.apply(z,[A.apply(z,[m,!0])+f,!0]),u.apply(B,[A.apply(B,[t,!0])+f,!0])),f.min>=Math.min(n.dataMin,m)&&f.max<=Math.max(x,t)+k&&e.setExtremes(f.min,f.max,!0,!1,{trigger:"pan"}),this.mouseDownX=b,q(this.container,{cursor:"move"})):c=!0}else c=!0;c&&(k&&(e.max=e.dataMax+k),a.apply(this,Array.prototype.slice.call(arguments,1)))})})(J);(function(a){function E(){return Array.prototype.slice.call(arguments,
1)}function F(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,q(this.pointArrayMap,["y"]))}var G=a.addEvent,q=a.pick,k=a.wrap,h=a.each,t=a.extend,C=a.isArray,n=a.fireEvent,A=a.Axis,B=a.Series;t(A.prototype,{isInBreak:function(a,d){var e=a.repeat||Infinity,h=a.from,b=a.to-a.from;d=d>=h?(d-h)%e:e-(h-d)%e;return a.inclusive?d<=b:d<b&&0!==d},isInAnyBreak:function(a,d){var e=this.options.breaks,h=e&&e.length,b,c,f;if(h){for(;h--;)this.isInBreak(e[h],a)&&(b=!0,c||(c=q(e[h].showPoints,
this.isXAxis?!1:!0)));f=b&&d?b&&!c:b}return f}});G(A,"afterInit",function(){"function"===typeof this.setBreaks&&this.setBreaks(this.options.breaks,!1)});G(A,"afterSetTickPositions",function(){if(this.isBroken){var a=this.tickPositions,d=this.tickPositions.info,h=[],k;for(k=0;k<a.length;k++)this.isInAnyBreak(a[k])||h.push(a[k]);this.tickPositions=h;this.tickPositions.info=d}});G(A,"afterSetOptions",function(){this.isBroken&&(this.options.ordinal=!1)});A.prototype.setBreaks=function(a,d){function e(a){var c=
a,d,e;for(e=0;e<b.breakArray.length;e++)if(d=b.breakArray[e],d.to<=a)c-=d.len;else if(d.from>=a)break;else if(b.isInBreak(d,a)){c-=a-d.from;break}return c}function k(a){var c,d;for(d=0;d<b.breakArray.length&&!(c=b.breakArray[d],c.from>=a);d++)c.to<a?a+=c.len:b.isInBreak(c,a)&&(a+=c.len);return a}var b=this,c=C(a)&&!!a.length;b.isDirty=b.isBroken!==c;b.isBroken=c;b.options.breaks=b.userOptions.breaks=a;b.forceRedraw=!0;c||b.val2lin!==e||(delete b.val2lin,delete b.lin2val);c&&(b.userOptions.ordinal=
!1,b.val2lin=e,b.lin2val=k,b.setExtremes=function(a,b,c,d,e){if(this.isBroken){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange}A.prototype.setExtremes.call(this,a,b,c,d,e)},b.setAxisTranslation=function(a){A.prototype.setAxisTranslation.call(this,a);this.unitLength=null;if(this.isBroken){a=b.options.breaks;var c=[],d=[],e=0,f,k,l=b.userMin||b.min,r=b.userMax||b.max,t=q(b.pointRangePadding,0),v,p;h(a,function(a){k=a.repeat||Infinity;b.isInBreak(a,
l)&&(l+=a.to%k-l%k);b.isInBreak(a,r)&&(r-=r%k-a.from%k)});h(a,function(a){v=a.from;for(k=a.repeat||Infinity;v-k>l;)v-=k;for(;v<l;)v+=k;for(p=v;p<r;p+=k)c.push({value:p,move:"in"}),c.push({value:p+(a.to-a.from),move:"out",size:a.breakSize})});c.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});f=0;v=l;h(c,function(a){f+="in"===a.move?1:-1;1===f&&"in"===a.move&&(v=a.value);0===f&&(d.push({from:v,to:a.value,len:a.value-v-(a.size||0)}),e+=a.value-v-
(a.size||0))});b.breakArray=d;b.unitLength=r-l-e+t;n(b,"afterBreaks");b.staticScale?b.transA=b.staticScale:b.unitLength&&(b.transA*=(r-b.min+t)/b.unitLength);t&&(b.minPixelPadding=b.transA*b.minPointOffset);b.min=l;b.max=r}});q(d,!0)&&this.chart.redraw()};k(B.prototype,"generatePoints",function(a){a.apply(this,E(arguments));var d=this.xAxis,e=this.yAxis,h=this.points,b,c=h.length,f=this.options.connectNulls,k;if(d&&e&&(d.options.breaks||e.options.breaks))for(;c--;)b=h[c],k=null===b.y&&!1===f,k||!d.isInAnyBreak(b.x,
!0)&&!e.isInAnyBreak(b.y,!0)||(h.splice(c,1),this.data[c]&&this.data[c].destroyElements())});a.Series.prototype.drawBreaks=function(a,d){var e=this,k=e.points,b,c,f,w;a&&h(d,function(d){b=a.breakArray||[];c=a.isXAxis?a.min:q(e.options.threshold,a.min);h(k,function(e){w=q(e["stack"+d.toUpperCase()],e[d]);h(b,function(b){f=!1;if(c<b.from&&w>b.to||c>b.from&&w<b.from)f="pointBreak";else if(c<b.from&&w>b.from&&w<b.to||c>b.from&&w>b.to&&w<b.from)f="pointInBreak";f&&n(a,f,{point:e,brk:b})})})})};a.Series.prototype.gappedPath=
function(){var e=this.currentDataGrouping,d=e&&e.totalRange,e=this.options.gapSize,h=this.points.slice(),k=h.length-1,b=this.yAxis;if(e&&0<k)for("value"!==this.options.gapUnit&&(e*=this.closestPointRange),d&&d>e&&(e=d);k--;)h[k+1].x-h[k].x>e&&(d=(h[k].x+h[k+1].x)/2,h.splice(k+1,0,{isNull:!0,x:d}),this.options.stacking&&(d=b.stacks[this.stackKey][d]=new a.StackItem(b,b.options.stackLabels,!1,d,this.stack),d.total=0));return this.getGraphPath(h)};k(a.seriesTypes.column.prototype,"drawPoints",F);k(a.Series.prototype,
"drawPoints",F)})(J);(function(a){var E=a.addEvent,F=a.arrayMax,G=a.arrayMin,q=a.Axis,k=a.defaultPlotOptions,h=a.defined,t=a.each,C=a.extend,n=a.format,A=a.isNumber,B=a.merge,e=a.pick,d=a.Point,l=a.Series,v=a.Tooltip,b=a.wrap,c=l.prototype,f=c.processData,w=c.generatePoints,x={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M",
"%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},m={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",
groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},I=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],z=a.approximations={sum:function(a){var b=a.length,c;if(!b&&a.hasNulls)c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var b=a.length;a=z.sum(a);A(a)&&b&&(a/=b);return a},averages:function(){var a=
[];t(arguments,function(b){a.push(z.average(b))});return void 0===a[0]?void 0:a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?F(a):a.hasNulls?null:void 0},low:function(a){return a.length?G(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,b,c,d){a=z.open(a);b=z.high(b);c=z.low(c);d=z.close(d);if(A(a)||A(b)||A(c)||A(d))return[a,b,c,d]},range:function(a,b){a=z.low(a);b=z.high(b);if(A(a)||
A(b))return[a,b];if(null===a&&null===b)return null}};c.groupData=function(a,b,c,d){var e=this,f=e.data,g=e.options.data,k=[],l=[],n=[],r=a.length,u,q,w=!!b,v=[];d="function"===typeof d?d:z[d]||m[e.type]&&z[m[e.type].approximation]||z[x.approximation];var C=e.pointArrayMap,I=C&&C.length,H=["x"].concat(C||["y"]),E=0,F=0,K,G;I?t(C,function(){v.push([])}):v.push([]);K=I||1;for(G=0;G<=r&&!(a[G]>=c[0]);G++);for(G;G<=r;G++){for(;void 0!==c[E+1]&&a[G]>=c[E+1]||G===r;){u=c[E];e.dataGroupInfo={start:F,length:v[0].length};
q=d.apply(e,v);h(e.dataGroupInfo.options)||(e.dataGroupInfo.options=B(e.pointClass.prototype.optionsToObject.call({series:e},e.options.data[F])),t(H,function(a){delete e.dataGroupInfo.options[a]}));void 0!==q&&(k.push(u),l.push(q),n.push(e.dataGroupInfo));F=G;for(u=0;u<K;u++)v[u].length=0,v[u].hasNulls=!1;E+=1;if(G===r)break}if(G===r)break;if(C){u=e.cropStart+G;q=f&&f[u]||e.pointClass.prototype.applyOptions.apply({series:e},[g[u]]);var J;for(u=0;u<I;u++)J=q[C[u]],A(J)?v[u].push(J):null===J&&(v[u].hasNulls=
!0)}else u=w?b[G]:null,A(u)?v[0].push(u):null===u&&(v[0].hasNulls=!0)}return[k,l,n]};c.processData=function(){var a=this.chart,b=this.options.dataGrouping,d=!1!==this.allowDG&&b&&e(b.enabled,a.options.isStock),k=this.visible||!a.options.chart.ignoreHiddenSeries,p,l=this.currentDataGrouping,g;this.forceCrop=d;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==f.apply(this,arguments)&&d){this.destroyGroupedData();var m,n=b.groupAll?this.xData:this.processedXData,x=b.groupAll?this.yData:this.processedYData,
z=a.plotSizeX,a=this.xAxis,q=a.options.ordinal,w=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(w){this.isDirty=p=!0;this.points=null;d=a.getExtremes();g=d.min;d=d.max;q=q&&a.getGroupIntervalFactor(g,d,this)||1;w=w*(d-g)/z*q;z=a.getTimeTicks(a.normalizeTimeTickInterval(w,b.units||I),Math.min(g,n[0]),Math.max(d,n[n.length-1]),a.options.startOfWeek,n,this.closestPointRange);x=c.groupData.apply(this,[n,x,z,b.approximation]);n=x[0];q=x[1];if(b.smoothed&&n.length){m=n.length-1;for(n[m]=
Math.min(n[m],d);m--&&0<m;)n[m]+=w/2;n[0]=Math.max(n[0],g)}g=z.info;this.closestPointRange=z.info.totalRange;this.groupMap=x[2];if(h(n[0])&&n[0]<a.dataMin&&k){if(!h(a.options.min)&&a.min<=a.dataMin||a.min===a.dataMin)a.min=n[0];a.dataMin=n[0]}b.groupAll&&(b=this.cropData(n,q,a.min,a.max,1),n=b.xData,q=b.yData);this.processedXData=n;this.processedYData=q}else this.groupMap=null;this.hasGroupedData=p;this.currentDataGrouping=g;this.preventGraphAnimation=(l&&l.totalRange)!==(g&&g.totalRange)}};c.destroyGroupedData=
function(){var a=this.groupedData;t(a||[],function(b,c){b&&(a[c]=b.destroy?b.destroy():null)});this.groupedData=null};c.generatePoints=function(){w.apply(this);this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};E(d,"update",function(){if(this.dataGroup)return a.error(24),!1});b(v.prototype,"tooltipFooterHeaderFormatter",function(a,b,c){var d=this.chart.time,e=b.series,f=e.tooltipOptions,g=e.options.dataGrouping,h=f.xDateFormat,k,l=e.xAxis;return l&&"datetime"===l.options.type&&
g&&A(b.key)?(a=e.currentDataGrouping,g=g.dateTimeLabelFormats,a?(l=g[a.unitName],1===a.count?h=l[0]:(h=l[1],k=l[2])):!h&&g&&(h=this.getXDateFormat(b,f,l)),h=d.dateFormat(h,b.key),k&&(h+=d.dateFormat(k,b.key+a.totalRange-1)),n(f[(c?"footer":"header")+"Format"],{point:C(b.point,{key:h}),series:e},d)):a.call(this,b,c)});E(l,"destroy",c.destroyGroupedData);E(l,"afterSetOptions",function(a){a=a.options;var b=this.type,c=this.chart.options.plotOptions,d=k[b].dataGrouping,e=this.useCommonDataGrouping&&x;
if(m[b]||e)d||(d=B(x,m[b])),a.dataGrouping=B(e,d,c.series&&c.series.dataGrouping,c[b].dataGrouping,this.userOptions.dataGrouping);this.chart.options.isStock&&(this.requireSorting=!0)});E(q,"afterSetScale",function(){t(this.series,function(a){a.hasProcessed=!1})});q.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,c,d=0,e=!1,f;for(c=b;c--;)(f=a[c].options.dataGrouping)&&(d=Math.max(d,f.groupPixelWidth));for(c=b;c--;)(f=a[c].options.dataGrouping)&&a[c].hasProcessed&&(b=(a[c].processedXData||
a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/d||b&&f.forced)&&(e=!0);return e?d:0};q.prototype.setDataGrouping=function(a,b){var c;b=e(b,!0);a||(a={forced:!1,units:null});if(this instanceof q)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else t(this.chart.options.series,function(b){b.dataGrouping=a},!1);this.ordinalSlope=null;b&&this.chart.redraw()}})(J);(function(a){var E=a.each,F=a.Point,G=a.seriesType,q=a.seriesTypes;G("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},
threshold:null,states:{hover:{lineWidth:3}},stickyTracking:!0},{directTouch:!1,pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,a.high,a.low,a.close]},pointValKey:"close",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},init:function(){q.column.prototype.init.apply(this,arguments);this.options.stacking=!1},pointAttribs:function(a,h){h=q.column.prototype.pointAttribs.call(this,a,h);var k=this.options;delete h.fill;!a.options.color&&k.upColor&&a.open<a.close&&
(h.stroke=k.upColor);return h},translate:function(){var a=this,h=a.yAxis,t=!!a.modifyValue,C=["plotOpen","plotHigh","plotLow","plotClose","yBottom"];q.column.prototype.translate.apply(a);E(a.points,function(k){E([k.open,k.high,k.low,k.close,k.low],function(n,q){null!==n&&(t&&(n=a.modifyValue(n)),k[C[q]]=h.toPixels(n,!0))});k.tooltipPos[1]=k.plotHigh+h.pos-a.chart.plotTop})},drawPoints:function(){var a=this,h=a.chart;E(a.points,function(k){var q,n,t,B,e=k.graphic,d,l=!e;void 0!==k.plotY&&(e||(k.graphic=
e=h.renderer.path().add(a.group)),e.attr(a.pointAttribs(k,k.selected&&"select")),n=e.strokeWidth()%2/2,d=Math.round(k.plotX)-n,t=Math.round(k.shapeArgs.width/2),B=["M",d,Math.round(k.yBottom),"L",d,Math.round(k.plotHigh)],null!==k.open&&(q=Math.round(k.plotOpen)+n,B.push("M",d,q,"L",d-t,q)),null!==k.close&&(q=Math.round(k.plotClose)+n,B.push("M",d,q,"L",d+t,q)),e[l?"attr":"animate"]({d:B}).addClass(k.getClassName(),!0))})},animate:null},{getClassName:function(){return F.prototype.getClassName.call(this)+
(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}})})(J);(function(a){var E=a.defaultPlotOptions,F=a.each,G=a.merge,q=a.seriesType,k=a.seriesTypes;q("candlestick","ohlc",G(E.column,{states:{hover:{lineWidth:2}},tooltip:E.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff",stickyTracking:!0}),{pointAttribs:function(a,q){var h=k.column.prototype.pointAttribs.call(this,a,q),n=this.options,t=a.open<a.close,B=n.lineColor||this.color;h["stroke-width"]=n.lineWidth;
h.fill=a.options.color||(t?n.upColor||this.color:this.color);h.stroke=a.lineColor||(t?n.upLineColor||B:B);q&&(a=n.states[q],h.fill=a.color||h.fill,h.stroke=a.lineColor||h.stroke,h["stroke-width"]=a.lineWidth||h["stroke-width"]);return h},drawPoints:function(){var a=this,k=a.chart,q=a.yAxis.reversed;F(a.points,function(h){var n=h.graphic,t,e,d,l,v,b,c,f=!n;void 0!==h.plotY&&(n||(h.graphic=n=k.renderer.path().add(a.group)),n.attr(a.pointAttribs(h,h.selected&&"select")).shadow(a.options.shadow),v=n.strokeWidth()%
2/2,b=Math.round(h.plotX)-v,t=h.plotOpen,e=h.plotClose,d=Math.min(t,e),t=Math.max(t,e),c=Math.round(h.shapeArgs.width/2),e=q?t!==h.yBottom:Math.round(d)!==Math.round(h.plotHigh),l=q?Math.round(d)!==Math.round(h.plotHigh):t!==h.yBottom,d=Math.round(d)+v,t=Math.round(t)+v,v=[],v.push("M",b-c,t,"L",b-c,d,"L",b+c,d,"L",b+c,t,"Z","M",b,d,"L",b,e?Math.round(q?h.yBottom:h.plotHigh):d,"M",b,t,"L",b,l?Math.round(q?h.plotHigh:h.yBottom):t),n[f?"attr":"animate"]({d:v}).addClass(h.getClassName(),!0))})}})})(J);
fa=function(a){var E=a.each,F=a.defined,G=a.seriesTypes,q=a.stableSort;return{getPlotBox:function(){return a.Series.prototype.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this)},translate:function(){G.column.prototype.translate.apply(this);var a=this.options,h=this.chart,t=this.points,C=t.length-1,n,A,B=a.onSeries,B=B&&h.get(B),a=a.onKey||"y",e=B&&B.options.step,d=B&&B.points,l=d&&d.length,v=h.inverted,b=this.xAxis,c=this.yAxis,f=0,w,x,m,I;if(B&&B.visible&&l)for(f=
(B.pointXOffset||0)+(B.barW||0)/2,n=B.currentDataGrouping,x=d[l-1].x+(n?n.totalRange:0),q(t,function(a,b){return a.x-b.x}),a="plot"+a[0].toUpperCase()+a.substr(1);l--&&t[C]&&!(w=d[l],n=t[C],n.y=w.y,w.x<=n.x&&void 0!==w[a]&&(n.x<=x&&(n.plotY=w[a],w.x<n.x&&!e&&(m=d[l+1])&&void 0!==m[a]&&(I=(n.x-w.x)/(m.x-w.x),n.plotY+=I*(m[a]-w[a]),n.y+=I*(m.y-w.y))),C--,l++,0>C)););E(t,function(a,d){var e;a.plotX+=f;if(void 0===a.plotY||v)0<=a.plotX&&a.plotX<=b.len?v?(a.plotY=b.translate(a.x,0,1,0,1),a.plotX=F(a.y)?
c.translate(a.y,0,0,0,1):0):a.plotY=h.chartHeight-b.bottom-(b.opposite?b.height:0)+b.offset-c.top:a.shapeArgs={};(A=t[d-1])&&A.plotX===a.plotX&&(void 0===A.stackIndex&&(A.stackIndex=0),e=A.stackIndex+1);a.stackIndex=e});this.onSeries=B}}}(J);(function(a,E){function F(a){e[a+"pin"]=function(d,h,b,c,f){var k=f&&f.anchorX;f=f&&f.anchorY;"circle"===a&&c>b&&(d-=Math.round((c-b)/2),b=c);d=e[a](d,h,b,c);k&&f&&(d.push("M","circle"===a?d[1]-d[4]:d[1]+d[4]/2,h>f?h:h+c,"L",k,f),d=d.concat(e.circle(k-1,f-1,2,
2)));return d}}var G=a.addEvent,q=a.each,k=a.merge,h=a.noop,t=a.Renderer,C=a.Series,n=a.seriesType,A=a.TrackerMixin,B=a.VMLRenderer,e=a.SVGRenderer.prototype.symbols;n("flags","column",{pointRange:0,allowOverlapX:!1,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,
takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:C.prototype.init,pointAttribs:function(a,e){var d=this.options,b=a&&a.color||this.color,c=d.lineColor,f=a&&a.lineWidth;a=a&&a.fillColor||d.fillColor;e&&(a=d.states[e].fillColor,c=d.states[e].lineColor,f=d.states[e].lineWidth);return{fill:a||b,stroke:c||b,"stroke-width":f||d.lineWidth||0}},translate:E.translate,getPlotBox:E.getPlotBox,drawPoints:function(){var d=this.points,e=this.chart,h=e.renderer,b,c,f=e.inverted,n=this.options,
x=n.y,m,t,z,u,r,B,A=this.yAxis,p={},D=[];for(t=d.length;t--;)z=d[t],B=(f?z.plotY:z.plotX)>this.xAxis.len,b=z.plotX,u=z.stackIndex,m=z.options.shape||n.shape,c=z.plotY,void 0!==c&&(c=z.plotY+x-(void 0!==u&&u*n.stackDistance)),z.anchorX=u?void 0:z.plotX,r=u?void 0:z.plotY,u=z.graphic,void 0!==c&&0<=b&&!B?(u||(u=z.graphic=h.label("",null,null,m,null,null,n.useHTML).attr(this.pointAttribs(z)).css(k(n.style,z.style)).attr({align:"flag"===m?"left":"center",width:n.width,height:n.height,"text-align":n.textAlign}).addClass("highcharts-point").add(this.markerGroup),
z.graphic.div&&(z.graphic.div.point=z),u.shadow(n.shadow),u.isNew=!0),0<b&&(b-=u.strokeWidth()%2),m={y:c,anchorY:r},n.allowOverlapX&&(m.x=b,m.anchorX=z.anchorX),u.attr({text:z.options.title||n.title||"A"})[u.isNew?"attr":"animate"](m),n.allowOverlapX||(p[z.plotX]?p[z.plotX].size=Math.max(p[z.plotX].size,u.width):p[z.plotX]={align:0,size:u.width,target:b,anchorX:b}),z.tooltipPos=[b,c+A.pos-e.plotTop]):u&&(z.graphic=u.destroy());n.allowOverlapX||(a.objectEach(p,function(a){a.plotX=a.anchorX;D.push(a)}),
a.distribute(D,f?A.len:this.xAxis.len,100),q(d,function(a){var b=a.graphic&&p[a.plotX];b&&(a.graphic[a.graphic.isNew?"attr":"animate"]({x:b.pos,anchorX:a.anchorX}),b.pos?a.graphic.isNew=!1:(a.graphic.attr({x:-9999,anchorX:-9999}),a.graphic.isNew=!0))}));n.useHTML&&a.wrap(this.markerGroup,"on",function(b){return a.SVGElement.prototype.on.apply(b.apply(this,[].slice.call(arguments,1)),[].slice.call(arguments,1))})},drawTracker:function(){var a=this.points;A.drawTrackerPoint.apply(this);q(a,function(d){var e=
d.graphic;e&&G(e.element,"mouseover",function(){0<d.stackIndex&&!d.raised&&(d._y=e.y,e.attr({y:d._y-8}),d.raised=!0);q(a,function(a){a!==d&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:function(a){a?this.setClip():this.animate=null},setClip:function(){C.prototype.setClip.apply(this,arguments);!1!==this.options.clip&&this.sharedClipKey&&this.markerGroup.clip(this.chart[this.sharedClipKey])},buildKDTree:h,invertGroups:h});e.flag=function(a,h,k,b,c){var d=c&&c.anchorX||
a;c=c&&c.anchorY||h;return e.circle(d-1,c-1,2,2).concat(["M",d,c,"L",a,h+b,a,h,a+k,h,a+k,h+b,a,h+b,"Z"])};F("circle");F("square");t===B&&q(["flag","circlepin","squarepin"],function(a){B.prototype.symbols[a]=e[a]})})(J,fa);(function(a){function E(a,c,d){this.init(a,c,d)}var F=a.addEvent,G=a.Axis,q=a.correctFloat,k=a.defaultOptions,h=a.defined,t=a.destroyObjectProperties,C=a.each,n=a.fireEvent,A=a.hasTouch,B=a.merge,e=a.pick,d=a.removeEvent,l,v={height:a.isTouchDevice?20:14,barBorderRadius:0,buttonBorderRadius:0,
liveRedraw:void 0,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};k.scrollbar=B(!0,v,k.scrollbar);a.swapXY=l=function(a,c){var b=a.length,d;if(c)for(c=0;c<b;c+=3)d=a[c+1],a[c+1]=a[c+2],a[c+2]=d;return a};E.prototype={init:function(a,c,
d){this.scrollbarButtons=[];this.renderer=a;this.userOptions=c;this.options=B(v,c);this.chart=d;this.size=e(this.options.size,this.options.height);c.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,c=this.options,d=this.size,e;this.group=e=a.g("scrollbar").attr({zIndex:c.zIndex,translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,r:c.trackBorderRadius||0,height:d,width:d}).add(e);this.track.attr({fill:c.trackBackgroundColor,
stroke:c.trackBorderColor,"stroke-width":c.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(e);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:d,width:d,r:c.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=a.path(l(["M",-3,d/4,"L",-3,2*d/3,"M",0,d/4,"L",0,2*d/3,"M",3,d/4,"L",3,2*d/3],c.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);
this.scrollbar.attr({fill:c.barBackgroundColor,stroke:c.barBorderColor,"stroke-width":c.barBorderWidth});this.scrollbarRifles.attr({stroke:c.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1)},position:function(a,c,d,e){var b=this.options.vertical,f=0,h=this.rendered?"animate":"attr";this.x=a;this.y=c+this.trackBorderWidth;
this.width=d;this.xOffset=this.height=e;this.yOffset=f;b?(this.width=this.yOffset=d=f=this.size,this.xOffset=c=0,this.barWidth=e-2*d,this.x=a+=this.options.margin):(this.height=this.xOffset=e=c=this.size,this.barWidth=d-2*e,this.y+=this.options.margin);this.group[h]({translateX:a,translateY:this.y});this.track[h]({width:d,height:e});this.scrollbarButtons[1][h]({translateX:b?0:d-c,translateY:b?e-f:0})},drawScrollbarButton:function(a){var b=this.renderer,d=this.scrollbarButtons,e=this.options,h=this.size,
k;k=b.g().add(this.group);d.push(k);k=b.rect().addClass("highcharts-scrollbar-button").add(k);k.attr({stroke:e.buttonBorderColor,"stroke-width":e.buttonBorderWidth,fill:e.buttonBackgroundColor});k.attr(k.crisp({x:-.5,y:-.5,width:h+1,height:h+1,r:e.buttonBorderRadius},k.strokeWidth()));k=b.path(l(["M",h/2+(a?-1:1),h/2-3,"L",h/2+(a?-1:1),h/2+3,"L",h/2+(a?2:-2),h/2],e.vertical)).addClass("highcharts-scrollbar-arrow").add(d[a]);k.attr({fill:e.buttonArrowColor})},setRange:function(a,c){var b=this.options,
d=b.vertical,e=b.minWidth,k=this.barWidth,l,n,u=!this.rendered||this.hasDragged||this.chart.navigator&&this.chart.navigator.hasDragged?"attr":"animate";h(k)&&(a=Math.max(a,0),l=Math.ceil(k*a),this.calculatedWidth=n=q(k*Math.min(c,1)-l),n<e&&(l=(k-e+n)*a,n=e),e=Math.floor(l+this.xOffset+this.yOffset),k=n/2-.5,this.from=a,this.to=c,d?(this.scrollbarGroup[u]({translateY:e}),this.scrollbar[u]({height:n}),this.scrollbarRifles[u]({translateY:k}),this.scrollbarTop=e,this.scrollbarLeft=0):(this.scrollbarGroup[u]({translateX:e}),
this.scrollbar[u]({width:n}),this.scrollbarRifles[u]({translateX:k}),this.scrollbarLeft=e,this.scrollbarTop=0),12>=n?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===b.showFull&&(0>=a&&1<=c?this.group.hide():this.group.show()),this.rendered=!0)},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var c=a.chart.pointer.normalize(b),d=a.options.vertical?"chartY":"chartX",e=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][d]||(c=a.cursorToScrollbarPosition(c)[d],
d=a[d],d=c-d,a.hasDragged=!0,a.updatePosition(e[0]+d,e[1]+d),a.hasDragged&&n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;a.initPositions=[a.from,a.to];a.grabbedCenter=
!0};a.buttonToMinClick=function(b){var c=q(a.to-a.from)*a.options.step;a.updatePosition(q(a.from-c),q(a.to-c));n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var c=(a.to-a.from)*a.options.step;a.updatePosition(a.from+c,a.to+c);n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.trackClick=function(b){var c=a.chart.pointer.normalize(b),d=a.to-a.from,e=a.y+a.scrollbarTop,h=a.x+a.scrollbarLeft;a.options.vertical&&c.chartY>e||!a.options.vertical&&
c.chartX>h?a.updatePosition(a.from+d,a.to+d):a.updatePosition(a.from-d,a.to-d);n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,c){1<c&&(a=q(1-q(c-a)),c=1);0>a&&(c=q(c-a),a=0);this.from=a;this.to=c},update:function(a){this.destroy();
this.init(this.chart.renderer,B(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],c=this.scrollbarButtons,d=this.scrollbarGroup.element,e=this.mouseDownHandler,h=this.mouseMoveHandler,k=this.mouseUpHandler,a=[[c[a[0]].element,"click",this.buttonToMinClick],[c[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[d,"mousedown",e],[d.ownerDocument,"mousemove",h],[d.ownerDocument,"mouseup",k]];A&&a.push([d,"touchstart",e],
[d.ownerDocument,"touchmove",h],[d.ownerDocument,"touchend",k]);C(a,function(a){F.apply(null,a)});this._events=a},removeEvents:function(){C(this._events,function(a){d.apply(null,a)});this._events.length=0},destroy:function(){var a=this.chart.scroller;this.removeEvents();C(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy())},this);a&&this===a.scrollbar&&(a.scrollbar=null,t(a.scrollbarButtons))}};F(G,"afterInit",function(){var a=
this;a.options&&a.options.scrollbar&&a.options.scrollbar.enabled&&(a.options.scrollbar.vertical=!a.horiz,a.options.startOnTick=a.options.endOnTick=!1,a.scrollbar=new E(a.chart.renderer,a.options.scrollbar,a.chart),F(a.scrollbar,"changed",function(b){var c=Math.min(e(a.options.min,a.min),a.min,a.dataMin),d=Math.max(e(a.options.max,a.max),a.max,a.dataMax)-c,h;a.horiz&&!a.reversed||!a.horiz&&a.reversed?(h=c+d*this.to,c+=d*this.from):(h=c+d*(1-this.from),c+=d*(1-this.to));a.setExtremes(c,h,!0,!1,b)}))});
F(G,"afterRender",function(){var a=Math.min(e(this.options.min,this.min),this.min,e(this.dataMin,this.min)),c=Math.max(e(this.options.max,this.max),this.max,e(this.dataMax,this.max)),d=this.scrollbar,k=this.titleOffset||0;if(d){this.horiz?(d.position(this.left,this.top+this.height+2+this.chart.scrollbarsOffsets[1]+(this.opposite?0:k+this.axisTitleMargin+this.offset),this.width,this.height),k=1):(d.position(this.left+this.width+2+this.chart.scrollbarsOffsets[0]+(this.opposite?k+this.axisTitleMargin+
this.offset:0),this.top,this.width,this.height),k=0);if(!this.opposite&&!this.horiz||this.opposite&&this.horiz)this.chart.scrollbarsOffsets[k]+=this.scrollbar.size+this.scrollbar.options.margin;isNaN(a)||isNaN(c)||!h(this.min)||!h(this.max)?d.setRange(0,0):(k=(this.min-a)/(c-a),a=(this.max-a)/(c-a),this.horiz&&!this.reversed||!this.horiz&&this.reversed?d.setRange(k,a):d.setRange(1-a,1-k))}});F(G,"afterGetOffset",function(){var a=this.horiz?2:1,c=this.scrollbar;c&&(this.chart.scrollbarsOffsets=[0,
0],this.chart.axisOffset[a]+=c.size+c.options.margin)});a.Scrollbar=E})(J);(function(a){function E(a){this.init(a)}var F=a.addEvent,G=a.Axis,q=a.Chart,k=a.color,h=a.defaultOptions,t=a.defined,C=a.destroyObjectProperties,n=a.each,A=a.erase,B=a.error,e=a.extend,d=a.grep,l=a.hasTouch,v=a.isArray,b=a.isNumber,c=a.isObject,f=a.isTouchDevice,w=a.merge,x=a.pick,m=a.removeEvent,I=a.Scrollbar,z=a.Series,u=a.seriesTypes,r=a.wrap,K=[].concat(a.defaultDataGroupingUnits),H=function(a){var c=d(arguments,b);if(c.length)return Math[a].apply(0,
c)};K[4]=["day",[1,2,3,4]];K[5]=["week",[1,2,3]];u=void 0===u.areaspline?"line":"areaspline";e(h,{navigator:{height:40,margin:25,maskInside:!0,handles:{width:7,height:15,symbols:["navigator-handle","navigator-handle"],enabled:!0,lineWidth:1,backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:k("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",outlineWidth:1,series:{type:u,fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,
units:K},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,threshold:null},xAxis:{overscroll:0,className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,
labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});a.Renderer.prototype.symbols["navigator-handle"]=function(a,b,c,d,e){a=e.width/2;b=Math.round(a/3)+.5;e=e.height;return["M",-a-1,.5,"L",a,.5,"L",a,e+.5,"L",-a-1,e+.5,"L",-a-1,.5,"M",-b,4,"L",-b,e-3,"M",b-1,4,"L",b-1,e-3]};E.prototype={drawHandle:function(a,b,c,d){var e=this.navigatorOptions.handles.height;this.handles[b][d](c?{translateX:Math.round(this.left+this.height/2),translateY:Math.round(this.top+parseInt(a,10)+
.5-e)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+this.height/2-e/2-1)})},drawOutline:function(a,b,c,d){var e=this.navigatorOptions.maskInside,g=this.outline.strokeWidth(),f=g/2,g=g%2/2,h=this.outlineHeight,k=this.scrollbarHeight,p=this.size,l=this.left-k,m=this.top;c?(l-=f,c=m+b+g,b=m+a+g,a=["M",l+h,m-k-g,"L",l+h,c,"L",l,c,"L",l,b,"L",l+h,b,"L",l+h,m+p+k].concat(e?["M",l+h,c-f,"L",l+h,b+f]:[])):(a+=l+k-g,b+=l+k-g,m+=f,a=["M",l,m,"L",a,m,"L",a,m+h,"L",b,m+h,"L",
b,m,"L",l+p+2*k,m].concat(e?["M",a-f,m,"L",b+f,m]:[]));this.outline[d]({d:a})},drawMasks:function(a,b,c,d){var e=this.left,g=this.top,f=this.height,h,k,p,l;c?(p=[e,e,e],l=[g,g+a,g+b],k=[f,f,f],h=[a,b-a,this.size-b]):(p=[e,e+a,e+b],l=[g,g,g],k=[a,b-a,this.size-b],h=[f,f,f]);n(this.shades,function(a,b){a[d]({x:p[b],y:l[b],width:k[b],height:h[b]})})},renderElements:function(){var a=this,b=a.navigatorOptions,c=b.maskInside,d=a.chart,e=d.inverted,f=d.renderer,h;a.navigatorGroup=h=f.g("navigator").attr({zIndex:8,
visibility:"hidden"}).add();var k={cursor:e?"ns-resize":"ew-resize"};n([!c,c,!c],function(c,d){a.shades[d]=f.rect().addClass("highcharts-navigator-mask"+(1===d?"-inside":"-outside")).attr({fill:c?b.maskFill:"rgba(0,0,0,0)"}).css(1===d&&k).add(h)});a.outline=f.path().addClass("highcharts-navigator-outline").attr({"stroke-width":b.outlineWidth,stroke:b.outlineColor}).add(h);b.handles.enabled&&n([0,1],function(c){b.handles.inverted=d.inverted;a.handles[c]=f.symbol(b.handles.symbols[c],-b.handles.width/
2-1,0,b.handles.width,b.handles.height,b.handles);a.handles[c].attr({zIndex:7-c}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][c]).add(h);var e=b.handles;a.handles[c].attr({fill:e.backgroundColor,stroke:e.borderColor,"stroke-width":e.lineWidth}).css(k)})},update:function(a){n(this.series||[],function(a){a.baseSeries&&delete a.baseSeries.navigatorSeries});this.destroy();w(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(c,
d,e,f){var g=this.chart,h,k,p=this.scrollbarHeight,l,m=this.xAxis;h=m.fake?g.xAxis[0]:m;var n=this.navigatorEnabled,q,D=this.rendered;k=g.inverted;var r,y=g.xAxis[0].minRange,u=g.xAxis[0].options.maxRange;if(!this.hasDragged||t(e)){if(!b(c)||!b(d))if(D)e=0,f=x(m.width,h.width);else return;this.left=x(m.left,g.plotLeft+p+(k?g.plotWidth:0));this.size=q=l=x(m.len,(k?g.plotHeight:g.plotWidth)-2*p);g=k?p:l+2*p;e=x(e,m.toPixels(c,!0));f=x(f,m.toPixels(d,!0));b(e)&&Infinity!==Math.abs(e)||(e=0,f=g);c=m.toValue(e,
!0);d=m.toValue(f,!0);r=Math.abs(a.correctFloat(d-c));r<y?this.grabbedLeft?e=m.toPixels(d-y,!0):this.grabbedRight&&(f=m.toPixels(c+y,!0)):t(u)&&r>u&&(this.grabbedLeft?e=m.toPixels(d-u,!0):this.grabbedRight&&(f=m.toPixels(c+u,!0)));this.zoomedMax=Math.min(Math.max(e,f,0),q);this.zoomedMin=Math.min(Math.max(this.fixedWidth?this.zoomedMax-this.fixedWidth:Math.min(e,f),0),q);this.range=this.zoomedMax-this.zoomedMin;q=Math.round(this.zoomedMax);e=Math.round(this.zoomedMin);n&&(this.navigatorGroup.attr({visibility:"visible"}),
D=D&&!this.hasDragged?"animate":"attr",this.drawMasks(e,q,k,D),this.drawOutline(e,q,k,D),this.navigatorOptions.handles.enabled&&(this.drawHandle(e,0,k,D),this.drawHandle(q,1,k,D)));this.scrollbar&&(k?(k=this.top-p,h=this.left-p+(n||!h.opposite?0:(h.titleOffset||0)+h.axisTitleMargin),p=l+2*p):(k=this.top+(n?this.height:-p),h=this.left-p),this.scrollbar.position(h,k,g,p),this.scrollbar.setRange(this.zoomedMin/(l||1),this.zoomedMax/(l||1)));this.rendered=!0}},addMouseEvents:function(){var a=this,b=a.chart,
c=b.container,d=[],e,f;a.mouseMoveHandler=e=function(b){a.onMouseMove(b)};a.mouseUpHandler=f=function(b){a.onMouseUp(b)};d=a.getPartsEvents("mousedown");d.push(F(c,"mousemove",e),F(c.ownerDocument,"mouseup",f));l&&(d.push(F(c,"touchmove",e),F(c.ownerDocument,"touchend",f)),d.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind=d;a.series&&a.series[0]&&d.push(F(a.series[0].xAxis,"foundExtremes",function(){b.navigator.modifyNavigatorAxisExtremes()}))},getPartsEvents:function(a){var b=this,c=[];
n(["shades","handles"],function(d){n(b[d],function(e,g){c.push(F(e.element,a,function(a){b[d+"Mousedown"](a,g)}))})});return c},shadesMousedown:function(a,b){a=this.chart.pointer.normalize(a);var c=this.chart,d=this.xAxis,e=this.zoomedMin,f=this.left,h=this.size,k=this.range,p=a.chartX,l,m;c.inverted&&(p=a.chartY,f=this.top);1===b?(this.grabbedCenter=p,this.fixedWidth=k,this.dragOffset=p-e):(a=p-f-k/2,0===b?a=Math.max(0,a):2===b&&a+k>=h&&(a=h-k,this.reversedExtremes?(a-=k,m=this.getUnionExtremes().dataMin):
l=this.getUnionExtremes().dataMax),a!==e&&(this.fixedWidth=k,b=d.toFixedRange(a,a+k,m,l),t(b.min)&&c.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,b.max),!0,null,{trigger:"navigator"})))},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var c=a.xAxis[0],d=this.reversedExtremes;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=d?c.min:c.max):(this.grabbedRight=!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=d?c.max:c.min);
a.fixedRange=null},onMouseMove:function(b){var c=this,d=c.chart,e=c.left,h=c.navigatorSize,k=c.range,l=c.dragOffset,p=d.inverted;b.touches&&0===b.touches[0].pageX||(b=d.pointer.normalize(b),d=b.chartX,p&&(e=c.top,d=b.chartY),c.grabbedLeft?(c.hasDragged=!0,c.render(0,0,d-e,c.otherHandlePos)):c.grabbedRight?(c.hasDragged=!0,c.render(0,0,c.otherHandlePos,d-e)):c.grabbedCenter&&(c.hasDragged=!0,d<l?d=l:d>h+l-k&&(d=h+l-k),c.render(0,0,d-l,d-l+k)),c.hasDragged&&c.scrollbar&&x(c.scrollbar.options.liveRedraw,
a.svg&&!f&&!this.chart.isBoosting)&&(b.DOMType=b.type,setTimeout(function(){c.onMouseUp(b)},0)))},onMouseUp:function(a){var b=this.chart,c=this.xAxis,d=this.scrollbar,e,f,h=a.DOMEvent||a;(!this.hasDragged||d&&d.hasDragged)&&"scrollbar"!==a.trigger||(d=this.getUnionExtremes(),this.zoomedMin===this.otherHandlePos?e=this.fixedExtreme:this.zoomedMax===this.otherHandlePos&&(f=this.fixedExtreme),this.zoomedMax===this.size&&(f=this.reversedExtremes?d.dataMin:d.dataMax),0===this.zoomedMin&&(e=this.reversedExtremes?
d.dataMax:d.dataMin),c=c.toFixedRange(this.zoomedMin,this.zoomedMax,e,f),t(c.min)&&b.xAxis[0].setExtremes(Math.min(c.min,c.max),Math.max(c.min,c.max),!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:h}));"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null)},removeEvents:function(){this.eventsToUnbind&&(n(this.eventsToUnbind,function(a){a()}),this.eventsToUnbind=
void 0);this.removeBaseSeriesEvents()},removeBaseSeriesEvents:function(){var a=this.baseSeries||[];this.navigatorEnabled&&a[0]&&(!1!==this.navigatorOptions.adaptToUpdatedData&&n(a,function(a){m(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&m(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var b=a.options,c=b.navigator,d=c.enabled,e=b.scrollbar,f=e.enabled,b=d?c.height:0,h=f?e.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=
b;this.scrollbarHeight=h;this.scrollbarEnabled=f;this.navigatorEnabled=d;this.navigatorOptions=c;this.scrollbarOptions=e;this.outlineHeight=b+h;this.opposite=x(c.opposite,!d&&a.inverted);var k=this,d=k.baseSeries,e=a.xAxis.length,f=a.yAxis.length,l=d&&d[0]&&d[0].xAxis||a.xAxis[0]||{options:{}};a.isDirtyBox=!0;k.navigatorEnabled?(k.xAxis=new G(a,w({breaks:l.options.breaks,ordinal:l.options.ordinal},c.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",isX:!0,type:"datetime",index:e,isInternal:!0,
offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[h,0,-h,0],width:b}:{offsets:[0,-h,0,h],height:b})),k.yAxis=new G(a,w(c.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:f,isInternal:!0,zoomEnabled:!1},a.inverted?{width:b}:{height:b})),d||c.series.data?k.updateNavigatorSeries(!1):0===a.series.length&&(k.unbindRedraw=F(a,"beforeRedraw",function(){0<a.series.length&&!k.series&&(k.setBaseSeries(),k.unbindRedraw())})),k.reversedExtremes=
a.inverted&&!k.xAxis.reversed||!a.inverted&&k.xAxis.reversed,k.renderElements(),k.addMouseEvents()):k.xAxis={translate:function(b,c){var d=a.xAxis[0],e=d.getExtremes(),g=d.len-2*h,f=H("min",d.options.min,e.dataMin),d=H("max",d.options.max,e.dataMax)-f;return c?b*d/g+f:g*(b-f)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:G.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=k.scrollbar=new I(a.renderer,w(a.options.scrollbar,
{margin:k.navigatorEnabled?0:10,vertical:a.inverted}),a),F(k.scrollbar,"changed",function(b){var c=k.size,d=c*this.to,c=c*this.from;k.hasDragged=k.scrollbar.hasDragged;k.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType&&"touchmove"!==b.DOMType)&&setTimeout(function(){k.onMouseUp(b)})}));k.addBaseSeriesEvents();k.addChartEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:x(d&&d.min,H("min",
e.min,b.dataMin,c.dataMin,c.min)),dataMax:x(d&&d.max,H("max",e.max,b.dataMax,c.dataMax,c.max))});return f},setBaseSeries:function(a,b){var c=this.chart,d=this.baseSeries=[];a=a||c.options&&c.options.navigator.baseSeries||0;n(c.series||[],function(b,c){b.options.isInternal||!b.options.showInNavigator&&(c!==a&&b.options.id!==a||!1===b.options.showInNavigator)||d.push(b)});this.xAxis&&!this.xAxis.fake&&this.updateNavigatorSeries(!0,b)},updateNavigatorSeries:function(b,c){var d=this,f=d.chart,k=d.baseSeries,
l,p,q=d.navigatorOptions.series,r,u={enableMouseTracking:!1,index:null,linkedTo:null,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0},x=d.series=a.grep(d.series||[],function(b){var c=b.baseSeries;return 0>a.inArray(c,k)?(c&&(m(c,"updatedData",d.updatedDataHandler),delete c.navigatorSeries),b.chart&&b.destroy(),!1):!0});k&&k.length&&n(k,function(a){var b=a.navigatorSeries,g=e({color:a.color,visible:a.visible},v(q)?h.navigator.series:
q);b&&!1===d.navigatorOptions.adaptToUpdatedData||(u.name="Navigator "+k.length,l=a.options||{},r=l.navigatorOptions||{},p=w(l,u,g,r),g=r.data||g.data,d.hasNavigatorData=d.hasNavigatorData||!!g,p.data=g||l.data&&l.data.slice(0),b&&b.options?b.update(p,c):(a.navigatorSeries=f.initSeries(p),a.navigatorSeries.baseSeries=a,x.push(a.navigatorSeries)))});if(q.data&&(!k||!k.length)||v(q))d.hasNavigatorData=!1,q=a.splat(q),n(q,function(a,b){u.name="Navigator "+(x.length+1);p=w(h.navigator.series,{color:f.series[b]&&
!f.series[b].options.isInternal&&f.series[b].color||f.options.colors[b]||f.options.colors[0]},u,a);p.data=a.data;p.data&&(d.hasNavigatorData=!0,x.push(f.initSeries(p)))});b&&this.addBaseSeriesEvents()},addBaseSeriesEvents:function(){var a=this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&F(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);n(b,function(b){F(b,"show",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!0,!1)});F(b,"hide",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!1,
!1)});!1!==this.navigatorOptions.adaptToUpdatedData&&b.xAxis&&F(b,"updatedData",this.updatedDataHandler);F(b,"remove",function(){this.navigatorSeries&&(A(a.series,this.navigatorSeries),t(this.navigatorSeries.options)&&this.navigatorSeries.remove(!1),delete this.navigatorSeries)})},this)},getBaseSeriesMin:function(b){return a.reduce(this.baseSeries,function(a,b){return Math.min(a,b.xData[0])},b)},modifyNavigatorAxisExtremes:function(){var a=this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||
b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,c=this.getExtremes(),d=c.dataMin,e=c.dataMax,c=c.max-c.min,f=a.stickToMin,h=a.stickToMax,k=x(this.options.overscroll,0),l,m,n=a.series&&a.series[0],q=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(f&&(m=d,l=m+c),h&&(l=e+k,f||(m=Math.max(l-c,a.getBaseSeriesMin(n&&n.xData?n.xData[0]:-Number.MAX_VALUE)))),q&&(f||h)&&b(m)&&(this.min=
this.userMin=m,this.max=this.userMax=l));a.stickToMin=a.stickToMax=null},updatedDataHandler:function(){var a=this.chart.navigator,c=this.navigatorSeries,d=a.getBaseSeriesMin(this.xData[0]);a.stickToMax=a.reversedExtremes?0===Math.round(a.zoomedMin):Math.round(a.zoomedMax)>=Math.round(a.size);a.stickToMin=b(this.xAxis.min)&&this.xAxis.min<=d&&(!this.chart.fixedRange||!a.stickToMax);c&&!a.hasNavigatorData&&(c.options.pointStart=this.xData[0],c.setData(this.options.data,!1,null,!1))},addChartEvents:function(){this.eventsToUnbind||
(this.eventsToUnbind=[]);this.eventsToUnbind.push(F(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,b.max)}),F(this.chart,"getMargins",function(){var a=this.navigator,b=a.opposite?"plotTop":"marginBottom";this.inverted&&(b=a.opposite?"marginRight":"plotLeft");this[b]=(this[b]||0)+(a.navigatorEnabled||!this.inverted?a.outlineHeight:0)+a.navigatorOptions.margin}))},destroy:function(){this.removeEvents();
this.xAxis&&(A(this.chart.xAxis,this.xAxis),A(this.chart.axes,this.xAxis));this.yAxis&&(A(this.chart.yAxis,this.yAxis),A(this.chart.axes,this.yAxis));n(this.series||[],function(a){a.destroy&&a.destroy()});n("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&this[a].destroy&&this[a].destroy();this[a]=null},this);n([this.handles],function(a){C(a)},this)}};a.Navigator=E;r(G.prototype,"zoom",function(a,b,
c){var d=this.chart,e=d.options,g=e.chart.zoomType,h=e.chart.pinchType,k=e.navigator,e=e.rangeSelector,l;this.isXAxis&&(k&&k.enabled||e&&e.enabled)&&(!f&&"x"===g||f&&"x"===h?d.resetZoomButton="blocked":"y"===g?l=!1:(!f&&"xy"===g||f&&"xy"===h)&&this.options.range&&(d=this.previousZoom,t(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==l?l:a.call(this,b,c)});F(q,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=
this.navigator=new E(this)});F(q,"afterSetChartSize",function(){var a=this.legend,b=this.navigator,c,d,e,f;b&&(d=a&&a.options,e=b.xAxis,f=b.yAxis,c=b.scrollbarHeight,this.inverted?(b.left=b.opposite?this.chartWidth-c-b.height:this.spacing[3]+c,b.top=this.plotTop+c):(b.left=this.plotLeft+c,b.top=b.navigatorOptions.top||this.chartHeight-b.height-c-this.spacing[2]-(this.rangeSelector&&this.extraBottomMargin?this.rangeSelector.getHeight():0)-(d&&"bottom"===d.verticalAlign&&d.enabled&&!d.floating?a.legendHeight+
x(d.margin,10):0)),e&&f&&(this.inverted?e.options.left=f.options.left=b.left:e.options.top=f.options.top=b.top,e.setAxisSize(),f.setAxisSize()))});F(q,"update",function(a){var b=a.options.navigator||{},c=a.options.scrollbar||{};this.navigator||this.scroller||!b.enabled&&!c.enabled||(w(!0,this.options.navigator,b),w(!0,this.options.scrollbar,c),delete a.options.navigator,delete a.options.scrollbar)});F(q,"afterUpdate",function(){this.navigator||this.scroller||!this.options.navigator.enabled&&!this.options.scrollbar.enabled||
(this.scroller=this.navigator=new E(this))});r(z.prototype,"addPoint",function(a,b,d,e,f){var g=this.options.turboThreshold;g&&this.xData.length>g&&c(b,!0)&&this.chart.navigator&&B(20,!0);a.call(this,b,d,e,f)});F(q,"afterAddSeries",function(){this.navigator&&this.navigator.setBaseSeries(null,!1)});F(z,"afterUpdate",function(){this.chart.navigator&&!this.options.isInternal&&this.chart.navigator.setBaseSeries(null,!1)});q.prototype.callbacks.push(function(a){var b=a.navigator;b&&a.xAxis[0]&&(a=a.xAxis[0].getExtremes(),
b.render(a.min,a.max))})})(J);(function(a){function E(a){this.init(a)}var F=a.addEvent,G=a.Axis,q=a.Chart,k=a.css,h=a.createElement,t=a.defaultOptions,C=a.defined,n=a.destroyObjectProperties,A=a.discardElement,B=a.each,e=a.extend,d=a.fireEvent,l=a.isNumber,v=a.merge,b=a.pick,c=a.pInt,f=a.splat,w=a.wrap;e(t,{rangeSelector:{verticalAlign:"top",buttonTheme:{"stroke-width":0,width:28,height:18,padding:2,zIndex:7},floating:!1,x:0,y:0,height:void 0,inputPosition:{align:"right",x:0,y:0},buttonPosition:{align:"left",
x:0,y:0},labelStyle:{color:"#666666"}}});t.lang=v(t.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});E.prototype={clickButton:function(a,c){var d=this,e=d.chart,h=d.buttonOptions[a],k=e.xAxis[0],m=e.scroller&&e.scroller.getUnionExtremes()||k||{},n=m.dataMin,p=m.dataMax,q,g=k&&Math.round(Math.min(k.max,b(p,k.max))),x=h.type,t,m=h._range,v,w,A,C=h.dataGrouping;if(null!==n&&null!==p){e.fixedRange=m;C&&(this.forcedDataGrouping=!0,G.prototype.setDataGrouping.call(k||{chart:this.chart},
C,!1),this.frozenStates=h.preserveDataGrouping);if("month"===x||"year"===x)k?(x={range:h,max:g,chart:e,dataMin:n,dataMax:p},q=k.minFromRange.call(x),l(x.newMax)&&(g=x.newMax)):m=h;else if(m)q=Math.max(g-m,n),g=Math.min(q+m,p);else if("ytd"===x)if(k)void 0===p&&(n=Number.MAX_VALUE,p=Number.MIN_VALUE,B(e.series,function(a){a=a.xData;n=Math.min(a[0],n);p=Math.max(a[a.length-1],p)}),c=!1),g=d.getYTDExtremes(p,n,e.time.useUTC),q=v=g.min,g=g.max;else{F(e,"beforeRender",function(){d.clickButton(a)});return}else"all"===
x&&k&&(q=n,g=p);q+=h._offsetMin;g+=h._offsetMax;d.setSelected(a);k?k.setExtremes(q,g,b(c,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:h}):(t=f(e.options.xAxis)[0],A=t.range,t.range=m,w=t.min,t.min=v,F(e,"load",function(){t.range=A;t.min=w}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",
text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,e=c.buttons||[].concat(b.defaultButtons),f=c.selected,h=function(){var a=b.minInput,c=b.maxInput;a&&a.blur&&d(a,"blur");c&&c.blur&&d(c,"blur")};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=e;this.unMouseDown=F(a.container,"mousedown",h);this.unResize=F(a,"resize",h);B(e,b.computeButtonRange);void 0!==f&&e[f]&&this.clickButton(f,!1);F(a,"load",function(){a.xAxis&&a.xAxis[0]&&F(a.xAxis[0],"setExtremes",
function(c){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==c.trigger&&"updatedData"!==c.trigger&&b.forcedDataGrouping&&!b.frozenStates&&this.setDataGrouping(!1,!1)})})},updateButtonStates:function(){var a=this,b=this.chart,c=b.xAxis[0],d=Math.round(c.max-c.min),e=!c.hasVisibleSeries,f=b.scroller&&b.scroller.getUnionExtremes()||c,h=f.dataMin,k=f.dataMax,b=a.getYTDExtremes(k,h,b.time.useUTC),p=b.min,n=b.max,g=a.selected,q=l(g),t=a.options.allButtonsEnabled,v=a.buttons;B(a.buttonOptions,function(b,
f){var l=b._range,m=b.type,u=b.count||1,r=v[f],x=0;b=b._offsetMax-b._offsetMin;f=f===g;var z=l>k-h,y=l<c.minRange,w=!1,D=!1,l=l===d;("month"===m||"year"===m)&&d+36E5>=864E5*{month:28,year:365}[m]*u-b&&d-36E5<=864E5*{month:31,year:366}[m]*u+b?l=!0:"ytd"===m?(l=n-p+b===d,w=!f):"all"===m&&(l=c.max-c.min>=k-h,D=!f&&q&&l);m=!t&&(z||y||D||e);u=f&&l||l&&!q&&!w||f&&a.frozenStates;m?x=3:u&&(q=!0,x=2);r.state!==x&&r.setState(x)})},computeButtonRange:function(a){var c=a.type,d=a.count||1,e={millisecond:1,second:1E3,
minute:6E4,hour:36E5,day:864E5,week:6048E5};if(e[c])a._range=e[c]*d;else if("month"===c||"year"===c)a._range=864E5*{month:30,year:365}[c]*d;a._offsetMin=b(a.offsetMin,0);a._offsetMax=b(a.offsetMax,0);a._range+=a._offsetMax-a._offsetMin},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this.chart.time,e=this[a+"Input"];C(b)&&(e.previousValue=e.HCTime,e.HCTime=b);e.value=d.dateFormat(c.inputEditDateFormat||"%Y-%m-%d",e.HCTime);this[a+"DateBox"].attr({text:d.dateFormat(c.inputDateFormat||
"%b %e, %Y",e.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];k(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){k(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function b(){var a=D.value,b=(x.inputDateParser||Date.parse)(a),e=f.xAxis[0],g=f.scroller&&f.scroller.xAxis?f.scroller.xAxis:e,h=g.dataMin,g=g.dataMax;
b!==D.previousValue&&(D.previousValue=b,l(b)||(b=a.split("-"),b=Date.UTC(c(b[0]),c(b[1])-1,c(b[2]))),l(b)&&(f.time.useUTC||(b+=6E4*(new Date).getTimezoneOffset()),p?b>d.maxInput.HCTime?b=void 0:b<h&&(b=h):b<d.minInput.HCTime?b=void 0:b>g&&(b=g),void 0!==b&&e.setExtremes(p?b:e.min,p?e.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})))}var d=this,f=d.chart,n=f.renderer.style||{},q=f.renderer,x=f.options.rangeSelector,w=d.div,p="min"===a,D,g,y=this.inputGroup;this[a+"Label"]=g=q.label(t.lang[p?"rangeSelectorFrom":
"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(y);y.offset+=g.width+5;this[a+"DateBox"]=q=q.label("",y.offset).addClass("highcharts-range-input").attr({padding:2,width:x.inputBoxWidth||90,height:x.inputBoxHeight||17,"text-align":"center",stroke:x.inputBoxBorderColor||"#cccccc","stroke-width":1}).on("click",function(){d.showInput(a);d[a+"Input"].focus()}).add(y);y.offset+=q.width+(p?10:0);this[a+"Input"]=D=h("input",{name:a,className:"highcharts-range-selector",
type:"text"},{top:f.plotTop+"px"},w);g.css(v(n,x.labelStyle));q.css(v({color:"#333333"},n,x.inputStyle));k(D,e({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:n.fontSize,fontFamily:n.fontFamily,top:"-9999em"},x.inputStyle));D.onfocus=function(){d.showInput(a)};D.onblur=function(){d.hideInput(a)};D.onchange=b;D.onkeypress=function(a){13===a.keyCode&&b()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a="top"===b.verticalAlign?a.plotTop-
a.axisOffset[0]:0;return{buttonTop:a+b.buttonPosition.y,inputTop:a+b.inputPosition.y-10}},getYTDExtremes:function(a,b,c){var d=this.chart.time,e=new d.Date(a),f=d.get("FullYear",e);c=c?d.Date.UTC(f,0,1):+new d.Date(f,0,1);b=Math.max(b||0,c);e=e.getTime();return{max:Math.min(a||e,e),min:b}},render:function(a,c){var d=this,e=d.chart,f=e.renderer,k=e.container,l=e.options,m=l.exporting&&!1!==l.exporting.enabled&&l.navigation&&l.navigation.buttonOptions,p=t.lang,n=d.div,g=l.rangeSelector,q=b(l.chart.style&&
l.chart.style.zIndex,0)+1,l=g.floating,x=d.buttons,n=d.inputGroup,v=g.buttonTheme,w=g.buttonPosition,A=g.inputPosition,C=g.inputEnabled,E=v&&v.states,F=e.plotLeft,G,J=d.buttonGroup,Y;Y=d.rendered;var Z=d.options.verticalAlign,ba=e.legend,ca=ba&&ba.options,da=w.y,aa=A.y,ea=Y||!1,ga=ea?"animate":"attr",W=0,V=0,T;if(!1!==g.enabled){Y||(d.group=Y=f.g("range-selector-group").attr({zIndex:7}).add(),d.buttonGroup=J=f.g("range-selector-buttons").add(Y),d.zoomText=f.text(p.rangeSelectorZoom,0,15).css(g.labelStyle).add(J),
B(d.buttonOptions,function(a,b){x[b]=f.button(a.text,0,0,function(){var c=a.events&&a.events.click,e;c&&(e=c.call(a));!1!==e&&d.clickButton(b);d.isActive=!0},v,E&&E.hover,E&&E.select,E&&E.disabled).attr({"text-align":"center"}).add(J)}),!1!==C&&(d.div=n=h("div",null,{position:"relative",height:0,zIndex:q}),k.parentNode.insertBefore(n,k),d.inputGroup=n=f.g("input-group").add(Y),n.offset=0,d.drawInput("min"),d.drawInput("max")));d.zoomText[ga]({x:b(F+w.x,F)});G=b(F+w.x,F)+d.zoomText.getBBox().width+
5;B(d.buttonOptions,function(a,c){x[c][ga]({x:G});G+=x[c].width+b(g.buttonSpacing,5)});F=e.plotLeft-e.spacing[3];d.updateButtonStates();m&&this.titleCollision(e)&&"top"===Z&&"right"===w.align&&w.y+J.getBBox().height-12<(m.y||0)+m.height&&(W=-40);"left"===w.align?T=w.x-e.spacing[3]:"right"===w.align&&(T=w.x+W-e.spacing[1]);J.align({y:w.y,width:J.getBBox().width,align:w.align,x:T},!0,e.spacingBox);d.group.placed=ea;d.buttonGroup.placed=ea;!1!==C&&(W=m&&this.titleCollision(e)&&"top"===Z&&"right"===A.align&&
A.y-n.getBBox().height-12<(m.y||0)+m.height+e.spacing[0]?-40:0,"left"===A.align?T=F:"right"===A.align&&(T=-Math.max(e.axisOffset[1],-W)),n.align({y:A.y,width:n.getBBox().width,align:A.align,x:A.x+T-2},!0,e.spacingBox),k=n.alignAttr.translateX+n.alignOptions.x-W+n.getBBox().x+2,m=n.alignOptions.width,p=J.alignAttr.translateX+J.getBBox().x,T=J.getBBox().width+20,(A.align===w.align||p+T>k&&k+m>p&&da<aa+n.getBBox().height)&&n.attr({translateX:n.alignAttr.translateX+(e.axisOffset[1]>=-W?0:-W),translateY:n.alignAttr.translateY+
J.getBBox().height+10}),d.setInputValue("min",a),d.setInputValue("max",c),d.inputGroup.placed=ea);d.group.align({verticalAlign:Z},!0,e.spacingBox);a=d.group.getBBox().height+20;c=d.group.alignAttr.translateY;"bottom"===Z&&(ba=ca&&"bottom"===ca.verticalAlign&&ca.enabled&&!ca.floating?ba.legendHeight+b(ca.margin,10):0,a=a+ba-20,V=c-a-(l?0:g.y)-10);if("top"===Z)l&&(V=0),e.titleOffset&&(V=e.titleOffset+e.options.title.margin),V+=e.margin[0]-e.spacing[0]||0;else if("middle"===Z)if(aa===da)V=0>aa?c+void 0:
c;else if(aa||da)V=0>aa||0>da?V-Math.min(aa,da):c-a+NaN;d.group.translate(g.x,g.y+Math.floor(V));!1!==C&&(d.minInput.style.marginTop=d.group.translateY+"px",d.maxInput.style.marginTop=d.group.translateY+"px");d.rendered=!0}},getHeight:function(){var a=this.options,b=this.group,c=a.y,d=a.buttonPosition.y,a=a.inputPosition.y,b=b?b.getBBox(!0).height+13+c:0,c=Math.min(a,d);if(0>a&&0>d||0<a&&0<d)b+=Math.abs(c);return b},titleCollision:function(a){return!(a.options.title.text||a.options.subtitle.text)},
update:function(a){var b=this.chart;v(!0,b.options.rangeSelector,a);this.destroy();this.init(b);b.rangeSelector.render()},destroy:function(){var b=this,c=b.minInput,d=b.maxInput;b.unMouseDown();b.unResize();n(b.buttons);c&&(c.onfocus=c.onblur=c.onchange=null);d&&(d.onfocus=d.onblur=d.onchange=null);a.objectEach(b,function(a,c){a&&"chart"!==c&&(a.destroy?a.destroy():a.nodeType&&A(this[c]));a!==E.prototype[c]&&(b[c]=null)},this)}};G.prototype.toFixedRange=function(a,c,d,e){var f=this.chart&&this.chart.fixedRange;
a=b(d,this.translate(a,!0,!this.horiz));c=b(e,this.translate(c,!0,!this.horiz));d=f&&(c-a)/f;.7<d&&1.3>d&&(e?a=c-f:c=a+f);l(a)&&l(c)||(a=c=void 0);return{min:a,max:c}};G.prototype.minFromRange=function(){var a=this.range,c={month:"Month",year:"FullYear"}[a.type],d,e=this.max,f,h,k=function(a,b){var d=new Date(a),e=d["get"+c]();d["set"+c](e+b);e===d["get"+c]()&&d.setDate(0);return d.getTime()-a};l(a)?(d=e-a,h=a):(d=e+k(e,-a.count),this.chart&&(this.chart.fixedRange=e-d));f=b(this.dataMin,Number.MIN_VALUE);
l(d)||(d=f);d<=f&&(d=f,void 0===h&&(h=k(d,a.count)),this.newMax=Math.min(d+h,this.dataMax));l(e)||(d=void 0);return d};F(q,"afterGetContainer",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new E(this))});w(q.prototype,"render",function(a,b,c){var d=this.axes,e=this.rangeSelector;e&&(B(d,function(a){a.updateNames();a.setScale()}),this.getAxisMargins(),e.render(),d=e.options.verticalAlign,e.options.floating||("bottom"===d?this.extraBottomMargin=!0:"middle"!==d&&(this.extraTopMargin=
!0)));a.call(this,b,c)});F(q,"update",function(a){var b=a.options.rangeSelector;a=this.rangeSelector;var c=this.extraBottomMargin,d=this.extraTopMargin;b&&b.enabled&&!C(a)&&(this.options.rangeSelector.enabled=!0,this.rangeSelector=new E(this));this.extraTopMargin=this.extraBottomMargin=!1;a&&(a.render(),b=b&&b.verticalAlign||a.options&&a.options.verticalAlign,a.options.floating||("bottom"===b?this.extraBottomMargin=!0:"middle"!==b&&(this.extraTopMargin=!0)),this.extraBottomMargin!==c||this.extraTopMargin!==
d)&&(this.isDirtyBox=!0)});w(q.prototype,"redraw",function(a,b,c){var d=this.rangeSelector;d&&!d.options.floating&&(d.render(),d=d.options.verticalAlign,"bottom"===d?this.extraBottomMargin=!0:"middle"!==d&&(this.extraTopMargin=!0));a.call(this,b,c)});F(q,"getMargins",function(){var a=this.rangeSelector;a&&(a=a.getHeight(),this.extraTopMargin&&(this.plotTop+=a),this.extraBottomMargin&&(this.marginBottom+=a))});q.prototype.callbacks.push(function(a){function b(){c=a.xAxis[0].getExtremes();l(c.min)&&
d.render(c.min,c.max)}var c,d=a.rangeSelector,e,f;d&&(f=F(a.xAxis[0],"afterSetExtremes",function(a){d.render(a.min,a.max)}),e=F(a,"redraw",b),b());F(a,"destroy",function(){d&&(e(),f())})});a.RangeSelector=E})(J);(function(a){var E=a.addEvent,F=a.arrayMax,G=a.arrayMin,q=a.Axis,k=a.Chart,h=a.defined,t=a.each,C=a.extend,n=a.format,A=a.grep,B=a.inArray,e=a.isNumber,d=a.isString,l=a.map,v=a.merge,b=a.pick,c=a.Point,f=a.Renderer,w=a.Series,x=a.splat,m=a.SVGRenderer,I=a.VMLRenderer,z=a.wrap,u=w.prototype,
r=u.init,J=u.processData,H=c.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(c,e,g){var f=d(c)||c.nodeName,h=arguments[f?1:0],p=h.series,m=a.getOptions(),n,q=b(h.navigator&&h.navigator.enabled,m.navigator.enabled,!0),t=q?{startOnTick:!1,endOnTick:!1}:null,r={marker:{enabled:!1,radius:2}},u={shadow:!1,borderWidth:0};h.xAxis=l(x(h.xAxis||{}),function(a,b){return v({minPadding:0,maxPadding:0,overscroll:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},m.xAxis,
m.xAxis&&m.xAxis[b],a,{type:"datetime",categories:null},t)});h.yAxis=l(x(h.yAxis||{}),function(a,c){n=b(a.opposite,!0);return v({labels:{y:-2},opposite:n,showLastLabel:!(!a.categories&&"category"!==a.type),title:{text:null}},m.yAxis,m.yAxis&&m.yAxis[c],a)});h.series=null;h=v({chart:{panning:!0,pinchType:"x"},navigator:{enabled:q},scrollbar:{enabled:b(m.scrollbar.enabled,!0)},rangeSelector:{enabled:b(m.rangeSelector.enabled,!0)},title:{text:null},tooltip:{split:b(m.tooltip.split,!0),crosshairs:!0},
legend:{enabled:!1},plotOptions:{line:r,spline:r,area:r,areaspline:r,arearange:r,areasplinerange:r,column:u,columnrange:u,candlestick:u,ohlc:u}},h,{isStock:!0});h.series=p;return f?new k(c,h,g):new k(h,e)};z(q.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&(d.x=0),void 0===d.align&&(d.align="right"),b[c]=this,"right"):
a.apply(this,[].slice.call(arguments,1))});E(q,"destroy",function(){var a=this.chart,b=this.options&&this.options.top+","+this.options.height;b&&a._labelPanes&&a._labelPanes[b]===this&&delete a._labelPanes[b]});z(q.prototype,"getPlotLinePath",function(c,f,g,k,m,n){var p=this,q=this.isLinked&&!this.series?this.linkedParent.series:this.series,r=p.chart,u=r.renderer,v=p.left,w=p.top,y,x,z,A,D=[],C=[],E,F;if("xAxis"!==p.coll&&"yAxis"!==p.coll)return c.apply(this,[].slice.call(arguments,1));C=function(a){var b=
"xAxis"===a?"yAxis":"xAxis";a=p.options[b];return e(a)?[r[b][a]]:d(a)?[r.get(a)]:l(q,function(a){return a[b]})}(p.coll);t(p.isXAxis?r.yAxis:r.xAxis,function(a){if(h(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=h(a.options[b])?r[b][a.options[b]]:r[b][0];p===b&&C.push(a)}});E=C.length?[]:[p.isXAxis?r.yAxis[0]:r.xAxis[0]];t(C,function(b){-1!==B(b,E)||a.find(E,function(a){return a.pos===b.pos&&a.len===b.len})||E.push(b)});F=b(n,p.translate(f,null,null,k));
e(F)&&(p.horiz?t(E,function(a){var b;x=a.pos;A=x+a.len;y=z=Math.round(F+p.transB);"pass"!==m&&(y<v||y>v+p.width)&&(m?y=z=Math.min(Math.max(v,y),v+p.width):b=!0);b||D.push("M",y,x,"L",z,A)}):t(E,function(a){var b;y=a.pos;z=y+a.len;x=A=Math.round(w+p.height-F);"pass"!==m&&(x<w||x>w+p.height)&&(m?x=A=Math.min(Math.max(w,x),p.top+p.height):b=!0);b||D.push("M",y,x,"L",z,A)}));return 0<D.length?u.crispPolyLine(D,g||1):null});m.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===
a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+b%2/2);return a};f===I&&(I.prototype.crispPolyLine=m.prototype.crispPolyLine);z(q.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});E(q,"afterDrawCrosshair",function(a){var c,d;if(h(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){var e=this.chart,f=this.options.crosshair.label,k=this.horiz;c=this.opposite;d=this.left;
var l=this.top,m=this.crossLabel,p=f.format,q="",r="inside"===this.options.tickPosition,t=!1!==this.crosshair.snap,u=0,v=a.e||this.cross&&this.cross.e,w=a.point;a=this.lin2log;var x,z;this.isLog?(x=a(this.min),z=a(this.max)):(x=this.min,z=this.max);a=k?"center":c?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";m||(m=this.crossLabel=e.renderer.label(null,null,null,f.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:f.align||
a,padding:b(f.padding,8),r:b(f.borderRadius,3),zIndex:2}).add(this.labelGroup),m.attr({fill:f.backgroundColor||this.series[0]&&this.series[0].color||"#666666",stroke:f.borderColor||"","stroke-width":f.borderWidth||0}).css(C({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},f.style)));k?(a=t?w.plotX+d:v.chartX,l+=c?0:this.height):(a=c?this.width+d:0,l=t?w.plotY+l:v.chartY);p||f.formatter||(this.isDatetimeAxis&&(q="%b %d, %Y"),p="{value"+(q?":"+q:"")+"}");q=t?w[this.isXAxis?"x":
"y"]:this.toValue(k?v.chartX:v.chartY);m.attr({text:p?n(p,{value:q},e.time):f.formatter.call(this,q),x:a,y:l,visibility:q<x||q>z?"hidden":"visible"});f=m.getBBox();if(k){if(r&&!c||!r&&c)l=m.y-f.height}else l=m.y-f.height/2;k?(c=d-f.x,d=d+this.width-f.x):(c="left"===this.labelAlign?d:0,d="right"===this.labelAlign?d+this.width:e.chartWidth);m.translateX<c&&(u=c-m.translateX);m.translateX+f.width>=d&&(u=-(m.translateX+f.width-d));m.attr({x:a+u,y:l,anchorX:k?a:this.opposite?0:e.chartWidth,anchorY:k?this.opposite?
e.chartHeight:0:l+f.height/2})}});u.init=function(){r.apply(this,arguments);this.setCompare(this.options.compare)};u.setCompare=function(a){this.modifyValue="value"===a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};u.processData=function(){var a,b=-1,c,d,f=!0===this.options.compareStart?0:1,h,k;J.apply(this,
arguments);if(this.xAxis&&this.processedYData)for(c=this.processedXData,d=this.processedYData,h=d.length,this.pointArrayMap&&(b=B("close",this.pointArrayMap),-1===b&&(b=B(this.pointValKey||"y",this.pointArrayMap))),a=0;a<h-f;a++)if(k=d[a]&&-1<b?d[a][b]:d[a],e(k)&&c[a+f]>=this.xAxis.min&&0!==k){this.compareValue=k;break}};z(u,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));this.modifyValue&&(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=G(b),
this.dataMax=F(b))});q.prototype.setCompare=function(a,c){this.isXAxis||(t(this.series,function(b){b.setCompare(a)}),b(c,!0)&&this.chart.redraw())};c.prototype.tooltipFormatter=function(c){c=c.replace("{point.change}",(0<this.change?"+":"")+a.numberFormat(this.change,b(this.series.tooltipOptions.changeDecimals,2)));return H.apply(this,[c])};z(w.prototype,"render",function(a){var b;this.chart.is3d&&this.chart.is3d()||this.chart.polar||!this.xAxis||this.xAxis.isRadial||(b=this.yAxis.len-(this.xAxis.axisLine?
Math.floor(this.xAxis.axisLine.strokeWidth()/2):0),!this.clipBox&&this.animate?(this.clipBox=v(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=b):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:b}):this.clipBox&&(this.clipBox.width=this.xAxis.len,this.clipBox.height=b));a.call(this)});z(k.prototype,"getSelectedPoints",function(a){var b=a.call(this);t(this.series,function(a){a.hasGroupedData&&(b=b.concat(A(a.points||[],function(a){return a.selected})))});
return b});E(k,"update",function(a){a=a.options;"scrollbar"in a&&this.navigator&&(v(!0,this.options.scrollbar,a.scrollbar),this.navigator.update({},!1),delete a.scrollbar)})})(J);return J});
//# sourceMappingURL=highstock.js.map


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/next-server/dist/lib/mitt.js":
/*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/mitt.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _create = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = (0, _create.default)(null);
  return {
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/request-context.js":
/*!**************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/request-context.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RequestContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router-context.js":
/*!*************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router-context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/router.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next-server/dist/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next-server/dist/lib/utils.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        Component = _ref.Component,
        err = _ref.err;
    (0, _classCallCheck2.default)(this, Router);

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.subscriptions = new _set.default();
    this.componentLoadCancel = null;

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
      window.addEventListener('unload', function () {
        // Workaround for popstate firing on initial page load when
        // navigating back from an external site
        if (history.state) {
          var _history$state = history.state,
              url = _history$state.url,
              _as2 = _history$state.as,
              options = _history$state.options;

          _this.changeState('replaceState', url, _as2, (0, _assign.default)({}, options, {
            fromExternal: true
          }));
        }
      });
    }
  }

  (0, _createClass2.default)(Router, [{
    key: "update",
    value: function update(route, Component) {
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = (0, _assign.default)({}, data, {
        Component: Component
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload(route) {
      var _this2 = this;

      return new _promise.default(function (resolve, reject) {
        delete _this2.components[route];

        _this2.pageLoader.clearCache(route);

        if (route !== _this2.route) {
          return resolve();
        }

        var pathname = _this2.pathname,
            query = _this2.query;
        var url = window.location.href; // This makes sure we only use pathname + query + hash, to mirror `asPath` coming from the server.

        var as = window.location.pathname + window.location.search + window.location.hash;
        Router.events.emit('routeChangeStart', url);

        _this2.getRouteInfo(route, pathname, query, as).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve();
          }

          _this2.notify(routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, url);
            return reject(error);
          }

          Router.events.emit('routeChangeComplete', url);
        });
      });
    }
  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this3 = this;

      return new _promise.default(function (resolve, reject) {
        // If url and as provided as an object representation,
        // we'll format them into the string version here.
        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (true) {
          // @ts-ignore this is temporarily global (attached to window)
          if (__NEXT_DATA__.nextExport) {
            as = Router._rewriteUrlForNextExport(as);
          }
        }

        _this3.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.


        if (_this3.onlyAHashChange(as)) {
          Router.events.emit('hashChangeStart', as);

          _this3.changeState(method, url, as);

          _this3.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return true;
        }

        var _url_1$parse = url_1.parse(url, true),
            pathname = _url_1$parse.pathname,
            query = _url_1$parse.query; // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this3.urlIsNew(as)) {
          method = 'replaceState';
        } // @ts-ignore pathname is always a string


        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;
        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
        // @ts-ignore pathname is always a string

        _this3.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this3.changeState(method, url, as, options);

          var hash = window.location.hash.substring(1); // @ts-ignore pathname is always defined

          _this3.set(route, pathname, query, as, (0, _assign.default)({}, routeInfo, {
            hash: hash
          }));

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        } // @ts-ignore method should always exist on history


        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        // @ts-ignore method should always exist on history
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this4 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return _promise.default.resolve(cachedRouteInfo);
      }

      return new _promise.default(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this4.fetchComponent(route).then(function (Component) {
          return resolve({
            Component: Component
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return new _promise.default(function (resolve, reject) {
          var ctx = {
            pathname: pathname,
            query: query,
            asPath: as
          };

          _this4.getInitialProps(Component, ctx).then(function (props) {
            routeInfo.props = props;
            _this4.components[route] = routeInfo;
            resolve(routeInfo);
          }, reject);
        });
      }).catch(function (err) {
        return new _promise.default(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR') {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this4.fetchComponent('/_error').then(function (Component) {
            var routeInfo = {
              Component: Component,
              err: err
            };
            var ctx = {
              err: err,
              pathname: pathname,
              query: query
            };
            return new _promise.default(function (resolve) {
              _this4.getInitialProps(Component, ctx).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          }));
        });
      });
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = (0, _slicedToArray2.default)(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray2.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray2.default)(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this5 = this;

      return new _promise.default(function (resolve, reject) {
        // Prefetch is not supported in development mode because it would trigger on-demand-entries
        if (true) return;

        var _url_1$parse2 = url_1.parse(url),
            pathname = _url_1$parse2.pathname; // @ts-ignore pathname is always defined


        var route = toRoute(pathname);

        _this5.pageLoader.prefetch(route).then(resolve, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(route) {
        var cancelled, cancel, Component, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                Component = _context.sent;

                if (!cancelled) {
                  _context.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context.abrupt("return", Component);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchComponent(_x) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(Component, ctx) {
        var cancelled, cancel, App, props, err;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;
                App = this.components['/_app'].Component;
                _context2.next = 6;
                return utils_1.loadGetInitialProps(App, {
                  Component: Component,
                  router: this,
                  ctx: ctx
                });

              case 6:
                props = _context2.sent;

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context2.next = 12;
                  break;
                }

                err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;

              case 12:
                return _context2.abrupt("return", props);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2, _x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        Router.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      var App = this.components['/_app'].Component;
      this.subscriptions.forEach(function (fn) {
        return fn((0, _assign.default)({}, data, {
          App: App
        }));
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this6 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this6.subscriptions.delete(fn);
      };
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      var _url$split = url.split('#'),
          _url$split2 = (0, _slicedToArray2.default)(_url$split, 2),
          pathname = _url$split2[0],
          hash = _url$split2[1]; // tslint:disable-next-line


      var _pathname$split = pathname.split('?'),
          _pathname$split2 = (0, _slicedToArray2.default)(_pathname$split, 2),
          path = _pathname$split2[0],
          qs = _pathname$split2[1];

      path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

      if (!/\.[^/]+\/?$/.test(path)) path += "/";
      if (qs) path += '?' + qs;
      if (hash) path += '#' + hash;
      return path;
    }
  }]);
  return Router;
}();

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/next-server/dist/lib/utils.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(Component, ctx) {
    var message, props, _message;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!(Component.prototype && Component.prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            if (Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {});

          case 6:
            _context.next = 8;
            return Component.getInitialProps(ctx);

          case 8:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", props);

          case 11:
            if (props) {
              _context.next = 14;
              break;
            }

            _message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 14:
            return _context.abrupt("return", props);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      (0, _keys.default)(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjat%5Clearningspace%5Cdoyo-nextjs%5Cpages%5Cindex.js!./":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjat%5Clearningspace%5Cdoyo-nextjs%5Cpages%5Cindex.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "./node_modules/next-server/dist/lib/router/router.js"));

exports.Router = router_1.default;

var router_context_1 = __webpack_require__(/*! next-server/dist/lib/router-context */ "./node_modules/next-server/dist/lib/router-context.js");

var request_context_1 = __webpack_require__(/*! next-server/dist/lib/request-context */ "./node_modules/next-server/dist/lib/request-context.js");

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // const x = SingletonRouter as IRealRouter
// Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  SingletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var singletonRouter = SingletonRouter;

      if (singletonRouter[eventField]) {
        try {
          singletonRouter[eventField].apply(singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: ".concat(eventField)); // tslint:disable-next-line:no-console

          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return SingletonRouter.router;
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default;

function useRouter() {
  return react_1.default.useContext(router_context_1.RouterContext);
}

exports.useRouter = useRouter;

function useRequest() {
  return react_1.default.useContext(request_context_1.RequestContext);
}

exports.useRequest = useRequest; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // This function is used to create the `withRouter` router instance


function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _assign.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$default$Comp) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$default$Comp);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.default.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouteWrapper;
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-highcharts/ReactHighstock.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-highcharts/ReactHighstock.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js")):undefined}("undefined"!=typeof self?self:this,function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(e,r){e.exports=t},function(t,e,r){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});var o,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(0),u=(o=a,o&&o.__esModule?o:{default:o});var s=void 0===n?window:n;e.default=function(e,r){var n=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,a.Component);function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return t.chartType=e,t.Highcharts=r,t.displayName="Highcharts"+e,t}return c(n,[{key:"setChartRef",value:function(t){this.chartRef=t}},{key:"renderChart",value:function(t){var e=this;if(!t)throw new Error("Config must be specified for the "+this.displayName+" component");var r=t.chart;this.chart=new this.Highcharts[this.chartType](i({},t,{chart:i({},r,{renderTo:this.chartRef})}),this.props.callback),this.props.neverReflow||s&&s.requestAnimationFrame&&requestAnimationFrame(function(){e.chart&&e.chart.options&&e.chart.reflow()})}},{key:"shouldComponentUpdate",value:function(t){return!!(t.neverReflow||t.isPureConfig&&this.props.config===t.config)||(this.renderChart(t.config),!1)}},{key:"getChart",value:function(){if(!this.chart)throw new Error("getChart() should not be called before the component is mounted");return this.chart}},{key:"componentDidMount",value:function(){this.renderChart(this.props.config)}},{key:"componentWillUnmount",value:function(){this.chart.destroy()}},{key:"render",value:function(){return u.default.createElement("div",i({ref:this.setChartRef.bind(this)},this.props.domProps))}}]),n}();n.defaultProps={callback:function(){},domProps:{}};var o=n;return o.Highcharts=r,o.withHighcharts=function(r){return t.exports(e,r)},o},t.exports=e.default}).call(e,r(2))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},,,,,function(t,e,r){t.exports=r(8)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r(1)),o=i(r(9));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)("StockChart",o.default),t.exports=e.default},function(t,r){t.exports=e}])});

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_stocks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/stocks.json */ "./data/stocks.json");
var _data_stocks_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/stocks.json */ "./data/stocks.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Stocks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Stocks */ "./components/Stocks.js");







var _jsxFileName = "C:\\Users\\jat\\learningspace\\doyo-nextjs\\pages\\index.js";





var quandlAPIKey = 'oUSLiCbXATD2xbPCxnJf';

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Home).call(this, props));
    _this.state = {
      stockItems: [],
      stocks: [],
      selectedStocks: []
    };
    _this.handleAddMoreStock = _this.handleAddMoreStock.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_data_stocks_json__WEBPACK_IMPORTED_MODULE_9__ && _data_stocks_json__WEBPACK_IMPORTED_MODULE_9__.datasets) {
        var defaultStock = [_data_stocks_json__WEBPACK_IMPORTED_MODULE_9__.datasets[0]];
        this.setState({
          stocks: _data_stocks_json__WEBPACK_IMPORTED_MODULE_9__.datasets,
          selectedStocks: defaultStock,
          stockItems: [defaultStock[0].dataset_code]
        });
      }
    }
  }, {
    key: "makeEntryOfStock",
    value: function makeEntryOfStock(name) {
      console.log('makeEntryOfStock ', name);
      var _this$state = this.state,
          stocks = _this$state.stocks,
          selectedStocks = _this$state.selectedStocks;
      var filterStock = stocks.filter(function (stock) {
        return stock.dataset_code === name;
      });
      var newStockLists = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedStocks), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filterStock));
      this.setState({
        selectedStocks: newStockLists
      });
    }
  }, {
    key: "handleAddMoreStock",
    value: function handleAddMoreStock(e) {
      var curValue = e.target.value;
      var stockItems = this.state.stockItems;

      if (curValue) {
        stockItems.includes(curValue) ? '' : this.makeEntryOfStock(curValue);
        stockItems.push(curValue);
        this.setState({
          stockItems: stockItems
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          stocks = _this$state2.stocks,
          selectedStocks = _this$state2.selectedStocks; // console.log(stocks, selectedStocks);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Stocks__WEBPACK_IMPORTED_MODULE_11__["default"], {
        stocks: stocks,
        selectedStocks: selectedStocks,
        handleAddMoreStock: this.handleAddMoreStock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjat%5Clearningspace%5Cdoyo-nextjs%5Cpages%5Cindex.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjat%5Clearningspace%5Cdoyo-nextjs%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cjat%5Clearningspace%5Cdoyo-nextjs%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_1aef2d0bbc0d334d831c":
/*!*******************************************!*\
  !*** external "dll_1aef2d0bbc0d334d831c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_1aef2d0bbc0d334d831c;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map