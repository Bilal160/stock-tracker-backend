const express = require("express");
const router = express.Router();
const alertController = require("../controllers/alertController");
const { authenticate } = require("../middlewares/authMiddleware");
const statsController = require("../controllers/statsController");

router.post(
  "/",
  authenticate,
  statsController.trackRequest,
  alertController.createAlert
);
router.get(
  "/",
  authenticate,
  statsController.trackRequest,
  alertController.getAlerts
);
router.delete(
  "/:id",
  authenticate,
  statsController.trackRequest,
  alertController.deleteAlert
);

module.exports = router;
