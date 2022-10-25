import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notifications/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handlerIncrement = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 }
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percenatage = ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0) + '%';
    return percenatage;
  };

  render() {
    const title = 'Please leave feedback';
    const statistics = 'Statistics';
    const message = 'There is no feedback';
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title={title}>
          <FeedbackOptions options={options} onLeaveFeedback={this.handlerIncrement} />
        </Section>

        <Section title={statistics}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={message} />
          )}
        </Section>
      </div>
    );
  };
};

export default App;
