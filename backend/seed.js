const mongoose = require("mongoose");
const Slot = require("./models/Slot");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dates = [
  "2025-09-01",
  "2025-09-02",
  "2025-09-03",
  "2025-09-04",
  "2025-09-05",
  "2025-09-06",
  "2025-09-07",
  "2025-09-08",
  "2025-09-09",
  "2025-09-10",
  "2025-09-11",
  "2025-09-12",
  "2025-09-13",
  "2025-09-14",
  "2025-09-15",
];

const times = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
];

const slots = [];
dates.forEach(date => {
  times.forEach(time => {
    slots.push({ date, time, isBooked: false });
  });
});

Slot.deleteMany({})
  .then(() => Slot.insertMany(slots))
  .then(() => {
    console.log("Fresh slots added!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Seeding error:", err);
    mongoose.disconnect();
  });