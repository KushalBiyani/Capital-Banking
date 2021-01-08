const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    acc_no: Number,
    balance: Number,
    location: String,
  });

  const Customer = mongoose.model("Customer", customerSchema);
  
module.exports = Customer;
