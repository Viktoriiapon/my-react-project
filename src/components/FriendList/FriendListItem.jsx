// import React from 'react';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
    </div>
  );
};

export default FriendListItem;