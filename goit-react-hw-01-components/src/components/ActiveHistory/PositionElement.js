import PropTypes from 'prop-types';
import p from './ActiveHistory.module.css';

const PositionElement = ({ type, amount, currency }) => {
  return (
    <tr className={p.line}>
      <td className={p.value}>{type}</td>
      <td className={p.value}>{amount}</td>
      <td className={p.value}>{currency}</td>
    </tr>
  );
};
export default PositionElement;

PositionElement.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
