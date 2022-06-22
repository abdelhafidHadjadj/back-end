const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
  avatar: {
    type: [String],
  },
  role: {
    type: String,
    enum: ["SUPERADMIN", "ADMIN", "USER"],
    default: "USER",
  },
});
UserSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
