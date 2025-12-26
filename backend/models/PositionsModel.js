const mongoose = require("mongoose");
const PositionsSchema = require("../schema/PositionsSchema");

const PositionsModel = mongoose.model("positions", PositionsSchema);

module.exports = PositionsModel;
