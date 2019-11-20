const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");

const config = require("./config/config");

const userShema = new mongoose.Schema({
  firstname: { type: String, required: true, unique: true },
  email: { type: String, lowercase: true, required: true },
  password: { type: String, required: true }
});

userShema.methods = {
  authenticate: (password, userPassword, callback) => {
    // la fonction flechée ne fixe pas le this => undefined // ajout parametre userPassword
    return bcrypt.compare(password, userPassword, (err, samePassword) => {
      if (err) {
        return callback(err, samePassword);
      } else {
        return callback(null, samePassword);
      }
    });
  },
  getToken: () => jwt.encode(this, config.secret)
};

module.exports = mongoose.model("user", userShema);
