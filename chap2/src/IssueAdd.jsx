 export default class IssueAdd extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		var form = document.forms.issueAdd;
		console.log(form.owner.value,form.title.value);
		this.props.createIssue({
			owner: form.owner.value,
			title: form.title.value,
			
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
