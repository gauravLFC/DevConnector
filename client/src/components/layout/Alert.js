import React from 'react';
import ProtoTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({alerts}) => 
    alerts !== undefined && alerts.length > 0 && alerts.map(alert => (
        <div key={alert.id} className = {`alert alert-${alert.alertType}`}>
            { alert.msg }
        </div>
    ))
Alert.propType = {
    alerts: ProtoTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);