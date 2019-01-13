const insertDocuments = (db, callback) => {
  const collection = db.collection('edx-course-students');

  collection.insert(
    [{ name: 'Bob' }, { name: 'John' }, { name: 'Peter' }],
    (error, result) => {
      if (error) return process.exit(1);
      callback(result);
    }
  );
};


const MongoClient = require('mongodb');

const url = 'mongodb://localhost:27017/edx-course-db';

MongoClient.connect(url, { useNewUrlParser: true } ,(error, database) => {
  if (error) return process.exit(1);
  console.log('Connection is okay');

  const db = database.db('edx-course-db');

  insertDocuments(db, () => {
    console.log('Insert successful');
  });
});
