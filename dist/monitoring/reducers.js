'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.monitoring = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
    getMonitoringIsAliveState: 'IDLE',
    isAlive: false

    /**
     * reducers
     *
     * @module reducers
     */

    /**
     * The `monitoring` reducer.
     *
     * It is a reducer function with the fingerprint of `function(state, action)`
     * that handles all actions in relation to monitoring.
     *
     * This reducer can be handed over to the `combineReducers()` function too.
     *
     * @function
     */
};var monitoring = exports.monitoring = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.getMonitoringIsAliveRequest, function (state) {
    return _extends({}, state, { getMonitoringIsAliveState: 'FETCHING' });
}), _defineProperty(_handleActions, _actions.getMonitoringIsAliveResponse, function (state, action) {
    var newState = _extends({}, state, { getMonitoringIsAliveState: 'IDLE' });
    if (action.payload.hasOwnProperty('ok') && action.payload.ok === false || action.payload.hasOwnProperty('error') && action.payload.error === true || action.hasOwnProperty('error') && action.error === true) {
        newState.isAlive = false;
    } else {
        newState.isAlive = true;
    }
    return newState;
}), _handleActions), defaultState);