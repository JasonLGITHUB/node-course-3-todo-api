var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //built in promise library

mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true } );

module.exports = {mongoose}
