import React, { useState } from 'react';
import Notification from 'components/Notification/Notification';
import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good * 100) / countTotalFeedback())
      : 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </Container>
  );
};

export default App;
