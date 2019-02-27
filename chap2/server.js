const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(express.static('static'));
app.use(bodyparser.json());
app.use(cors());
let db;

const validIssueStatus = {
    New: true,
    Open: true,
    Assigned: true,
    Fixed: true,
    Verified: true,
    Closed: true,
};
const issueFieldType = {

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
    collection.find().toArray().then(issues => {
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
    console.log("req:", req.body)
    const newIssue = req.body;
    //newIssue.id = issues.length + 1;
    newIssue.created = new Date();
    if (!newIssue.status) {
        newIssue.status = 'New';
    }
    if (!newIssue.owner || !newIssue.title) {
        newIssue.owner = 'test null';
        newIssue.title = 'body still null';
    }
    const err = validateIssue(newIssue);
    console.log(newIssue, err);
    if (err) {
        res.status(422).json({ message: `invalid request:${err}` })
        return;
    }
    var issueTracker = db.db('issueTracker');
    var collection = issueTracker.collection('issues');
    //console.log(collection)
    collection.insertOne(newIssue)
        .then(result => {
            collection.find({ _id: result.insertedId }).limit(1).next();
        })
        .then(newIssue => {
            res.set('Content-Type', 'application/json');
            res.set('Access-Control-Allow-Origin', '*');
            res.json(newIssue);
        })
        .catch(err => {
            console.log("err in post data to local:", err);
            res.status(500).json({ message: `Internal Server Error:${error}` });
        })
        /*
    issues.push(newIssue)

		res.json(newIssue);
		*/
        //console.log("receive from post", issues)
})
MongoClient.connect('mongodb://localhost/issueTracker')
    .then(connection => {
        db = connection;
        //console.log(db)
        app.listen(3000, () => {
            console.log("start at port 3000")
        })

    }).catch(err => {
        console.log("mongo init err:", err);
    })