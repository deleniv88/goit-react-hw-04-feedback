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

  handlerIncrement = (e) => {
    const id = e.target.id;
    console.log(id);
    if (id === 'good') {
      this.setState({
        good: this.state.good + 1,
      })
    }
    else if (id === 'neutral') {
      this.setState({
        neutral: this.state.neutral + 1
      })
    }
    else if (id === 'bad') {
      this.setState({
        bad: this.state.bad + 1
      })
    }
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
    const message = 'There is no feedback'

    return (
      <>
        <Section title={title}>
           <FeedbackOptions onLeaveFeedback={this.handlerIncrement}/>
           <h2>Statistics</h2>
            {!this.countTotalFeedback() > 0 ? <Notification message={message}/> :
             <Statistics
             good={this.state.good}
             neutral={this.state.neutral}
             bad={this.state.bad}
             total={this.countTotalFeedback()}
             positivePercentage={this.countPositiveFeedbackPercentage()} />
            }
        </Section>
      </>
    );
  };
};

export default App;
