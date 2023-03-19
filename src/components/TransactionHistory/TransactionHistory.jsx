import PropTypes from 'prop-types';

import {
  TransactionHistoryTab,
  TabThead,
  TableTr,
  TableTh,
  TabText,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryTab>
      <TabThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TabThead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableTr key={id} type={type} amount={amount} currency={currency}>
              <TabText>{type}</TabText>
              <TabText>{amount}</TabText>
              <TabText>{currency}</TabText>
            </TableTr>
          );
        })}
      </tbody>
    </TransactionHistoryTab>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
