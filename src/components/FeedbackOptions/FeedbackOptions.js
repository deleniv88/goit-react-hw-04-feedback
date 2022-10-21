import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (<div>
    <button type="button" id="good" onClick={onLeaveFeedback}>Good</button>
    <button type="button" id="neutral" onClick={onLeaveFeedback}>Neutral</button>
    <button type="button" id="bad" onClick={onLeaveFeedback}>Bad</button>
</div>
)
export default FeedbackOptions;