import { useEffect, useState } from 'react';
import { getCurrencyExchangeRate, getExchangeRate } from '../services/API';

export const useCurrencyExchange = () => {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('UAH');

  useEffect(() => {
    (async function fetchCurrency() {
      try {
        const response = await getCurrencyExchangeRate();
        const currencyKey = Object.keys(response);
        setCurrency(currencyKey);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  const fetchExchangeValue = (name, value) => {
    if (name === 'firstValue') {
      return getExchangeRate(firstCurrency, secondCurrency, value);
    }
    if (name === 'secondValue') {
      return getExchangeRate(secondCurrency, firstCurrency, value);
    }
    if (name === 'firstCurrency') {
      return getExchangeRate(secondCurrency, value, secondValue);
    }
    return getExchangeRate(firstCurrency, value, firstValue);
  };

  const replacedValue = (name, value, exchangeValue) => {
    switch (name) {
      case 'firstValue':
        setFirstValue(value);
        setSecondValue(exchangeValue);
        break;

      case 'secondValue':
        setSecondValue(value);
        setFirstValue(exchangeValue);
        break;

      case 'firstCurrency':
        setFirstCurrency(value);
        setFirstValue(exchangeValue);
        break;

      case 'secondCurrency':
        setSecondCurrency(value);
        setSecondValue(exchangeValue);
        break;

      default:
        break;
    }
  };

  const handleChange = async e => {
    const { name, value } = e.target;

    if (!value) {
      setFirstValue('');
      setSecondValue('');
      return;
    }

    setIsLoading(true);

    try {
      const exchangeValue = await fetchExchangeValue(name, value);
      const correctValue = Number(exchangeValue).toFixed(2);
      replacedValue(name, value, correctValue);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  return {
    handleChange,
    currency,
    isLoading,
    firstValue,
    secondValue,
    firstCurrency,
    secondCurrency,
  };
};
