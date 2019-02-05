const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {

  console.log (result)
} );

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneRemove({_id:'5c58acea07e203c4d675bded'}).then((Todo) => {

  console.log(todo);

})

Todo.findByIdAndRemove('5c58acea07e203c4d675bded').then((Todo) => {

  console.log(todo);

});
