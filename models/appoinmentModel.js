const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    mechanicId: {
      type: String,
    },
    mechanicInfo: {
      type: String,
    },
    userInfo: {
      type: String,
    },
    date: {
      type: String,
    },
    status: {
      type: String,

      default: "pending",
    },
    time: {
      type: String,
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentModel;
