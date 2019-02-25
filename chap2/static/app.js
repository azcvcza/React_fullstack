const contentNode = document.getElementById('contents');
const issues = [{
	id: 1,
	status: 'Open',
	owner: 'Ravan',
	created: new Date('2019-2-25'),
	effort: 5,
	completionDate: undefined,
	title: 'Error in console when clicking add'
}, {
	id: 2,
	status: 'Assigned',
	owner: 'fuck',
	created: new Date('2019-2-25'),
	effort: 14,
	completionDate: new Date('2019-2-26'),
	title: 'Missing bottom border on panel'
}];
class IssueFilter extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			'this is placeholder for filter'
		);
	}

}
class IssueRow extends React.Component {
	render() {

		const issue = this.props.issue;
		return React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				null,
				issue.id
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
}
class IssueTable extends React.Component {
	render() {

		const issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue.id, issue: issue }));
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
}
class IssueAdd extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			'this is placeholder for Add'
		);
	}
}
class IssueList extends React.Component {
	constructor() {
		super();
		this.state = { issues: [] };
		setTimeout(this.createTestIssue.bind(this), 2000);
	}
	createIssue(newIssue) {
		const newIssues = this.state.issues.slice();
		newIssue.id = this.state.issues.length + 1;
		newIssues.push(newIssue);
		this.setState({ issues: newIssues });
	}
	componentDidMount() {
		this.loadData();
	}
	loadData() {
		setTimeout(this.setState({ issues: issues }), 500);
	}
	createTestIssue() {
		this.createIssue({
			status: 'new', owner: 'Pieta', created: new Date(), effort: 20, completionDate: new Date('2019-2-26'), title: "completion date should be optional"
		});
	}
	render() {
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
			React.createElement(IssueAdd, null)
		);
	}
}
ReactDOM.render(React.createElement(IssueList, null), contentNode);