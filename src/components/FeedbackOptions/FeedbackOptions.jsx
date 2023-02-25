import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateKeys = Object.keys(options);
  return stateKeys.map(key => (
    <button
      key={key}
      type="button"
      className={css.button}
      name={key}
      onClick={event => {
        onLeaveFeedback(event);
      }}
    >
      {key.charAt(0).toUpperCase() + key.slice(1)}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
