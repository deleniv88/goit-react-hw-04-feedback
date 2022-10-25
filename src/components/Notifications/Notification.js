import React from "react";
import PropTypes from 'prop-types';
import {Notifications} from './Notifications.styled'

const Notification = ({message}) => (
    <Notifications>
        <h2>{message}</h2>
    </Notifications>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;