/**
 * actions
 *
 * @module actions
 */
import { createActions } from 'redux-actions'
import { makeRestCall } from 'redux-rest-call'

/**
 * The getMonitoringIsAlive async action
 *
 * @return {Function} - An async action function, with the following fingerprint: `function(dispatch: function, getState: Function)`
 *
 * @function
 */
export const getMonitoringIsAlive = () => {
    return (dispatch, getState) => {
        if (getState().monitoring.getMonitoringIsAliveState === 'IDLE') {
            return makeRestCall(dispatch)(
                '/monitoring/isAlive',
                {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        Accept: 'application/json'
                    },
                    mode: 'no-cors'
                },
                getMonitoringIsAliveRequest,
                getMonitoringIsAliveResponse
            )
        }
    }
}

export const { getMonitoringIsAliveRequest, getMonitoringIsAliveResponse } = createActions({
    GET_MONITORING_IS_ALIVE_REQUEST: undefined,
    GET_MONITORING_IS_ALIVE_RESPONSE: results => results
})
