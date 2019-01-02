'use strict';

var _reducers = require('./monitoring/reducers');

var _actions = require('./monitoring/actions');

var _selectors = require('./monitoring/selectors');

module.exports = {
    // reducer
    monitoring: _reducers.monitoring,
    // action
    getMonitoringIsAlive: _actions.getMonitoringIsAlive,
    // selectors
    monitoringIsAliveSelector: _selectors.monitoringIsAliveSelector,
    getMonitoringIsAliveStateSelector: _selectors.getMonitoringIsAliveStateSelector
}; // Monitoring