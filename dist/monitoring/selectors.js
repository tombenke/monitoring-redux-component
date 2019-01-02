"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * selector functions
 *
 * @module selectors
 */

/**
 * Tells if the server is alive
 *
 * @arg {Object} state - The redux state object
 *
 * @return {Boolean} - `true` if the server is alive, `false` otherwise.
 *
 * @function
 */
var monitoringIsAliveSelector = exports.monitoringIsAliveSelector = function monitoringIsAliveSelector(state) {
  return state.monitoring.isAlive;
};

/**
 * The request status of `GET /monitoring/isAlive` REST call
 *
 * @arg {Object} state - The redux state object
 *
 * @return {STRING} - `PENDING` if there is an actual ongoing request, `IDLE` otherwise.
 *
 * @function
 */
var getMonitoringIsAliveStateSelector = exports.getMonitoringIsAliveStateSelector = function getMonitoringIsAliveStateSelector(state) {
  return state.monitoring.getMonitoringIsAliveState;
};