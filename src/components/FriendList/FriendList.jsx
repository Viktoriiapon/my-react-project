import React from 'react';
import FriendListItem from './FriendListItem';
import './friend_module.css'

const FriendList = ({ friend }) => {
  return (
    <ul className="fr-list">
      {friend.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="fr-item">
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
