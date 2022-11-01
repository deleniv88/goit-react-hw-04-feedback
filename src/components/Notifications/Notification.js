import React from "react";
import PropTypes from 'prop-types';
import css from '../Notifications/Notifications.module.css'

const Notification = ({message}) => (
    <div className={css.notifications}>
        <h2>{message}</h2>
    </div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;