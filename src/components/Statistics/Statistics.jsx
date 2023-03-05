import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics(props) {
  return (
    <div>
      <p>
        Good: <span className={css.statsData}>{props.good}</span>
      </p>
      <p>
        Neutral: <span className={css.statsData}>{props.neutral}</span>
      </p>
      <p>
        Bad: <span className={css.statsData}>{props.bad}</span>
      </p>

      <p>
        Total: <span className={css.statsData}>{props.total}</span>
      </p>

      <p>
        Positive feedback:
        <span className={css.statsData}>{props.positivePercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
