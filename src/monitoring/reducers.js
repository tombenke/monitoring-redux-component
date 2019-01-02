import { handleActions } from 'redux-actions'
import { getMonitoringIsAliveRequest, getMonitoringIsAliveResponse } from './actions'

const defaultState = {
    getMonitoringIsAliveState: 'IDLE',
    isAlive: {}
}

/**
 * reducers
 *
 * @module reducers
 */

/**
 * The monitoring reducer
 */
export const monitoring = handleActions(
    {
        [getMonitoringIsAliveRequest]: state => ({ ...state, getMonitoringIsAliveState: 'FETCHING' }),
        [getMonitoringIsAliveResponse]: (state, action) => {
            let newState = { ...state, getMonitoringIsAliveState: 'IDLE' }
            if (action.payload.hasOwnProperty('ok') && action.payload.ok === false) {
                newState.isAlive = false
            } else {
                newState.isAlive = true
            }
            return newState
        }
    },
    defaultState
)
