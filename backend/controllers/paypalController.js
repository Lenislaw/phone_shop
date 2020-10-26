const asyncHandler = require("express-async-handler");

const paypalPayment = (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
};

module.exports = { paypalPayment };
