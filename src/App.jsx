
import Profile from './components/Profile/Profile'
import user from './data/user.data.json'
import FriendList from './components/FriendList/FriendList';
import friend from './data/friend.json'

const App = () => {
  return (
    <>
      <Profile
        image={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <FriendList
      friend={friend} />
    </>
  );
};

export default App;
