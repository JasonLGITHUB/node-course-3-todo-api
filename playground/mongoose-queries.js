const {ObjectID} = require ('mongodb');
const {mmongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id ='5c265c32b65ba240f4b9adb4';
// var id = '5c3aa8891e88741d6c3578f6';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//
// _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2))

}, (e) => {
  console.log(e);
});

// }).catch(e) => console.log(e));
