import expect from 'expect'
import { getMonitoringIsAliveRequest, getMonitoringIsAliveResponse } from './actions'
import { monitoring } from './reducers'
import { responseBodyOk, responseErr500 } from './fixtures/'

//TODO: Use mock data from rest-api specification
//import restApi from 'monitoring-rest-api'
//const getMockResponseBody = (method, uri, responseName) =>
//    restApi.services.getMockResponseBody(method, restApi.services.getServices()[uri], responseName)

describe('monitoring.reducers', () => {
    it('should return the initial state', () => {
        expect(monitoring(undefined, {}))
            .toBeA('object')
            .toIncludeKeys(['getMonitoringIsAliveState', 'isAlive'])
    })

    it('getMonitoringIsAliveRequest should return a "FETCHING" state', () => {
        expect(monitoring(monitoring(undefined, {}), getMonitoringIsAliveRequest()))
            .toBeA('object')
            .toIncludeKeys(['getMonitoringIsAliveState', 'isAlive'])
    })

    it('getMonitoringIsAliveResponse OK should return an "IDLE" state with monitoring list', () => {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring', 'OK')
        const expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: true
        }
        expect(
            monitoring(
                monitoring(monitoring(undefined, {}), getMonitoringIsAliveRequest()),
                getMonitoringIsAliveResponse(responseBodyOk)
            )
        )
            .toBeA('object')
            .toIncludeKeys(['getMonitoringIsAliveState', 'isAlive'])
            .toEqual(expectedState)
    })

    it('getMonitoringIsAliveResponse ERR should return an "IDLE" state with monitoring list', () => {
        //TODO: Use mock data from rest-api specification
        //const responseBody = new Error(getMockResponseBody('GET', '/monitoring', 'Err500'))

        const expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: false
        }
        expect(
            monitoring(
                monitoring(monitoring(undefined, {}), getMonitoringIsAliveRequest()),
                getMonitoringIsAliveResponse(responseErr500)
            )
        )
            .toBeA('object')
            .toIncludeKeys(['getMonitoringIsAliveState', 'isAlive'])
            .toEqual(expectedState)
    })
})
