// In-memory storage for alerts (replace with database in production)
let alerts = [];

exports.createAlert = (req, res) => {
  try {
    const { symbol, threshold, direction } = req.body;
    const newAlert = {
      id: Date.now(),
      userId: req.user.uid,
      symbol,
      threshold,
      direction,
      createdAt: new Date(),
    };
    alerts.push(newAlert);
    res.status(201).json(newAlert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAlerts = (req, res) => {
  try {
    const userAlerts = alerts.filter((alert) => alert.userId === req.user.uid);
    res.json(userAlerts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteAlert = (req, res) => {
  try {
    alerts = alerts.filter(
      (alert) =>
        alert.id !== parseInt(req.params.id) || alert.userId !== req.user.uid
    );
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
