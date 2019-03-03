import IssueAdd from './IssueAdd.jsx'
import IssueFilter from './IssueFilter.jsx'
import IssueRow from './IssueRow.jsx'
import IssueTable from './IssueTable.jsx'
export default class IssueList extends React.Component {
	constructor() {
		super();
		this.state = { issues: [] };
		this.createIssue = this.createIssue.bind(this);
	}
	createIssue(newIssue) {
		console.log("in createIssue,newIssue:",newIssue,JSON.stringify(newIssue))
		fetch('http://localhost:3000/api/issues', {
			method: 'POST',
			mode:'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newIssue),
		})
		.then(response => {
				if (response.ok) {
					fetch('http://localhost:3000/api/issues', {
						method: 'GET',
						mode: 'cors',

						cache: 'default',
					})
						.then(res => res.json())
						.then(data => {

							data.records.forEach(issue => {
								issue.created = new Date(issue.created);
								if (issue.completionDate) {
									issue.completionDate = new Date(issue.completionDate);
								}
							})
							this.setState({ issues: data.records });
						})
				} else {
					response.json().then(error => {
						alert("faild to add issue:" + error.message);
					})
				}
			})
			.catch(err => {

				console.log("err in sending msg to svr:", err.message)
			})

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
			.then(response => {
				if (response.ok) {
					response.json()
						.then(data => {
							console.log("data after get:", data.records)
							console.log("total count:", data._metadata.total_count);
							data.records.forEach(issue => {
								issue.created = new Date(issue.created);
								if (issue.completionDate) {
									issue.completionDate = new Date(issue.completionDate);
								}
							})
							this.setState({ issues: data.records });
						})
				}
				else {
					response.json()
						.then(error => {
							alert("failed to fetch data in loadData:" + error.message);
						})
				}

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