const mongoose = require("mongoose");
const HoldingSchema = require("../schema/HoldingSchema"); // importing schema

const HoldingModel = mongoose.model("Holding", HoldingSchema);

module.exports = HoldingModel;  // exporting model