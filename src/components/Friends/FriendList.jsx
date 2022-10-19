import PropTypes from 'prop-types';
import { FriendsList } from './Friends.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
      <FriendsList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        ))}
      </FriendsList>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        })
    ),
};