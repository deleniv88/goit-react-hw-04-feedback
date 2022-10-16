import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Section from "./Section";
import Statistics from "./Statistics";
import PropTypes from 'prop-types';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handlerIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
        this.countPositiveFeedbackPercentage();
        this.totalQuantity();
    };

    handlerIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
        this.totalQuantity();
        this.countPositiveFeedbackPercentage();
    };

    handlerIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
        this.totalQuantity();
        this.countPositiveFeedbackPercentage();
    };

    totalQuantity = () => {
        this.setState(prevState => ({
            quantity: prevState.good + prevState.neutral + prevState.bad
        }));
    };

    countPositiveFeedbackPercentage = () => {
        if (this.state.quantity > 0) {
            this.setState(prevState => ({
                percenatage: ((this.state.good / prevState.quantity) * 100).toFixed(0) + '%'
            }));
        }
        else if (this.state.good >= 0) {
            this.setState({
                percenatage: '100%'
            });
        }
    };

    render() {
        return (
            <>
                <FeedbackOptions onLeaveFeedback={this.handlerIncrementGood} onLeaveFeedback2={this.handlerIncrementNeutral} onLeaveFeedback3={this.handlerIncrementBad} />
                <h2>Statistics</h2>
                <Section title=""></Section>
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.state.quantity}
                    positivePercentage={this.state.percenatage} />
                <Notification message="There is no feedback"/>
            </>
        );
    };
};

Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
}

export default Feedback;