'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IssueAdd = require('./IssueAdd.jsx');

var _IssueAdd2 = _interopRequireDefault(_IssueAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');
/*const issues = [{
	id: 1,
	status: 'Open',
	owner: 'Ravan',
	created: new Date('2019-2-25'),
	effort: 5,
	completionDate: undefined,
	title: 'Error in console when clicking add'
},
{
	id: 2,
	status: 'Assigned',
	owner: 'fuck',
	created: new Date('2019-2-25'),
	effort: 14,
	completionDate: new Date('2019-2-26'),
	title: 'Missing bottom border on panel'
}

]*/

var IssueFilter = function (_React$Component) {
	_inherits(IssueFilter, _React$Component);

	function IssueFilter() {
		_classCallCheck(this, IssueFilter);

		return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
	}

	_createClass(IssueFilter, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				'this is placeholder for filter'
			);
		}
	}]);

	return IssueFilter;
}(React.Component);

var IssueRow = function (_React$Component2) {
	_inherits(IssueRow, _React$Component2);

	function IssueRow() {
		_classCallCheck(this, IssueRow);

		return _possibleConstructorReturn(this, (IssueRow.__proto__ || Object.getPrototypeOf(IssueRow)).apply(this, arguments));
	}

	_createClass(IssueRow, [{
		key: 'render',
		value: function render() {

			var issue = this.props.issue;
			return React.createElement(
				'tr',
				null,
				React.createElement(
					'td',
					null,
					issue._id
				),
				React.createElement(
					'td',
					null,
					issue.status
				),
				React.createElement(
					'td',
					null,
					issue.owner
				),
				React.createElement(
					'td',
					null,
					issue.created.toDateString()
				),
				React.createElement(
					'td',
					null,
					issue.effort
				),
				React.createElement(
					'td',
					null,
					issue.completionDate ? issue.completionDate.toDateString() : " "
				),
				React.createElement(
					'td',
					null,
					issue.title
				)
			);
		}
	}]);

	return IssueRow;
}(React.Component);

var IssueTable = function (_React$Component3) {
	_inherits(IssueTable, _React$Component3);

	function IssueTable() {
		_classCallCheck(this, IssueTable);

		return _possibleConstructorReturn(this, (IssueTable.__proto__ || Object.getPrototypeOf(IssueTable)).apply(this, arguments));
	}

	_createClass(IssueTable, [{
		key: 'render',
		value: function render() {

			var issueRows = this.props.issues.map(function (issue) {
				return React.createElement(IssueRow, { key: issue._id, issue: issue });
			});
			return React.createElement(
				'table',
				{ style: { borderCollapse: "collapse" } },
				React.createElement(
					'thead',
					null,
					React.createElement(
						'tr',
						null,
						React.createElement(
							'th',
							null,
							'Id'
						),
						React.createElement(
							'th',
							null,
							'\u72B6\u6001'
						),
						React.createElement(
							'th',
							null,
							'\u62E5\u6709\u8005'
						),
						React.createElement(
							'th',
							null,
							'\u521B\u9020\u65E5\u671F'
						),
						React.createElement(
							'th',
							null,
							'\u751F\u6548\u671F'
						),
						React.createElement(
							'th',
							null,
							'\u5B8C\u6210\u65E5\u671F'
						),
						React.createElement(
							'th',
							null,
							'Title'
						)
					)
				),
				React.createElement(
					'tbody',
					null,
					issueRows
				)
			);
		}
	}]);

	return IssueTable;
}(React.Component);

var IssueList = function (_React$Component4) {
	_inherits(IssueList, _React$Component4);

	function IssueList() {
		_classCallCheck(this, IssueList);

		var _this4 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

		_this4.state = { issues: [] };
		_this4.createIssue = _this4.createIssue.bind(_this4);
		return _this4;
	}

	_createClass(IssueList, [{
		key: 'createIssue',
		value: function createIssue(newIssue) {
			var _this5 = this;

			console.log("in createIssue,newIssue:", newIssue, JSON.stringify(newIssue));
			fetch('http://localhost:3000/api/issues', {
				method: 'POST',
				mode: 'cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newIssue)
			}).then(function (response) {
				if (response.ok) {
					fetch('http://localhost:3000/api/issues', {
						method: 'GET',
						mode: 'cors',

						cache: 'default'
					}).then(function (res) {
						return res.json();
					}).then(function (data) {

						data.records.forEach(function (issue) {
							issue.created = new Date(issue.created);
							if (issue.completionDate) {
								issue.completionDate = new Date(issue.completionDate);
							}
						});
						_this5.setState({ issues: data.records });
					});
				} else {
					response.json().then(function (error) {
						alert("faild to add issue:" + error.message);
					});
				}
			}).catch(function (err) {

				console.log("err in sending msg to svr:", err.message);
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadData();
		}
	}, {
		key: 'loadData',
		value: function loadData() {
			var _this6 = this;

			fetch('http://localhost:3000/api/issues', {
				method: 'GET',
				mode: 'cors',
				cache: 'default'

			}).then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						console.log("data after get:", data.records);
						console.log("total count:", data._metadata.total_count);
						data.records.forEach(function (issue) {
							issue.created = new Date(issue.created);
							if (issue.completionDate) {
								issue.completionDate = new Date(issue.completionDate);
							}
						});
						_this6.setState({ issues: data.records });
					});
				} else {
					response.json().then(function (error) {
						alert("failed to fetch data in loadData:" + error.message);
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Issue Tracker'
				),
				React.createElement(IssueFilter, null),
				React.createElement('hr', null),
				React.createElement(IssueTable, { issues: this.state.issues }),
				React.createElement('hr', null),
				React.createElement(_IssueAdd2.default, { createIssue: this.createIssue })
			);
		}
	}]);

	return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode);