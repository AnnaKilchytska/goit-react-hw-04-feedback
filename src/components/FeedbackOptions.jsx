import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => (
        <button
          type="button"
          key={nanoid()}
          className={css.feedbackBtn}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
