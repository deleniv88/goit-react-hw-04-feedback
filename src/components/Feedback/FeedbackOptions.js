import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback, onLeaveFeedback2, onLeaveFeedback3 }) => (<div>
    <button type="button" onClick={onLeaveFeedback}>Good</button>
    <button type="button" onClick={onLeaveFeedback2}>Neutral</button>
    <button type="button" onClick={onLeaveFeedback3}>Bad</button>
</div>
)
export default FeedbackOptions;