/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar IssueAdd = function (_React$Component) {\n\t_inherits(IssueAdd, _React$Component);\n\n\tfunction IssueAdd() {\n\t\t_classCallCheck(this, IssueAdd);\n\n\t\tvar _this = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));\n\n\t\t_this.handleSubmit = _this.handleSubmit.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(IssueAdd, [{\n\t\tkey: \"handleSubmit\",\n\t\tvalue: function handleSubmit(e) {\n\t\t\te.preventDefault();\n\t\t\tvar form = document.forms.issueAdd;\n\t\t\tconsole.log(form.owner.value, form.title.value);\n\t\t\tthis.props.createIssue({\n\t\t\t\towner: form.owner.value,\n\t\t\t\ttitle: form.title.value\n\n\t\t\t});\n\t\t\tform.owner.value = \"\";\n\t\t\tform.title.value = \"\";\n\t\t}\n\t}, {\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"form\",\n\t\t\t\t\t{ name: \"issueAdd\", onSubmit: this.handleSubmit },\n\t\t\t\t\tReact.createElement(\"input\", { type: \"text\", name: \"owner\", placeholder: \"owner\" }),\n\t\t\t\t\tReact.createElement(\"input\", { type: \"text\", name: \"title\", placeholder: \"Title\" }),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"button\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"Add\"\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn IssueAdd;\n}(React.Component);\n\nexports.default = IssueAdd;\n\n//# sourceURL=webpack:///./src/IssueAdd.jsx?");

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _IssueAdd = __webpack_require__(/*! ./IssueAdd.jsx */ \"./src/IssueAdd.jsx\");\n\nvar _IssueAdd2 = _interopRequireDefault(_IssueAdd);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar contentNode = document.getElementById('contents');\n/*const issues = [{\r\n\tid: 1,\r\n\tstatus: 'Open',\r\n\towner: 'Ravan',\r\n\tcreated: new Date('2019-2-25'),\r\n\teffort: 5,\r\n\tcompletionDate: undefined,\r\n\ttitle: 'Error in console when clicking add'\r\n},\r\n{\r\n\tid: 2,\r\n\tstatus: 'Assigned',\r\n\towner: 'fuck',\r\n\tcreated: new Date('2019-2-25'),\r\n\teffort: 14,\r\n\tcompletionDate: new Date('2019-2-26'),\r\n\ttitle: 'Missing bottom border on panel'\r\n}\r\n\r\n]*/\n\nvar IssueFilter = function (_React$Component) {\n\t_inherits(IssueFilter, _React$Component);\n\n\tfunction IssueFilter() {\n\t\t_classCallCheck(this, IssueFilter);\n\n\t\treturn _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));\n\t}\n\n\t_createClass(IssueFilter, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t'this is placeholder for filter'\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn IssueFilter;\n}(React.Component);\n\nvar IssueRow = function (_React$Component2) {\n\t_inherits(IssueRow, _React$Component2);\n\n\tfunction IssueRow() {\n\t\t_classCallCheck(this, IssueRow);\n\n\t\treturn _possibleConstructorReturn(this, (IssueRow.__proto__ || Object.getPrototypeOf(IssueRow)).apply(this, arguments));\n\t}\n\n\t_createClass(IssueRow, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\n\t\t\tvar issue = this.props.issue;\n\t\t\treturn React.createElement(\n\t\t\t\t'tr',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tissue._id\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tissue.status\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tissue.owner\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tissue.created.toDateString()\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tissue.effort\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tissue.completionDate ? issue.completionDate.toDateString() : \" \"\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\tnull,\n\t\t\t\t\tissue.title\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn IssueRow;\n}(React.Component);\n\nvar IssueTable = function (_React$Component3) {\n\t_inherits(IssueTable, _React$Component3);\n\n\tfunction IssueTable() {\n\t\t_classCallCheck(this, IssueTable);\n\n\t\treturn _possibleConstructorReturn(this, (IssueTable.__proto__ || Object.getPrototypeOf(IssueTable)).apply(this, arguments));\n\t}\n\n\t_createClass(IssueTable, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\n\t\t\tvar issueRows = this.props.issues.map(function (issue) {\n\t\t\t\treturn React.createElement(IssueRow, { key: issue._id, issue: issue });\n\t\t\t});\n\t\t\treturn React.createElement(\n\t\t\t\t'table',\n\t\t\t\t{ style: { borderCollapse: \"collapse\" } },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'thead',\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'tr',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Id'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u72B6\\u6001'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u62E5\\u6709\\u8005'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u521B\\u9020\\u65E5\\u671F'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u751F\\u6548\\u671F'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u5B8C\\u6210\\u65E5\\u671F'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Title'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'tbody',\n\t\t\t\t\tnull,\n\t\t\t\t\tissueRows\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn IssueTable;\n}(React.Component);\n\nvar IssueList = function (_React$Component4) {\n\t_inherits(IssueList, _React$Component4);\n\n\tfunction IssueList() {\n\t\t_classCallCheck(this, IssueList);\n\n\t\tvar _this4 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));\n\n\t\t_this4.state = { issues: [] };\n\t\t_this4.createIssue = _this4.createIssue.bind(_this4);\n\t\treturn _this4;\n\t}\n\n\t_createClass(IssueList, [{\n\t\tkey: 'createIssue',\n\t\tvalue: function createIssue(newIssue) {\n\t\t\tvar _this5 = this;\n\n\t\t\tconsole.log(\"in createIssue,newIssue:\", newIssue, JSON.stringify(newIssue));\n\t\t\tfetch('http://localhost:3000/api/issues', {\n\t\t\t\tmethod: 'POST',\n\t\t\t\tmode: 'cors',\n\t\t\t\theaders: { 'Content-Type': 'application/json' },\n\t\t\t\tbody: JSON.stringify(newIssue)\n\t\t\t}).then(function (response) {\n\t\t\t\tif (response.ok) {\n\t\t\t\t\tfetch('http://localhost:3000/api/issues', {\n\t\t\t\t\t\tmethod: 'GET',\n\t\t\t\t\t\tmode: 'cors',\n\n\t\t\t\t\t\tcache: 'default'\n\t\t\t\t\t}).then(function (res) {\n\t\t\t\t\t\treturn res.json();\n\t\t\t\t\t}).then(function (data) {\n\n\t\t\t\t\t\tdata.records.forEach(function (issue) {\n\t\t\t\t\t\t\tissue.created = new Date(issue.created);\n\t\t\t\t\t\t\tif (issue.completionDate) {\n\t\t\t\t\t\t\t\tissue.completionDate = new Date(issue.completionDate);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\t_this5.setState({ issues: data.records });\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\tresponse.json().then(function (error) {\n\t\t\t\t\t\talert(\"faild to add issue:\" + error.message);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}).catch(function (err) {\n\n\t\t\t\tconsole.log(\"err in sending msg to svr:\", err.message);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tthis.loadData();\n\t\t}\n\t}, {\n\t\tkey: 'loadData',\n\t\tvalue: function loadData() {\n\t\t\tvar _this6 = this;\n\n\t\t\tfetch('http://localhost:3000/api/issues', {\n\t\t\t\tmethod: 'GET',\n\t\t\t\tmode: 'cors',\n\t\t\t\tcache: 'default'\n\n\t\t\t}).then(function (response) {\n\t\t\t\tif (response.ok) {\n\t\t\t\t\tresponse.json().then(function (data) {\n\t\t\t\t\t\tconsole.log(\"data after get:\", data.records);\n\t\t\t\t\t\tconsole.log(\"total count:\", data._metadata.total_count);\n\t\t\t\t\t\tdata.records.forEach(function (issue) {\n\t\t\t\t\t\t\tissue.created = new Date(issue.created);\n\t\t\t\t\t\t\tif (issue.completionDate) {\n\t\t\t\t\t\t\t\tissue.completionDate = new Date(issue.completionDate);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\t_this6.setState({ issues: data.records });\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\tresponse.json().then(function (error) {\n\t\t\t\t\t\talert(\"failed to fetch data in loadData:\" + error.message);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}).catch(function (err) {\n\t\t\t\tconsole.log(err);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Issue Tracker'\n\t\t\t\t),\n\t\t\t\tReact.createElement(IssueFilter, null),\n\t\t\t\tReact.createElement('hr', null),\n\t\t\t\tReact.createElement(IssueTable, { issues: this.state.issues }),\n\t\t\t\tReact.createElement('hr', null),\n\t\t\t\tReact.createElement(_IssueAdd2.default, { createIssue: this.createIssue })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn IssueList;\n}(React.Component);\n\nReactDOM.render(React.createElement(IssueList, null), contentNode);\n\n//# sourceURL=webpack:///./src/app.jsx?");

/***/ })

/******/ });