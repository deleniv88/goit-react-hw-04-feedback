import React from "react";
import PropTypes from 'prop-types';
import { Sections } from "./Sections.styled";

const Section = ({title, children}) => (
    <Sections>
        <h2>{title}</h2>  
        {children}
    </Sections>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;