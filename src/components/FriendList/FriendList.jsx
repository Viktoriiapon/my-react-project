import React from 'react';
import FriendListItem from './FriendListItem';
import './friend_module.css'

const FriendList = ({ friend }) => {
  return (
    <ul>
      {friend.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="fr-list">
          <FriendListItem 
            avatar={avatar}
            name={name} 
            isOnline={isOnline} 
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;


{/* 
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}; */}