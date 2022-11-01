import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notifications/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerIncrement = feedback => {
    switch (feedback) {
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

  const countTotalFeedback = () =>  good + neutral + bad;
   
  const countPositiveFeedbackPercentage = () => ((good / countTotalFeedback()) * 100).toFixed(0) + '%';

  const options = Object.keys({ good, neutral, bad });

  return (
    <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={handlerIncrement} />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message='There is no feedback' />
        )}
      </Section>
    </div>
  );
}
