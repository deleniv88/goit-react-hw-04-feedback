import React from "react";

const FeedbackOptions = ({options, options2, options3}) => <div>
<button type="button" onClick={options}>Good</button>
<button type="button" onClick={options2}>Neutral</button>
<button type="button" onClick={options3}>Bad</button>
</div>;

export default FeedbackOptions;