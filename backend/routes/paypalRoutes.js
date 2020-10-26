const express = require("express");
const router = express.Router();
const { paypalPayment } = require("../controllers/paypalController.js");

router.route("/").get(paypalPayment);

module.exports = router;
