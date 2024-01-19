const mongoose = require("mongoose");

async function connect() {
  try {
  
    mongoose.connect(process.env.MONGO_URI);
    // Once mongoose has connected it will give me mongoose.connection the string will be available and based on this you can actually listen to variety of events
    const connection = mongoose.connection;
    // EG :
    // connected in an event and fires an callback
    // Every event is listen by the on
    connection.on("connected", () => {
      console.log("MongoDB Connected Successfull");
    });

    connection.on("error", (err) => {
      console.log("MongoDb connection Error " + err);
      process.exit();
    });
  } catch (e) {
    console.log("Something Went Wrong");
    console.log(e);
  }
}
module.exports = connect