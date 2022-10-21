import React, { Children, Component } from "react";
import PropTypes from 'prop-types';
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

const Section = ({title}) => (
    <section>
        <h2>{title}</h2>
        {Children}
        
    </section>
)


Section.propTypes = {
    title: PropTypes.string
}

export default Section;