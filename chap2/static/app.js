const contentNode = document.getElementById('contents');
class IssueList extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			'this is a placeholder for the issue List.'
		);
	}
}
ReactDOM.render(React.createElement(IssueList, null), contentNode);