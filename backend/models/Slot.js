const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  date: { type: String, required: true }, 
  time: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
});

module.exports = mongoose.model("Slot", slotSchema);