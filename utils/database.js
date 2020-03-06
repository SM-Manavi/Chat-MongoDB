const mongoose = require("mongoose");
const mongoURI =
  "";

module.exports = mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to the database.");
});
