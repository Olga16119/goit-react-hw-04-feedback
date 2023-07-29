import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackClick = feedback => {
    switch (feedback) {
      case "good":
        setGood(prevState => prevState + 1);
        break;

      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      
      default: break
    }
  };
 
  const total = good + neutral + bad;



  const countPositivePercentage = () => {
 

    if (total === 0) {
      return 0;
    }

    return Math.round((good * 100) / total);
  };



  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good","neutral","bad"]}
          onFeedbackClick={onFeedbackClick}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositivePercentage()}
        />
        ) : (
        <Notification message={'There is no feedback!'} />
        )}
      </Section>
    </>
  );
};

export default App;
