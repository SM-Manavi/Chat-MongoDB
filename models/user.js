const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  roomName : {
    type : String,
    default : ""
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("user", userSchema);
