const mongoose = require('mongoose');
// Establish Database Connection
mongoose.connect(
  `mongodb+srv://Kushal:${process.env.MONGO_DB_PASSWORD}@cluster0.jglzn.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => {
    console.log('Database connected');
  });