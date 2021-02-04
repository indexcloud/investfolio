const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0bolbf48v6rgo5eb28g";
const finnhubClient = new finnhub.DefaultApi();

export default finnhubClient;
