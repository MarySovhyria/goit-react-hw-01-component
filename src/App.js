import user from '../src/data/user.json';
import Profile from './profile/profile';

import data from './data/data.json';
import Statistic from './statistic/statistics';

import friends from './data/friends.json';
import FriendList from './friends/friendsList';

import transactions from './data/transactions.json'
import TransactionHistory from './transactionHistory/transactionTable'; 

function App() {
  return (
    <div>
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic 
        stat={data}
      />
      <FriendList 
      friends={friends} />; 
      <TransactionHistory 
      items={transactions} />;
  </div>


  );
}

export default App;