import PositionElement from './PositionElement';
import p from './ActiveHistory.module.css';

const ActiveHistory = ({ active }) => {
  return (
    <table className={p.table}>
      <thead>
        <tr>
          <th className={p.title}>Type</th>
          <th className={p.title}>Amount</th>
          <th className={p.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {active.map(el => (
          <PositionElement
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default ActiveHistory;
