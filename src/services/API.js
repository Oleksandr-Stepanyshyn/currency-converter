import axios from "axios";

// axios.defaults.baseURL = "https://api.exchangerate.host";

export async function getCurrencyExchangeRateUAH() {
  const { data } = await axios.get(
    // "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
    // "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
    "https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR"
  );
  console.log("data", data);
  return data.rates;
}

export async function getCurrencyExchangeRate() {
  const {
    data: { rates },
  } = await axios.get(`https://api.exchangerate.host/latest`);
  return rates;
}

export async function getExchangeRate(firstCurrency, secondCurrency, amount) {
  const response = await axios.get(
    `https://api.exchangerate.host/convert?from=${firstCurrency}&to=${secondCurrency}&amount=${amount}`
  );
  // console.log("response", response.data);
  return response.data.result;
}
