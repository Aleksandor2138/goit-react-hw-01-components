import user from '../json/user.json';
import { Profile } from './Profile/Profile';
import data from '../json/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../json/friends.json';
import { FriendList } from './Friends/FriendList';
import transactions from '../json/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';
const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
