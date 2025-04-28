let apiStats = {
  requests: 0,
  lastUpdated: new Date(),
};

exports.getStats = (req, res) => {
  try {
    res.json(apiStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.trackRequest = (req, res, next) => {
  apiStats.requests++;
  apiStats.lastUpdated = new Date();
  next();
};
