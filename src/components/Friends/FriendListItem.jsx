import PropTypes from 'prop-types';
import { FriendItem, Online, Offline, Img, Name } from './Friends.styled';

export const FriendListItem = ({ isOnline, name, avatar }) => {
    return (
        <FriendItem>
            {isOnline ? <Online /> : <Offline />}
            <Img src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
