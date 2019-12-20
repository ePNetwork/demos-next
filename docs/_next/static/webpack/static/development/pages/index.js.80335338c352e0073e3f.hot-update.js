webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LinkGenForm/index.tsx":
/*!******************************************!*\
  !*** ./components/LinkGenForm/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var tracking_rotations_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tracking-rotations-util */ "./node_modules/tracking-rotations-util/dist/index.js");
/* harmony import */ var tracking_rotations_util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tracking_rotations_util__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! chocolate-convertor */ "./node_modules/chocolate-convertor/dist/index.js");
/* harmony import */ var chocolate_convertor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LinkClipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../LinkClipboard */ "./components/LinkClipboard/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.scss */ "./components/LinkGenForm/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/asinner/developer/epn/demos-next/components/LinkGenForm/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8__["createElement"];







var LinkGenForm =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LinkGenForm, _React$PureComponent);

  function LinkGenForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LinkGenForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LinkGenForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onCloseModal", function () {
      _this.setState({
        showModal: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function (event) {
      _this.setState({
        clickURL: '',
        impressionURL: ''
      });

      event.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (err) {
          console.warn(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(err));
          return;
        }

        if (!values.url) {
          return antd__WEBPACK_IMPORTED_MODULE_9__["message"].error('Please enter a valid eBay URL');
        }

        if (!values.campid) {
          return antd__WEBPACK_IMPORTED_MODULE_9__["message"].error('Please enter a campaign ID');
        }

        var rotation = tracking_rotations_util__WEBPACK_IMPORTED_MODULE_10__["getRotationByURL"](values.url);

        if (!rotation) {
          return antd__WEBPACK_IMPORTED_MODULE_9__["message"].error('No rotation found for your eBay URL');
        }

        var clickOpts = {
          mkcid: chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__["MarketingChannel"].EPN,
          mkrid: rotation.id,
          siteid: rotation.siteId,
          campid: values.campid.toString(),
          customid: values.customid,
          toolid: '10001'
        };
        var clickURL = Object(chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__["getClickLink"])(values.url, clickOpts);
        var impOpts = {
          mkcid: chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__["MarketingChannel"].EPN,
          mkrid: rotation.id,
          siteid: rotation.siteId,
          mkevt: chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__["MarketingEventType"].Impression,
          ad_type: chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__["AdType"].Tracer,
          campid: values.campid.toString(),
          toolid: '10001'
        };
        var impressionURL = Object(chocolate_convertor__WEBPACK_IMPORTED_MODULE_11__["getImpressionLink"])(impOpts);

        _this.setState({
          clickURL: clickURL,
          impressionURL: impressionURL,
          showModal: true
        });
      });
    });

    _this.state = {
      clickURL: '',
      impressionURL: '',
      showModal: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkGenForm, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "link-gen-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("h1", {
        className: "link-gen-form__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Chocolate Link Generator"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        className: "link-gen-form__form",
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"].Item, {
        label: "eBay URL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.form.getFieldDecorator('url', {
        rules: [{
          required: true,
          validator: function validator(_rule, value, cb) {
            if (!tracking_rotations_util__WEBPACK_IMPORTED_MODULE_10__["isValidRotationURL"](value)) {
              cb('Please enter a valid eBay domain');
            } else {
              cb();
            }
          }
        }]
      })(__jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        autoFocus: true,
        placeholder: "eBay URL (eg. www.ebay.com)",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"].Item, {
        label: "Campaign ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.props.form.getFieldDecorator('campid', {
        rules: [{
          required: true,
          message: 'Campaign ID is required'
        }]
      })(__jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Campaign ID",
        type: "number",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"].Item, {
        label: "Custom ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.form.getFieldDecorator('customid', {
        rules: [{
          required: false
        }]
      })(__jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Custom ID",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        size: "large",
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Generate")), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        cancelButtonProps: {
          style: {
            display: 'none'
          }
        },
        okText: "Done",
        onCancel: this.onCloseModal,
        onOk: this.onCloseModal,
        visible: this.state.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx(_LinkClipboard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        clickURL: this.state.clickURL,
        impressionURL: this.state.impressionURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })));
    }
  }]);

  return LinkGenForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_9__["Form"].create()(LinkGenForm));

/***/ })

})
//# sourceMappingURL=index.js.80335338c352e0073e3f.hot-update.js.map