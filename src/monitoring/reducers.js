import { handleActions } from 'redux-actions'
import { getMonitoringIsAliveRequest, getMonitoringIsAliveResponse } from './actions'

const defaultState = {
    getMonitoringIsAliveState: 'IDLE',
    isAlive: false
}

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
