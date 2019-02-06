var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',  { useNewUrlParser: true } );


var Todo = mongoose.model('Todo', {   //create a model sepcifying the attributes
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true //trim blank space
  },
  completed:{
   type: Boolean,
   default: false
  },
  completedAt: {
   type: Number,
   default: null
  }
});

var NewTodo = new Todo({  //create new doc
  text: " Cook dinner"
});

NewTodo.save().then((doc) => {               //save it to database
  console.log('save todo', doc);
}, (e) => {
  console.log('Unable to save Todo')
});
var otherTodo = new Todo({
  text: 'Edit this video  ',
  completed: true,
  completedAt: 123

});
//-------------------------------------------------------------------
otherTodo.save().then((doc) => {
console.log(JSON.stringify(doc, undefined, 2, ));

},  (e) => {
  console.log('Unable to save', e);
});
//-------------------------------------------------------------------
var User = mongoose.model('User', {   //create a user model sepcifying the attributes
  email:{              //object
    type: String,
    required: true,
        trim: true, //trim blank space,
   minlength: 1,
  }

});

  //--------------create instance---------------------------------

  var user = new User({
    email: 'andrew@example.com   '
  });

user.save().then((doc) => {
  console.log('User saved', doc);
}, (e) => {
  console.log('Unable to save user', e);

});
