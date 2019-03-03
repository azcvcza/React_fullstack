import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './IssueList.jsx'
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


ReactDOM.render(<IssueList></IssueList>, contentNode)
