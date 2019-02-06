var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //built in promise library
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
//mongoose.set('useFindAndModify',false);
mongoose.connect('mongodb://localhost:27017/TodoApp' );
//mongoose.connect(uri, { useCreateIndex: true });
// mongoose.set(useNewUrlParser: true),
module.exports = {mongoose}
