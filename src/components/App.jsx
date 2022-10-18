import user from '../json/user.json';
import { Profile } from './Profile/Profile';
import data from '../json/data.json'
import { Statistics } from './Statistics/Statistics';
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
    </div>
  );
};
