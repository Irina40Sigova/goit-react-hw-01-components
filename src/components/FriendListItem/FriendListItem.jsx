import PropTypes from 'prop-types';

import { Img, Item, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      {isOnline ? (
        <Status style={{ backgroundColor: 'red' }}></Status>
      ) : (
        <Status style={{ backgroundColor: 'green' }}></Status>
      )}
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
