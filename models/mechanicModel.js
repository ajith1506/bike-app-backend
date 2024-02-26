const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "first name is required"],
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
    },
  },
  { timestamps: true }
);

const mechanicModel = mongoose.model("mechanics", mechanicSchema);
module.exports = mechanicModel;
