const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel.js");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 4;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const brand = req.query.brand
    ? {
        brand: {
          $regex: req.query.brand,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword, ...brand });
  const products = await Product.find({ ...keyword, ...brand })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

module.exports = { getProducts };
