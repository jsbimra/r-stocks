module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_highcharts_ReactHighstock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-highcharts/ReactHighstock */ "react-highcharts/ReactHighstock");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StockChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StockChart */ "./components/StockChart.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "util");
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

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

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

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jat\learningspace\doyo-nextjs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-highcharts/ReactHighstock":
/*!**************************************************!*\
  !*** external "react-highcharts/ReactHighstock" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-highcharts/ReactHighstock");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map