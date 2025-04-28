const axios = require('axios');
require('dotenv').config();

const FINNHUB_API_KEY = "d06pr19r01qg26s9g670d06pr19r01qg26s9g67g";

const getQuote = async (symbol) => {
  return axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
};

const getHistoricalData = async (symbol, from, to, resolution = 'D') => {
  return axios.get(
    `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${FINNHUB_API_KEY}`
  );
};

module.exports = {
  getQuote,
  getHistoricalData
};