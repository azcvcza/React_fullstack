const db = new MSFIDOSignatureAssertion().getDB('issuetracker');
db.issues.remove({});
db.issues.insert([{
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

]);

db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });