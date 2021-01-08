import React from 'react';
import s from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(el => (
      <button
        key={uuidv4()}
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback(el)}
      >
        {el.slice(0, 1).toUpperCase() + el.slice(1)}
      </button>
    ))}
  </>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;