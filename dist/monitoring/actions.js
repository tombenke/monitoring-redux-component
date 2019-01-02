'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMonitoringIsAliveResponse = exports.getMonitoringIsAliveRequest = exports.getMonitoringIsAlive = undefined;

var _reduxActions = require('redux-actions');

var _reduxRestCall = require('redux-rest-call');

/**
 * The getMonitoringIsAlive async action
 *
 * @return {Function} - An async action function, with the following fingerprint: `function(dispatch: function, getState: Function)`
 *
 * @function
 */
/**
 * actions
 *
 * @module actions
 */
var getMonitoringIsAlive = exports.getMonitoringIsAlive = function getMonitoringIsAlive() {
    return function (dispatch, getState) {
        if (getState().monitoring.getMonitoringIsAliveState === 'IDLE') {
            return (0, _reduxRestCall.makeRestCall)(dispatch)('/monitoring/isAlive', {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    Accept: 'application/json'
                },
                mode: 'no-cors'
            }, getMonitoringIsAliveRequest, getMonitoringIsAliveResponse);
        }
    };
};

var _createActions = (0, _reduxActions.createActions)({
    GET_MONITORING_IS_ALIVE_REQUEST: undefined,
    GET_MONITORING_IS_ALIVE_RESPONSE: function GET_MONITORING_IS_ALIVE_RESPONSE(results) {
        return results;
    }
});

var getMonitoringIsAliveRequest = _createActions.getMonitoringIsAliveRequest,
    getMonitoringIsAliveResponse = _createActions.getMonitoringIsAliveResponse;
exports.getMonitoringIsAliveRequest = getMonitoringIsAliveRequest;
exports.getMonitoringIsAliveResponse = getMonitoringIsAliveResponse;