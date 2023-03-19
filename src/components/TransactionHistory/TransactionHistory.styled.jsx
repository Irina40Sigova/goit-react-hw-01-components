import styled from 'styled-components';

export const TransactionHistoryTab = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 4px;
  margin: 30px auto;
  width: auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`;

export const TabThead = styled.thead`
  display: block;
  background-color: #019db1;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const TableTr = styled.tr`
  display: block;
  color: #5d7791;
  background-color: rgba(42, 212, 356, 0.22);
  :nth-child(even) {
    background-color: #e6eaee;
  }
  :last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const TableTh = styled.th`
  color: #000000;
  text-transform: uppercase;
  padding: 8px;
  text-align: center;
  width: 200px;
  border-right: 1px solid #ffffff;
  :last-child {
    border-right: none;
  }
`;

export const TabText = styled.td`
  padding: 8px;
  text-align: center;
  color: #5d7791;
  text-transform: capitalize;
  width: 200px;
`;
