import styled from "styled-components";
import { FcCurrencyExchange } from "react-icons/fc";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #699bff;
`;
export const Logo = styled(FcCurrencyExchange)`
  width: 50px;
  height: 50px;
`;

export const HeaderList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  font-weight: 600;
  padding: 6px;
  border-radius: 8px;
  background-color: #f5f5f5;
  & + & {
    margin-left: 16px;
  }
`;

export const ItemText = styled.span`
  font-weight: 500;
  margin-left: 8px;
`;
