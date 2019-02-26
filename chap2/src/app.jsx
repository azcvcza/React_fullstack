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
		return (<div>this is placeholder for filter</div>)
	}



}
class IssueRow extends React.Component {
	render() {

		const issue = this.props.issue;
		return (
			<tr>
				<td>{issue.id}</td>
				<td>{issue.status}</td>
				<td>{issue.owner}</td>
				<td>{issue.created.toDateString()}</td>
				<td>{issue.effort}</td>
				<td>{issue.completionDate ? issue.completionDate.toDateString() : " "}</td>
				<td>{issue.title}</td>
			</tr>
		)
	}
}
class IssueTable extends React.Component {
	render() {


		const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
		return (<table style={{ borderCollapse: "collapse" }}>
			<thead>
				<tr>
					<th>Id</th>
					<th>状态</th>
					<th>拥有者</th>
					<th>创造日期</th>
					<th>生效期</th>
					<th>完成日期</th>
					<th>Title</th>
				</tr>
			</thead>
			<tbody>
				{issueRows}
			</tbody>
		</table>)
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
		this.props.createIssue({
			owner: form.owner.value,
			title: form.title.value,
			created: new Date(),
		})
		form.owner.value = "";
		form.title.value = "";
	}
	render() {
		return (<div><form name="issueAdd" onSubmit={this.handleSubmit}>
			<input type="text" name="owner" placeholder="owner" />
			<input type="text" name="title" placeholder="Title" />
			<button>Add</button>
		</form></div>)
	}
}
class IssueList extends React.Component {
	constructor() {
		super();
		this.state = { issues: [] };
		this.createIssue = this.createIssue.bind(this);
	}
	createIssue(newIssue) {
		const newIssues = this.state.issues.slice();
		newIssue.id = this.state.issues.length + 1;
		newIssues.push(newIssue)
		this.setState({ issues: newIssues });

	}

	componentDidMount() {
		this.loadData();
	}
	loadData() {
		fetch('http://localhost:3000/api/issues', {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			
		})
			.then(response => response.json())
			.then(data => {
				console.log("total count:", data._metadata.total_count);
				data.records.forEach(issue => {
					issue.created = new Date(issue.created);
					if (issue.completionDate) {
						issue.completionDate = new Date(issue.completionDate);
					}
				})
				this.setState({ issues: data.records });
			}).catch(err => {
				console.log(err)
			})

	}
	render() {
		return (
			<div>
				<h1>Issue Tracker</h1>
				<IssueFilter></IssueFilter>
				<hr />
				<IssueTable issues={this.state.issues}></IssueTable>
				<hr />
				<IssueAdd createIssue={this.createIssue}></IssueAdd>

			</div>
		)
	}
}
ReactDOM.render(<IssueList></IssueList>, contentNode)
