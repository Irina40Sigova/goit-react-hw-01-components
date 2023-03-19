import user from 'path/user.json';
import data from 'path/data';
import friends from 'path/friends';
import transactions from 'path/transactions';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { Wrapper, Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Wrapper>
        <FriendList friends={friends} />

        <TransactionHistory transactions={transactions} />
      </Wrapper>
    </Container>
  );
};
