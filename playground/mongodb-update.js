// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,{ useNewUrlParser: true }, (err, client) => {

  //const db = client.db;
  const db = client.db('TodoApp');


  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
 //  db.collection('Users2').deleteMany({Name: 'Jason Liang'}).then((result) => {
 //    console.log(result);
 // });

  // deleteOne
  // db.collection('todos').deleteOne({text: 'This is from postman Jason'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  // db.collection('Users2').findOneAndDelete({
  //   _id: new ObjectID("5c35323a6b91ef195c14562e")
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  db.collection('Users2').findOneAndUpdate({
     _id: new ObjectID('5c3530fe5736b528581b0764')
   }, {
     $set: {
       Name: 'Andrew'
     },
     $inc: {
       age: 1
     }
   }, {
     returnOriginal: false
   }).then((result) => {
     console.log(result);
   });

   // db.close();
 });

  // //update
  // db.collection('Users2').findOneAndUpdate({
  //    _id: new ObjectID('5c3530fe5736b528581b0764')
  //  }, {
  //        $set: {
  //          completed: true
  //        }
  //      }, {
  //
  //     returnOriginal: false
  //
  //   }).then((result) => {
  //
  //     console.log(result);
  // });
  // db.close();
// });
//.});
