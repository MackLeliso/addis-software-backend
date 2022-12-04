import mongoose from "mongoose";

const Employee = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 2,
      max: 50,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    salary: {
      type: Number,
      require: true,
    },
    birthday: {
      type: Date,
      require: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Employee", Employee);
export default User;
