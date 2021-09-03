import FiendCard from './FriendCard';
import s from './Friendlist.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(el => (
        <FiendCard
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      ))}
    </ul>
  );
};
export default FriendList;
