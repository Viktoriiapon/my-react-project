
import Profile from './components/Profile/Profile';
import user from './data/user.data.json';
import FriendList from './components/FriendList/FriendList';
import friend from './data/friend.json';
import TransactionHistory from './components/Transaction/TransactionHistory';
import transactions from './data/transaction.json';

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
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
