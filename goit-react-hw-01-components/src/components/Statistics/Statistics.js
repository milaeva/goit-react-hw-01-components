import PropTypes from 'prop-types';
import StatItem from './StatItem';
import s from './Statistics.module.css';

const Statistics = ({ statistics }) => {
  return (
    <section className={s.container}>
      {statistics.title !== undefined && (
        <h2 className={s.title}>{statistics.title}</h2>
      )}

      <ul className={s.list}>
        {statistics.map(el => (
          <StatItem key={el.id} label={el.label} percentage={el.percentage} />
        ))}
      </ul>
    </section>
  );
};
export default Statistics;

StatItem.propTypes = {
  statistics: PropTypes.array,
};
