import expect from 'expect'
import { getMonitoringIsAliveRequest, getMonitoringIsAliveResponse } from './actions'
import { monitoring } from './reducers'
import { responseBodyOk, responseErr500, responseNoServer } from './fixtures/'

//TODO: Use mock data from rest-api specification
//import restApi from 'monitoring-rest-api'
//const getMockResponseBody = (method, uri, responseName) =>
//    restApi.services.getMockResponseBody(method, restApi.services.getServices()[uri], responseName)

describe('monitoring.reducers', () => {
    it('should return the initial state', () => {
        const result = monitoring(undefined, {})
        expect(result).toBeInstanceOf(Object)
        expect(result).toHaveProperty('getMonitoringIsAliveState')
        expect(result).toHaveProperty('isAlive')
    })

    it('getMonitoringIsAliveRequest should return a "FETCHING" state', () => {
        const result = monitoring(monitoring(undefined, {}), getMonitoringIsAliveRequest())
        expect(result).toBeInstanceOf(Object)
        expect(result).toHaveProperty('getMonitoringIsAliveState')
        expect(result).toHaveProperty('isAlive')
    })

    it('getMonitoringIsAliveResponse OK should return an "IDLE" state with monitoring list', () => {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring', 'OK')
        const expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: true
        }
        const result = monitoring(
            monitoring(monitoring(undefined, {}), getMonitoringIsAliveRequest()),
            getMonitoringIsAliveResponse(responseBodyOk)
        )
        expect(result).toBeInstanceOf(Object)
        expect(result).toHaveProperty('getMonitoringIsAliveState')
        expect(result).toHaveProperty('isAlive')
        expect(result).toEqual(expectedState)
    })

    it('getMonitoringIsAliveResponse ERR should return an "IDLE" state with monitoring list', () => {
        //TODO: Use mock data from rest-api specification
        //const responseBody = new Error(getMockResponseBody('GET', '/monitoring', 'Err500'))

        const expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: false
        }
        const result = monitoring(
            monitoring(monitoring(undefined, {}), getMonitoringIsAliveRequest()),
            getMonitoringIsAliveResponse(responseErr500)
        )
        expect(result).toBeInstanceOf(Object)
        expect(result).toHaveProperty('getMonitoringIsAliveState')
        expect(result).toHaveProperty('isAlive')
        expect(result).toEqual(expectedState)
    })

    it('no server response should return an "IDLE" and isAlive=false state', () => {
        const expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: false
        }
        const result = monitoring(
            monitoring(monitoring(undefined, {}), getMonitoringIsAliveRequest()),
            getMonitoringIsAliveResponse({ error: true, payload: responseNoServer })
        )
        expect(result).toBeInstanceOf(Object)
        expect(result).toHaveProperty('getMonitoringIsAliveState')
        expect(result).toHaveProperty('isAlive')
        expect(result).toEqual(expectedState)
    })
})
