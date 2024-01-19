const mongoose = require("mongoose");

// Schema
const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // token:{
  //   type:String,
  //   required:true
  // }
});

//Model for the above schema
// This function takes in the name of our model which is login, this is the name that you are going to see inside the mongodb database. So this would be like a login collection inside of mongodb and then we pass it our schema.
module.exports = mongoose.model("logins", loginSchema);
