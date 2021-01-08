const mongoose = require('mongoose');
const db_url = process.env.DB_URL_LOCAL;


// Establish Database Connection
mongoose.connect(
  
  `mongodb+srv://Kushal:Kushal@14@cluster0.jglzn.mongodb.net/bank?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => {
    console.log('Database connected');
});