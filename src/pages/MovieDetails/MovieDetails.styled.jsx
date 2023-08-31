import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
`;

export const Button = styled(Link)`
  background: #d93bd6;
  border: 1px solid #d93bd6;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  text-decoration: none;

  outline: 0;
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  &:hover,
  &:active {
    background-color: initial;
    color: #4e0963;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const MovieDetailsTittle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #db14b0;
`;

export const MovieDetailsText = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  color: #db14b0;
`;

export const MovieDetailsSubTittle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  font-style: italic;

  color: #db14b0;
`;
export const MovieDetailsDesc = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #a00b80;
`;

export const MovieDetailsPageSubTittle = styled.h3`
  font-size: 24px;
  color: #740a65;
  text-align: center;
  margin-bottom: 20px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;
