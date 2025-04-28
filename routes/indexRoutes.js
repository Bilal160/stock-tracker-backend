const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const { authenticate } = require("../middlewares/authMiddleware");
const statsController = require("../controllers/statsController");

router.get("/", indexController.getIndices);
router.get(
  "/:symbol",
  authenticate,
  statsController.trackRequest,
  indexController.getIndexData
);
router.get(
  "/:symbol/historical",
  authenticate,
  statsController.trackRequest,
  indexController.getHistoricalData
);

module.exports = router;
