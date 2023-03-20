import styled from 'styled-components';
import getRandomHexColor from './getRandomHexColor';

export const StatisticsBox = styled.section`
  margin: 24px auto;
  padding: 12px;
  background: rgba(42, 212, 356, 0.22);
  border-radius: 18px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 18px;
  color: #000000;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  justify-items: center;
  width: 128px;
  padding: 6px;
  background-color: ${getRandomHexColor};

  :first-of-type {
    border-radius: 12px 0 0 12px;
  }
  :last-child {
    border-radius: 0 12px 12px 0;
  }
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;
