const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schedule Appointment (6) Schema
const ScheduleSchema = new Schema({
  preferredDate: Date,
  preferredTime: String,
});

const ScheduleModel = mongoose.model("Schedule", ScheduleSchema);

module.exports = ScheduleModel;