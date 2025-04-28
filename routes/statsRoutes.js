const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");
const { authenticate } = require("../middlewares/authMiddleware");

router.get(
  "/",
  authenticate,
  statsController.trackRequest,
  statsController.getStats
);

module.exports = router;
