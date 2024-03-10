// import React from 'react';

const FriendListItem = ({ avatar, name, isOnline, id }) => {

  const spanStyle ={
  color:isOnline ? "green":"red",
  }
  return (
    <div className="fr-info">
      <img src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
      <p style={spanStyle}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;