// module imports
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    googleId: String,
    profilePhoto: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', UserSchema);
