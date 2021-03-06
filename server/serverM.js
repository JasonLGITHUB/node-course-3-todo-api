//-----------------express route handler----------
require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');  // mongoose.js property
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
//-------------------------------post route --------------
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
//------------------------------Get route----------
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});
//--------------- GET by ID ---------------------
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});
//--------------------------------delete----------------
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;   // url stored parameters

  if (!ObjectID.isValid(id)) {

    return res.status(404).send(); //no body data
  }
//--------------------------------------remove-----------
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
//--------------------------if todo is there ------------
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});
//--------------------------------------patch route-----------
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;

  var body = _.pick(req.body, ['text', 'completed']); // array

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
//----query--------------------------------------------------------------
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {

      return res.status(404).send();

    }

    res.send({todo});    // Able be find it  .
  }).catch((e) => {
    res.status(400).send();   // error  handler
  })
});

// POST /users----------------------------------------------------
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then((user) => {
    res.send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});



app.listen(port, () => {
  console.log(`Started up at port ${port}`);
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
