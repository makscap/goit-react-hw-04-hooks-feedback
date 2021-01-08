import React from 'react';
import s from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';

const Value = ({
  goodStats,
  neutralStats,
  badStats,
  total,
  positivePercentage,
}) => (
  <>
    <p className={s.text}>Good:{goodStats}</p>
    <p className={s.text}>Neutral:{neutralStats}</p>
    <p className={s.text}>Bad:{badStats}</p>
    <p className={s.text}>Total:{total}</p>
    <p className={s.text}>Positive feedback:{positivePercentage}%</p>
  </>
);
Value.propTypes = {
  goodStats: PropTypes.number.isRequired,
  neutralStats: PropTypes.number.isRequired,
  badStats: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Value;