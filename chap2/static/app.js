const contentNode = document.getElementById('contents');
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
class IssueFilter extends React.Component {
	render() {
		return React.createElement(
			"div",
			null,
			"this is placeholder for filter"
		);
	}

}
class IssueRow extends React.Component {
	render() {

		const issue = this.props.issue;
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				issue._id
			),
			React.createElement(
				"td",
				null,
				issue.status
			),
			React.createElement(
				"td",
				null,
				issue.owner
			),
			React.createElement(
				"td",
				null,
				issue.created.toDateString()
			),
			React.createElement(
				"td",
				null,
				issue.effort
			),
			React.createElement(
				"td",
				null,
				issue.completionDate ? issue.completionDate.toDateString() : " "
			),
			React.createElement(
				"td",
				null,
				issue.title
			)
		);
	}
}
class IssueTable extends React.Component {
	render() {

		const issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue._id, issue: issue }));
		return React.createElement(
			"table",
			{ style: { borderCollapse: "collapse" } },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Id"
					),
					React.createElement(
						"th",
						null,
						"\u72B6\u6001"
					),
					React.createElement(
						"th",
						null,
						"\u62E5\u6709\u8005"
					),
					React.createElement(
						"th",
						null,
						"\u521B\u9020\u65E5\u671F"
					),
					React.createElement(
						"th",
						null,
						"\u751F\u6548\u671F"
					),
					React.createElement(
						"th",
						null,
						"\u5B8C\u6210\u65E5\u671F"
					),
					React.createElement(
						"th",
						null,
						"Title"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				issueRows
			)
		);
	}
}
class IssueAdd extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		var form = document.forms.issueAdd;
		console.log(form.owner.value, form.title.value);
		this.props.createIssue({
			owner: form.owner.value,
			title: form.title.value

		});
		form.owner.value = "";
		form.title.value = "";
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"form",
				{ name: "issueAdd", onSubmit: this.handleSubmit },
				React.createElement("input", { type: "text", name: "owner", placeholder: "owner" }),
				React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
				React.createElement(
					"button",
					null,
					"Add"
				)
			)
		);
	}
}
class IssueList extends React.Component {
	constructor() {
		super();
		this.state = { issues: [] };
		this.createIssue = this.createIssue.bind(this);
	}
	createIssue(newIssue) {
		console.log("in createIssue,newIssue:", newIssue, JSON.stringify(newIssue));
		fetch('http://localhost:3000/api/issues', {
			method: 'POST',
			mode: 'no-cors',
			'Access-Control-Allow-Origin': '*',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newIssue)
		}).then(response => {
			if (response.ok) {
				fetch('http://localhost:3000/api/issues', {
					method: 'GET',
					mode: 'cors',

					cache: 'default'
				}).then(res => res.json()).then(data => {

					data.records.forEach(issue => {
						issue.created = new Date(issue.created);
						if (issue.completionDate) {
							issue.completionDate = new Date(issue.completionDate);
						}
					});
					this.setState({ issues: data.records });
				});
			} else {
				response.json().then(error => {
					alert("faild to add issue:" + error.message);
				});
			}
		}).catch(err => {

			console.log("err in sending msg to svr:", err.message);
		});
	}

	componentDidMount() {
		this.loadData();
	}
	loadData() {
		fetch('http://localhost:3000/api/issues', {
			method: 'GET',
			mode: 'cors',
			cache: 'default'

		}).then(response => {
			if (response.ok) {
				response.json().then(data => {
					console.log("data after get:", data.records);
					console.log("total count:", data._metadata.total_count);
					data.records.forEach(issue => {
						issue.created = new Date(issue.created);
						if (issue.completionDate) {
							issue.completionDate = new Date(issue.completionDate);
						}
					});
					this.setState({ issues: data.records });
				});
			} else {
				response.json().then(error => {
					alert("failed to fetch data in loadData:" + error.message);
				});
			}
		}).catch(err => {
			console.log(err);
		});
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Issue Tracker"
			),
			React.createElement(IssueFilter, null),
			React.createElement("hr", null),
			React.createElement(IssueTable, { issues: this.state.issues }),
			React.createElement("hr", null),
			React.createElement(IssueAdd, { createIssue: this.createIssue })
		);
	}
}
ReactDOM.render(React.createElement(IssueList, null), contentNode);