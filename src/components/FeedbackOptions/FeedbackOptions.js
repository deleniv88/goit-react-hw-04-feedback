import React from "react";
import PropTypes from 'prop-types';
import { Buttons } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return options.map(option => (
        <Buttons type="button" key={options} onClick={() => onLeaveFeedback(option)}>{option}</Buttons>
    ));
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};
