import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { randomColor } from './randomcolor';
const StatItem = ({ label, percentage }) => {
  return (
    <li className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.quantity}>{percentage}%</span>
    </li>
  );
};
export default StatItem;

StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
