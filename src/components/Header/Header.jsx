import { useEffect, useState } from 'react';
import { getExchangeRate } from '../../services/API';
import {
  HeaderContainer,
  HeaderList,
  Item,
  ItemText,
  Logo,
} from './Header.styled';

export const Header = () => {
  const [usdRate, setUsdRate] = useState();
  const [eurRate, setEurRate] = useState();

  useEffect(() => {
    (async function fetchCurrency() {
      try {
        const usd = await getExchangeRate('USD', 'UAH', '1');
        setUsdRate(Number(usd).toFixed(2));
        const eur = await getExchangeRate('EUR', 'UAH', '1');
        setEurRate(Number(eur).toFixed(2));
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      <HeaderList>
        <Item>
          USD:<ItemText>{usdRate}</ItemText>
        </Item>
        <Item>
          EUR:<ItemText>{eurRate}</ItemText>
        </Item>
      </HeaderList>
    </HeaderContainer>
  );
};
