const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware.js");
const {
  registerUser,
  authUser,
  getUserProfile,
} = require("../controllers/userController.js");

router.route("/profile").get(protect, getUserProfile);
router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;
