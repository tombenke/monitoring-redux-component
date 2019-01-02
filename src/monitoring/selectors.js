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
export const monitoringIsAliveSelector = state => state.monitoring.isAlive

/**
 * The request status of `GET /monitoring/isAlive` REST call
 *
 * @arg {Object} state - The redux state object
 *
 * @return {STRING} - `PENDING` if there is an actual ongoing request, `IDLE` otherwise.
 *
 * @function
 */
export const getMonitoringIsAliveStateSelector = state => state.monitoring.getMonitoringIsAliveState
