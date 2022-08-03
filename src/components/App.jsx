import { useState } from 'react';
import { Box } from './Box';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Container } from './App.styled';

const options = ['Good', 'Neutral', 'Bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    let name = event.target.name.toLowerCase();

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);

  return (
    <Box as="main" py={3} width="100%">
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {totalFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification text="There is no feedback" />
        )}
      </Container>
    </Box>
  );
}
