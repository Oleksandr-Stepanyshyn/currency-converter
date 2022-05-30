import { useCurrencyExchange } from 'hooks/useCurrencyExchange';
import { RotatingLines } from 'react-loader-spinner';
import {
  EqualIcon,
  Currency,
  Form,
  Input,
  Option,
  Select,
  Loader,
  HeaderForm,
  ExchangeForm,
} from './Main.styled';

export const Main = () => {
  const {
    handleChange,
    currency,
    isLoading,
    firstValue,
    secondValue,
    firstCurrency,
    secondCurrency,
  } = useCurrencyExchange();

  return (
    <ExchangeForm>
      <HeaderForm>Currency converter</HeaderForm>
      <Form>
        <Currency>
          <Select
            name="firstCurrency"
            id="firstCurrency"
            value={firstCurrency}
            onChange={handleChange}
          >
            {currency.map(key => {
              return (
                <Option key={key} defaultValue={key}>
                  {key}
                </Option>
              );
            })}
          </Select>
          <Input
            type="number"
            name="firstValue"
            autocomplete="off"
            placeholder="100.00"
            value={firstValue}
            onChange={handleChange}
          />
        </Currency>
        <Loader>
          {isLoading ? (
            <RotatingLines width="40" strokeWidth="3" />
          ) : (
            <EqualIcon />
          )}
        </Loader>
        <Currency>
          <Select
            name="secondCurrency"
            id="secondCurrency"
            value={secondCurrency}
            onChange={handleChange}
          >
            {currency.map(key => {
              return (
                <Option key={key} defaultValue={key}>
                  {key}
                </Option>
              );
            })}
          </Select>
          <Input
            type="text"
            name="secondValue"
            autocomplete="off"
            placeholder="2900.00"
            value={secondValue}
            onChange={handleChange}
          />
        </Currency>
      </Form>
    </ExchangeForm>
  );
};
