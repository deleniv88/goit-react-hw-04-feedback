import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
(
    <div>
        <button type="button" id="good" onClick={onLeaveFeedback}>Good</button>
        <button type="button" id="neutral" onClick={onLeaveFeedback}>Neutral</button>
        <button type="button" id="bad" onClick={onLeaveFeedback}>Bad</button>
    </div>
)

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions;