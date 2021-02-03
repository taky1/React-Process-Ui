const mongoose = require("mongoose");

var processus = mongoose.model("processus", {
  title: { type: String },
  icon: { type: String },
  color: { type: String },
  form: { type: String },
  LinkTask: {
    link1: { type: String },
    link2: { type: String },
  },
  position: {
    x: { type: Number },
    y: { type: Number },
  },
});

module.exports = { processus };
