import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedbackClick }) => {
  return (
    <ul className={css.optionList}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className={css.optionItem}
            onClick={() => onFeedbackClick(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
