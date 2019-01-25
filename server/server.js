var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require ('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require ('./models/todo');
var {User} = require('./models/user');


var app =express();

app.use(bodyParser.json()); //middleware function send JSOn to App

app.post('/todos', (req, res) => {

  var todo = new Todo({
    text:req.body.text
  });

    todo.save().then((doc) => {   //save model to
      res.send(doc);  //to user
    }, (e) => {
      res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
  res.send({todos});

   }, (e) => {

    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();

  }
  Todo.findById(id).then((todo) => {

    if (!todo) {
    return res.status(400).send();
  }
    res.send({todo});
}).catch((e) => {
    res.status(400).send();

  });
  });

app.listen (3000, () => {

  console.log('Started on port 3000');

});

module.exports = {app};

// var User = mongoose.model('User', {
//
//   email: {
//     type: String,
//     require: true,
//     trim: true,
//     minlength: 1
//
//   }
// });
//
// var user = new User({
//
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// // }
// });
