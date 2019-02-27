const express = require('express')
const bodyparser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(express.static('static'));
app.use(bodyparser.json());
let db;
const issues = [{
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

];
const validIssueStatus = {
    New: true,
    Open: true,
    Assigned: true,
    Fixed: true,
    Verified: true,
    Closed: true,
};
const issueFieldType = {
    id: 'required',
    status: 'required',
    owner: 'required',
    effort: 'optional',
    created: 'required',
    completionDate: 'optional',
    title: 'required'
};

function validateIssue(issue) {
    for (const field in issueFieldType) {
        const type = issueFieldType[field];
        if (!type) {
            delete issue[field];
        } else if (type === 'required' && !issue[field]) {
            return `${field} is required`;
        }
    }
    if (!validIssueStatus[issue.status]) {
        return `${issue.status} is not a valid status`;
    }
    return null
}
app.get('/api/issues', (req, res) => {
    /*
    const metadata = { total_count: issues.length };
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Origin', '*');
		res.send(JSON.stringify({ _metadata: metadata, records: issues }))
		*/
    var issueTracker = db.db('issueTracker');
    var collection = issueTracker.collection('issues');
    //console.log(collection)
    collection.find().toArray().then(issuss => {
        const metadata = { total_count: issues.length };
        res.set('Content-Type', 'application/json');
        res.set('Access-Control-Allow-Origin', '*');
        res.json({ _metadata: metadata, records: issues })
    }).catch(err => {
        console.log("get err in server:", err);
        res.status(500).json({ message: `Internal Server Error:{$err}` });
    })
    console.log("finished sending")
})

app.post('/api/issues', (req, res) => {

    const newIssue = req.body;
    newIssue.id = issues.length + 1;
    newIssue.created = new Date();
    if (!newIssue.status) {
        newIssue.status = 'New';
    }
    const err = validateIssue(newIssue);
    if (err) {
        res.status(422).json({ message: `invalid request:${err}` })
        return;
    }
    issues.push(newIssue)

    res.json(newIssue);
    console.log("receive from post", issues)
})
MongoClient.connect('mongodb://localhost/issueTracker')
    .then(connection => {
        db = connection;
        console.log(db)
        app.listen(3000, () => {
            console.log("start at port 3000")
        })

    }).catch(err => {
        console.log("mongo init err:", err);
    })