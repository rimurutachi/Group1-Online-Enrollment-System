const ScheduleForm = require("../models/scheduleItems.js");

const Schedule = async (req, res) => {
    try {
      const { preferredDate, preferredTime } = req.body;
      if (!preferredDate || !preferredTime) {
        return res.json({ error: "Please fill up all fields!" });
      }
  
      const Schedule = await ScheduleForm.create({
        preferredDate,
        preferredTime,
      });
      return res.json(Schedule);
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = { Schedule }