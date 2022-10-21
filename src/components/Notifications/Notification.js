import React from "react";
import PropTypes from 'prop-types';

const Notification = ({message}) => (
    <section>
        <h2>{message}</h2>
    </section>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification;