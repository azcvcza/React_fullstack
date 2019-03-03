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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/app.js":
/*!***********************!*\
  !*** ./static/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const contentNode = document.getElementById('contents');\n/*const issues = [{\r\n\tid: 1,\r\n\tstatus: 'Open',\r\n\towner: 'Ravan',\r\n\tcreated: new Date('2019-2-25'),\r\n\teffort: 5,\r\n\tcompletionDate: undefined,\r\n\ttitle: 'Error in console when clicking add'\r\n},\r\n{\r\n\tid: 2,\r\n\tstatus: 'Assigned',\r\n\towner: 'fuck',\r\n\tcreated: new Date('2019-2-25'),\r\n\teffort: 14,\r\n\tcompletionDate: new Date('2019-2-26'),\r\n\ttitle: 'Missing bottom border on panel'\r\n}\r\n\r\n]*/\nclass IssueFilter extends React.Component {\n\trender() {\n\t\treturn React.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\t\"this is placeholder for filter\"\n\t\t);\n\t}\n\n}\nclass IssueRow extends React.Component {\n\trender() {\n\n\t\tconst issue = this.props.issue;\n\t\treturn React.createElement(\n\t\t\t\"tr\",\n\t\t\tnull,\n\t\t\tReact.createElement(\n\t\t\t\t\"td\",\n\t\t\t\tnull,\n\t\t\t\tissue._id\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"td\",\n\t\t\t\tnull,\n\t\t\t\tissue.status\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"td\",\n\t\t\t\tnull,\n\t\t\t\tissue.owner\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"td\",\n\t\t\t\tnull,\n\t\t\t\tissue.created.toDateString()\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"td\",\n\t\t\t\tnull,\n\t\t\t\tissue.effort\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"td\",\n\t\t\t\tnull,\n\t\t\t\tissue.completionDate ? issue.completionDate.toDateString() : \" \"\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"td\",\n\t\t\t\tnull,\n\t\t\t\tissue.title\n\t\t\t)\n\t\t);\n\t}\n}\nclass IssueTable extends React.Component {\n\trender() {\n\n\t\tconst issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue._id, issue: issue }));\n\t\treturn React.createElement(\n\t\t\t\"table\",\n\t\t\t{ style: { borderCollapse: \"collapse\" } },\n\t\t\tReact.createElement(\n\t\t\t\t\"thead\",\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"tr\",\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"th\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"Id\"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"th\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"\\u72B6\\u6001\"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"th\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"\\u62E5\\u6709\\u8005\"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"th\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"\\u521B\\u9020\\u65E5\\u671F\"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"th\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"\\u751F\\u6548\\u671F\"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"th\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"\\u5B8C\\u6210\\u65E5\\u671F\"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"th\",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\"Title\"\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"tbody\",\n\t\t\t\tnull,\n\t\t\t\tissueRows\n\t\t\t)\n\t\t);\n\t}\n}\nclass IssueAdd extends React.Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.handleSubmit = this.handleSubmit.bind(this);\n\t}\n\thandleSubmit(e) {\n\t\te.preventDefault();\n\t\tvar form = document.forms.issueAdd;\n\t\tconsole.log(form.owner.value, form.title.value);\n\t\tthis.props.createIssue({\n\t\t\towner: form.owner.value,\n\t\t\ttitle: form.title.value\n\n\t\t});\n\t\tform.owner.value = \"\";\n\t\tform.title.value = \"\";\n\t}\n\trender() {\n\t\treturn React.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\tReact.createElement(\n\t\t\t\t\"form\",\n\t\t\t\t{ name: \"issueAdd\", onSubmit: this.handleSubmit },\n\t\t\t\tReact.createElement(\"input\", { type: \"text\", name: \"owner\", placeholder: \"owner\" }),\n\t\t\t\tReact.createElement(\"input\", { type: \"text\", name: \"title\", placeholder: \"Title\" }),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"button\",\n\t\t\t\t\tnull,\n\t\t\t\t\t\"Add\"\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n}\nclass IssueList extends React.Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = { issues: [] };\n\t\tthis.createIssue = this.createIssue.bind(this);\n\t}\n\tcreateIssue(newIssue) {\n\t\tconsole.log(\"in createIssue,newIssue:\", newIssue, JSON.stringify(newIssue));\n\t\tfetch('http://localhost:3000/api/issues', {\n\t\t\tmethod: 'POST',\n\t\t\tmode: 'cors',\n\t\t\theaders: { 'Content-Type': 'application/json' },\n\t\t\tbody: JSON.stringify(newIssue)\n\t\t}).then(response => {\n\t\t\tif (response.ok) {\n\t\t\t\tfetch('http://localhost:3000/api/issues', {\n\t\t\t\t\tmethod: 'GET',\n\t\t\t\t\tmode: 'cors',\n\n\t\t\t\t\tcache: 'default'\n\t\t\t\t}).then(res => res.json()).then(data => {\n\n\t\t\t\t\tdata.records.forEach(issue => {\n\t\t\t\t\t\tissue.created = new Date(issue.created);\n\t\t\t\t\t\tif (issue.completionDate) {\n\t\t\t\t\t\t\tissue.completionDate = new Date(issue.completionDate);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\tthis.setState({ issues: data.records });\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tresponse.json().then(error => {\n\t\t\t\t\talert(\"faild to add issue:\" + error.message);\n\t\t\t\t});\n\t\t\t}\n\t\t}).catch(err => {\n\n\t\t\tconsole.log(\"err in sending msg to svr:\", err.message);\n\t\t});\n\t}\n\n\tcomponentDidMount() {\n\t\tthis.loadData();\n\t}\n\tloadData() {\n\t\tfetch('http://localhost:3000/api/issues', {\n\t\t\tmethod: 'GET',\n\t\t\tmode: 'cors',\n\t\t\tcache: 'default'\n\n\t\t}).then(response => {\n\t\t\tif (response.ok) {\n\t\t\t\tresponse.json().then(data => {\n\t\t\t\t\tconsole.log(\"data after get:\", data.records);\n\t\t\t\t\tconsole.log(\"total count:\", data._metadata.total_count);\n\t\t\t\t\tdata.records.forEach(issue => {\n\t\t\t\t\t\tissue.created = new Date(issue.created);\n\t\t\t\t\t\tif (issue.completionDate) {\n\t\t\t\t\t\t\tissue.completionDate = new Date(issue.completionDate);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\tthis.setState({ issues: data.records });\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tresponse.json().then(error => {\n\t\t\t\t\talert(\"failed to fetch data in loadData:\" + error.message);\n\t\t\t\t});\n\t\t\t}\n\t\t}).catch(err => {\n\t\t\tconsole.log(err);\n\t\t});\n\t}\n\trender() {\n\t\treturn React.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\tReact.createElement(\n\t\t\t\t\"h1\",\n\t\t\t\tnull,\n\t\t\t\t\"Issue Tracker\"\n\t\t\t),\n\t\t\tReact.createElement(IssueFilter, null),\n\t\t\tReact.createElement(\"hr\", null),\n\t\t\tReact.createElement(IssueTable, { issues: this.state.issues }),\n\t\t\tReact.createElement(\"hr\", null),\n\t\t\tReact.createElement(IssueAdd, { createIssue: this.createIssue })\n\t\t);\n\t}\n}\nReactDOM.render(React.createElement(IssueList, null), contentNode);\n\n//# sourceURL=webpack:///./static/app.js?");

/***/ }),

/***/ "./static/public/bundle.js":
/*!*********************************!*\
  !*** ./static/public/bundle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./static/app.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./static/app.js\":\n/*!***********************!*\\\n  !*** ./static/app.js ***!\n  \\***********************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\neval(\"const contentNode = document.getElementById('contents');\\n/*const issues = [{\\r\\n\\tid: 1,\\r\\n\\tstatus: 'Open',\\r\\n\\towner: 'Ravan',\\r\\n\\tcreated: new Date('2019-2-25'),\\r\\n\\teffort: 5,\\r\\n\\tcompletionDate: undefined,\\r\\n\\ttitle: 'Error in console when clicking add'\\r\\n},\\r\\n{\\r\\n\\tid: 2,\\r\\n\\tstatus: 'Assigned',\\r\\n\\towner: 'fuck',\\r\\n\\tcreated: new Date('2019-2-25'),\\r\\n\\teffort: 14,\\r\\n\\tcompletionDate: new Date('2019-2-26'),\\r\\n\\ttitle: 'Missing bottom border on panel'\\r\\n}\\r\\n\\r\\n]*/\\nclass IssueFilter extends React.Component {\\n\\trender() {\\n\\t\\treturn React.createElement(\\n\\t\\t\\t\\\"div\\\",\\n\\t\\t\\tnull,\\n\\t\\t\\t\\\"this is placeholder for filter\\\"\\n\\t\\t);\\n\\t}\\n\\n}\\nclass IssueRow extends React.Component {\\n\\trender() {\\n\\n\\t\\tconst issue = this.props.issue;\\n\\t\\treturn React.createElement(\\n\\t\\t\\t\\\"tr\\\",\\n\\t\\t\\tnull,\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"td\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissue._id\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"td\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissue.status\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"td\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissue.owner\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"td\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissue.created.toDateString()\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"td\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissue.effort\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"td\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissue.completionDate ? issue.completionDate.toDateString() : \\\" \\\"\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"td\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissue.title\\n\\t\\t\\t)\\n\\t\\t);\\n\\t}\\n}\\nclass IssueTable extends React.Component {\\n\\trender() {\\n\\n\\t\\tconst issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue._id, issue: issue }));\\n\\t\\treturn React.createElement(\\n\\t\\t\\t\\\"table\\\",\\n\\t\\t\\t{ style: { borderCollapse: \\\"collapse\\\" } },\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"thead\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\\"tr\\\",\\n\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\t\\\"th\\\",\\n\\t\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\t\\\"Id\\\"\\n\\t\\t\\t\\t\\t),\\n\\t\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\t\\\"th\\\",\\n\\t\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\t\\\"\\\\u72B6\\\\u6001\\\"\\n\\t\\t\\t\\t\\t),\\n\\t\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\t\\\"th\\\",\\n\\t\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\t\\\"\\\\u62E5\\\\u6709\\\\u8005\\\"\\n\\t\\t\\t\\t\\t),\\n\\t\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\t\\\"th\\\",\\n\\t\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\t\\\"\\\\u521B\\\\u9020\\\\u65E5\\\\u671F\\\"\\n\\t\\t\\t\\t\\t),\\n\\t\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\t\\\"th\\\",\\n\\t\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\t\\\"\\\\u751F\\\\u6548\\\\u671F\\\"\\n\\t\\t\\t\\t\\t),\\n\\t\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\t\\\"th\\\",\\n\\t\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\t\\\"\\\\u5B8C\\\\u6210\\\\u65E5\\\\u671F\\\"\\n\\t\\t\\t\\t\\t),\\n\\t\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\t\\\"th\\\",\\n\\t\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\t\\\"Title\\\"\\n\\t\\t\\t\\t\\t)\\n\\t\\t\\t\\t)\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"tbody\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\tissueRows\\n\\t\\t\\t)\\n\\t\\t);\\n\\t}\\n}\\nclass IssueAdd extends React.Component {\\n\\tconstructor() {\\n\\t\\tsuper();\\n\\t\\tthis.handleSubmit = this.handleSubmit.bind(this);\\n\\t}\\n\\thandleSubmit(e) {\\n\\t\\te.preventDefault();\\n\\t\\tvar form = document.forms.issueAdd;\\n\\t\\tconsole.log(form.owner.value, form.title.value);\\n\\t\\tthis.props.createIssue({\\n\\t\\t\\towner: form.owner.value,\\n\\t\\t\\ttitle: form.title.value\\n\\n\\t\\t});\\n\\t\\tform.owner.value = \\\"\\\";\\n\\t\\tform.title.value = \\\"\\\";\\n\\t}\\n\\trender() {\\n\\t\\treturn React.createElement(\\n\\t\\t\\t\\\"div\\\",\\n\\t\\t\\tnull,\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"form\\\",\\n\\t\\t\\t\\t{ name: \\\"issueAdd\\\", onSubmit: this.handleSubmit },\\n\\t\\t\\t\\tReact.createElement(\\\"input\\\", { type: \\\"text\\\", name: \\\"owner\\\", placeholder: \\\"owner\\\" }),\\n\\t\\t\\t\\tReact.createElement(\\\"input\\\", { type: \\\"text\\\", name: \\\"title\\\", placeholder: \\\"Title\\\" }),\\n\\t\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\t\\\"button\\\",\\n\\t\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\t\\\"Add\\\"\\n\\t\\t\\t\\t)\\n\\t\\t\\t)\\n\\t\\t);\\n\\t}\\n}\\nclass IssueList extends React.Component {\\n\\tconstructor() {\\n\\t\\tsuper();\\n\\t\\tthis.state = { issues: [] };\\n\\t\\tthis.createIssue = this.createIssue.bind(this);\\n\\t}\\n\\tcreateIssue(newIssue) {\\n\\t\\tconsole.log(\\\"in createIssue,newIssue:\\\", newIssue, JSON.stringify(newIssue));\\n\\t\\tfetch('http://localhost:3000/api/issues', {\\n\\t\\t\\tmethod: 'POST',\\n\\t\\t\\tmode: 'cors',\\n\\t\\t\\theaders: { 'Content-Type': 'application/json' },\\n\\t\\t\\tbody: JSON.stringify(newIssue)\\n\\t\\t}).then(response => {\\n\\t\\t\\tif (response.ok) {\\n\\t\\t\\t\\tfetch('http://localhost:3000/api/issues', {\\n\\t\\t\\t\\t\\tmethod: 'GET',\\n\\t\\t\\t\\t\\tmode: 'cors',\\n\\n\\t\\t\\t\\t\\tcache: 'default'\\n\\t\\t\\t\\t}).then(res => res.json()).then(data => {\\n\\n\\t\\t\\t\\t\\tdata.records.forEach(issue => {\\n\\t\\t\\t\\t\\t\\tissue.created = new Date(issue.created);\\n\\t\\t\\t\\t\\t\\tif (issue.completionDate) {\\n\\t\\t\\t\\t\\t\\t\\tissue.completionDate = new Date(issue.completionDate);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\tthis.setState({ issues: data.records });\\n\\t\\t\\t\\t});\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tresponse.json().then(error => {\\n\\t\\t\\t\\t\\talert(\\\"faild to add issue:\\\" + error.message);\\n\\t\\t\\t\\t});\\n\\t\\t\\t}\\n\\t\\t}).catch(err => {\\n\\n\\t\\t\\tconsole.log(\\\"err in sending msg to svr:\\\", err.message);\\n\\t\\t});\\n\\t}\\n\\n\\tcomponentDidMount() {\\n\\t\\tthis.loadData();\\n\\t}\\n\\tloadData() {\\n\\t\\tfetch('http://localhost:3000/api/issues', {\\n\\t\\t\\tmethod: 'GET',\\n\\t\\t\\tmode: 'cors',\\n\\t\\t\\tcache: 'default'\\n\\n\\t\\t}).then(response => {\\n\\t\\t\\tif (response.ok) {\\n\\t\\t\\t\\tresponse.json().then(data => {\\n\\t\\t\\t\\t\\tconsole.log(\\\"data after get:\\\", data.records);\\n\\t\\t\\t\\t\\tconsole.log(\\\"total count:\\\", data._metadata.total_count);\\n\\t\\t\\t\\t\\tdata.records.forEach(issue => {\\n\\t\\t\\t\\t\\t\\tissue.created = new Date(issue.created);\\n\\t\\t\\t\\t\\t\\tif (issue.completionDate) {\\n\\t\\t\\t\\t\\t\\t\\tissue.completionDate = new Date(issue.completionDate);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\tthis.setState({ issues: data.records });\\n\\t\\t\\t\\t});\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tresponse.json().then(error => {\\n\\t\\t\\t\\t\\talert(\\\"failed to fetch data in loadData:\\\" + error.message);\\n\\t\\t\\t\\t});\\n\\t\\t\\t}\\n\\t\\t}).catch(err => {\\n\\t\\t\\tconsole.log(err);\\n\\t\\t});\\n\\t}\\n\\trender() {\\n\\t\\treturn React.createElement(\\n\\t\\t\\t\\\"div\\\",\\n\\t\\t\\tnull,\\n\\t\\t\\tReact.createElement(\\n\\t\\t\\t\\t\\\"h1\\\",\\n\\t\\t\\t\\tnull,\\n\\t\\t\\t\\t\\\"Issue Tracker\\\"\\n\\t\\t\\t),\\n\\t\\t\\tReact.createElement(IssueFilter, null),\\n\\t\\t\\tReact.createElement(\\\"hr\\\", null),\\n\\t\\t\\tReact.createElement(IssueTable, { issues: this.state.issues }),\\n\\t\\t\\tReact.createElement(\\\"hr\\\", null),\\n\\t\\t\\tReact.createElement(IssueAdd, { createIssue: this.createIssue })\\n\\t\\t);\\n\\t}\\n}\\nReactDOM.render(React.createElement(IssueList, null), contentNode);\\n\\n//# sourceURL=webpack:///./static/app.js?\");\n\n/***/ })\n\n/******/ });\n\n//# sourceURL=webpack:///./static/public/bundle.js?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./static/app.js ./static/public/bundle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\mi\\Desktop\\workspace-git\\React_fullstack\\chap2\\static\\app.js */\"./static/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\mi\\Desktop\\workspace-git\\React_fullstack\\chap2\\static\\public\\bundle.js */\"./static/public/bundle.js\");\n\n\n//# sourceURL=webpack:///multi_./static/app.js_./static/public/bundle.js?");

/***/ })

/******/ });