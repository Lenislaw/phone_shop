const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsByBrand,
} = require("../controllers/productController.js");

router.route("/").get(getProducts);

module.exports = router;
