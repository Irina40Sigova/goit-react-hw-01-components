import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendListBox } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          ></FriendListItem>
        );
      })}
    </FriendListBox>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
