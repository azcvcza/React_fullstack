import React from 'react';
import IssueRow from './IssueRow.jsx'

export default class IssueTable extends React.Component {
	render() {


		const issueRows = this.props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />)
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

