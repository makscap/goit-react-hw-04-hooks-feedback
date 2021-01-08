import React, { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Value from '../Value/Value';
import s from '../Feedback/Feedback.module.css';
import Notification from '../Notification/Notification';

export default function Feedback() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

  const onLeaveFeedback = item => {
switch (item) {
  case 'good':
    setGood(s => s + 1);
    break;
  case 'neutral':
    setNeutral(s => s + 1);
    break;
  case 'bad':
    setBad(s => s + 1);
    break;
  default:
  return;
}
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };
    return (
      <div className={s.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics" className={s.statistics}>
          {countTotalFeedback() === 0 ? (
            <Notification message="No one reported yet"></Notification>
          ) : (
            <Value
              goodStats={good}
              neutralStats={neutral}
              badStats={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
