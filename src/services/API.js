import axios from 'axios';

axios.defaults.baseURL = 'https://api.exchangerate.host';

export async function getCurrencyExchangeRateUAH() {
  const { data } = await axios.get('/latest?base=UAH&symbols=USD,EUR');
  console.log('data', data);
  return data.rates;
}

export async function getCurrencyExchangeRate() {
  const {
    data: { rates },
  } = await axios.get(`/latest`);
  return rates;
}

export async function getExchangeRate(firstCurrency, secondCurrency, amount) {
  const response = await axios.get(
    `/convert?from=${firstCurrency}&to=${secondCurrency}&amount=${amount}`
  );
  return response.data.result;
}
