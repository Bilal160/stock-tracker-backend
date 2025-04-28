const indices = [
  { symbol: "AAPL", name: "Apple Inc" },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "GOOGL", name: "Alphabet Inc (Google)" },
  { symbol: "AMZN", name: "Amazon.com Inc" },
  { symbol: "TSLA", name: "Tesla Inc" },
  { symbol: "META", name: "Meta Platforms Inc (Facebook)" },
];

exports.getIndices = (req, res) => {
  try {
    res.json(indices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getIndexData = async (req, res) => {
  try {
    const { symbol } = req.params;
    const response = await req.finnhub.getQuote(symbol);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getHistoricalData = async (req, res) => {
  try {
    const { symbol } = req.params;
    const { from, to } = req.query;
    const response = await req.finnhub.getHistoricalData(symbol, from, to);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
