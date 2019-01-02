// Monitoring
import { monitoring } from './monitoring/reducers'
import { getMonitoringIsAlive } from './monitoring/actions'
import { monitoringIsAliveSelector, getMonitoringIsAliveStateSelector } from './monitoring/selectors'

module.exports = {
    // reducer
    monitoring,
    // action
    getMonitoringIsAlive,
    // selectors
    monitoringIsAliveSelector,
    getMonitoringIsAliveStateSelector
}
