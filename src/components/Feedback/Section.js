import React from "react";
import PropTypes from 'prop-types';

const Section = ({title}) => {
    <section>
        {title && <h2>{title}</h2>}
    </section>
}

Section.propTypes = {
    title: PropTypes.string
}

export default Section;