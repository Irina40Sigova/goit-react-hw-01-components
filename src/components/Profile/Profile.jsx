import PropTypes from 'prop-types';

import {
  ProfileWrapper,
  Description,
  UserAvatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsList,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <UserAvatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{'@' + tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsList>
      </Stats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
