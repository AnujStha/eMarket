const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

var userSchema = new SCHEMA(
  {
    userName: {
      unique: true,
      required: true,
      type: String
    },
    firstName: String,
    lastName: String,
    password: {
      required: true,
      type: String
    },
    address: {
      permanentAddress: {
        type: String
      },
      tempAddress: {
        type: Array
      }
    },
    contactNumber: Number,
    gender: {
      type: String,
      enum: ["male", "female", "others"]
    },
    profession: String,
    email: {
      type: String,
      unique: true,
      sparse: true
    },
    dob: Date,
    active: {
      type: Boolean,
      default: false
    },
    online: {
      type: Boolean,
      default: false
    },
    images: String,
    role: {
      type: Number, //1:admin,2:userCustomer,3:userVendor
      default: 2
    }
  },
  {
    timestamps: true
  }
);
const userModel = MONGOOSE.model("user", userSchema);
module.exports = userModel;
