const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  order_id: String,   // your original
  name: String,       // added (required by your API)
  qty: Number,
  price: Number,
  mode: String,       // added (required by your API)
  status: String
});

module.exports = { OrdersSchema };
