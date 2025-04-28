const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const finnhubService = require("./services/finnhubService");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.finnhub = finnhubService;
  next();
});

app.use("/api/indices", require("./routes/indexRoutes"));
app.use("/api/alerts", require("./routes/alertRoutes"));
app.use("/api/stats", require("./routes/statsRoutes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
