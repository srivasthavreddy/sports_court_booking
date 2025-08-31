const express = require("express");
const router = express.Router();
const Slot = require("../models/Slot");
const auth = require("../middleware/auth");

// GET slots for a specific date
router.get("/", async (req, res) => {
  const { date } = req.query;
  let query = {};
  if (date) query.date = date;
  const slots = await Slot.find(query).populate("bookedBy", "name email");
  res.json(slots);
});

// POST book a slot (authenticated)
router.post("/book/:id", auth, async (req, res) => {
  try {
    const slot = await Slot.findById(req.params.id);
    if (slot.isBooked) {
      return res.status(400).json({ msg: "Slot already booked!" });
    }
    slot.isBooked = true;
    slot.bookedBy = req.user;
    await slot.save();
    res.json({ msg: "Slot booked successfully", slot });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;