const express = require("express");
const app = express();
//const cors = require("cors");
const port = process.env.PORT || 4000;
const database = require('./database');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const Customer = require('./src/models/customer');
const Transaction = require('./src/models/transaction');
app.use(cors());
var jsonParser = bodyParser.json()
app.use("/custDetails", (req, res) => {
  Customer.find({}, function (err, foundItems) {
    res.status(200).json(
      [...foundItems]
    );
  });
});
app.use("/transact/:id", (req, res) => {
  const { id } = req.params;
  Customer.findById(id, function (err, User) {
    res.status(200).json(
      User
    );
  });
});

app.post("/transfer/:id1", jsonParser, async (req, res) => {
  console.log(req.body);
  const { id1 } = req.params;
  const amount = parseInt(req.body.amount);
  ToUser = parseInt(req.body.user);
  var toUser = await Customer.findOne({ acc_no: ToUser }).exec();
  const fromUser = await Customer.findById(id1).exec();
  if (amount <= fromUser.balance && amount > 0) {

    let fromamountNew = parseInt(fromUser.balance - amount);
    let toamountNew = parseInt(toUser.balance + amount);
    await Customer.findByIdAndUpdate(id1, { balance: fromamountNew }, function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated User : ", docs);
      }
    });
    await Customer.findByIdAndUpdate(toUser._id, { balance: toamountNew }, function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated User : ", docs);
      }
    });
    const transactionNumber = Math.floor((Math.random() * 10000000000) + 1);
    let newT = new Transaction();
    newT.sendersName = fromUser.name;
    newT.recieversName = toUser.name;
    newT.sender_acc_no = fromUser.acc_no;
    newT.reciever_acc_no = toUser.acc_no;
    newT.transactionNumber = transactionNumber;
    newT.amount = amount;
    await newT.save();
    res.status(200).json(newT)
  }
  else {
    res.status(404).json(error);
  }
});



// app.get('/transfer/custDetails.ejs', function(req, res){ 
//   res.redirect("/custDetails.ejs");
// });
app.get("/history", (req, res) => {
  Transaction.find({}, function (err, foundItems) {
    res.status(200).json(
      [...foundItems]
    );
  });
});


app.listen(4000, function () {
  console.log("Server started on port 4000");
});
