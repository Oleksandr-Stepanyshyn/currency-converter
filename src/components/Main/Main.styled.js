import styled from 'styled-components';
import { CgMathEqual } from 'react-icons/cg';

export const ExchangeForm = styled.div`
  margin: 0 auto;
  width: 300px;
  border: 1px solid #000000;
  margin-top: 40px;
  padding-top: 12px;

  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 4px 0px, rgb(0 0 0 / 12%) 0px 0px 4px 0px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid transparent;

  @media screen and (min-width: 768px) {
    width: 600px;
    font-size: 24px;
  }
`;

export const HeaderForm = styled.h3`
  text-align: center;
  color: #699bff;
`;

export const Form = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
  }
`;

export const Currency = styled.div`
  display: flex;
  padding: 20px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 24px) / 2);
  }
`;

export const Loader = styled.div`
  width: 40px;
  margin-left: 24px;

  @media screen and (min-width: 768px) {
    margin: 0 8px;
  }
`;

export const EqualIcon = styled(CgMathEqual)`
  width: 40px;
  height: 40px;
  transform: rotate(90deg);

  @media screen and (min-width: 768px) {
    transform: rotate(0deg);
  }
`;

export const Select = styled.select`
  display: block;
  width: 68px;

  font-size: inherit;
  font-weight: 500;

  cursor: pointer;
  border: 0px none;
  border-bottom: 2px solid #cccccc;

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  &:hover,
  &:focus {
    border: 0px none;
    border-bottom: 2px solid #699bff;
    outline: none;
  }
`;

export const Input = styled.input`
  display: block;
  margin-left: 20px;
  width: 100%;

  font-size: 20px;

  border: 0px none;
  border-bottom: 2px solid #cccccc;

  &:hover,
  &:focus {
    border: 0px none;
    border-bottom: 2px solid #699bff;
    outline: none;
  }
`;

export const Option = styled.option`
  padding: 20px;
`;
