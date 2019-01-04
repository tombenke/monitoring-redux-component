import babelPolyfill from 'babel-polyfill'
import nock from 'nock'
import fetch from 'isomorphic-fetch'
import expect from 'expect'
import * as actions from './actions'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const origin = 'http://localhost'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
import { responseBodyOk, responseErr500, responseNoServer } from './fixtures/'

//TODO: Use mock data from rest-api specification
//import restApi from 'sensorvis-rest-api'
//const getMockResponseBody = (method, uri, responseName) =>
//    restApi.services.getMockResponseBody(method, restApi.services.getServices()[uri], responseName)

describe('monitoring.actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('nothing should happen if getMonitoringIsAliveState is PENDING', () => {
        const expectedActions = []
        const store = mockStore({ monitoring: { getMonitoringIsAliveState: 'PENDING' } })

        return store.dispatch(actions.getMonitoringIsAlive()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('should create a getMonitoringIsAlive async action with handling RESPONSE OK', () => {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring/isAlive', 'OK')

        var monitoringServer = nock(origin)
            .get('/monitoring/isAlive')
            .reply(200, responseBodyOk)

        const expectedActions = [
            { type: 'GET_MONITORING_IS_ALIVE_REQUEST' },
            { type: 'GET_MONITORING_IS_ALIVE_RESPONSE', payload: responseBodyOk }
        ]
        const store = mockStore({ monitoring: { getMonitoringIsAliveState: 'IDLE' } })

        return store.dispatch(actions.getMonitoringIsAlive()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('should create a getMonitoringIsAlive async action with handling RESPONSE ERR', () => {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring/isAlive', 'Err500')

        var monitoringServer = nock(origin)
            .get('/monitoring/isAlive')
            .reply(500, responseErr500)

        const expectedActions = [
            { type: 'GET_MONITORING_IS_ALIVE_REQUEST' },
            { type: 'GET_MONITORING_IS_ALIVE_RESPONSE', payload: responseErr500 }
        ]
        const store = mockStore({ monitoring: { getMonitoringIsAliveState: 'IDLE' } })

        return store.dispatch(actions.getMonitoringIsAlive()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('there is no server response', () => {
        const expectedActions = [
            { type: 'GET_MONITORING_IS_ALIVE_REQUEST' },
            { type: 'GET_MONITORING_IS_ALIVE_RESPONSE', error: true, payload: responseNoServer }
        ]
        const store = mockStore({ monitoring: { getMonitoringIsAliveState: 'IDLE' } })

        return store.dispatch(actions.getMonitoringIsAlive()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('should create an GET_MONITORING_IS_ALIVE_REQUEST action', () => {
        const expectedAction = {
            type: 'GET_MONITORING_IS_ALIVE_REQUEST'
        }
        expect(actions.getMonitoringIsAliveRequest()).toEqual(expectedAction)
    })

    it('should create an GET_MONITORING_IS_ALIVE_RESPONSE OK action', () => {
        const expectedAction = {
            type: 'GET_MONITORING_IS_ALIVE_RESPONSE',
            payload: {}
        }
        expect(actions.getMonitoringIsAliveResponse({})).toEqual(expectedAction)
    })

    it('should create an GET_MONITORING_IS_ALIVE_RESPONSE ERR action', () => {
        const expectedAction = {
            type: 'GET_MONITORING_IS_ALIVE_RESPONSE',
            error: true,
            payload: new Error({})
        }
        expect(actions.getMonitoringIsAliveResponse(new Error({}))).toEqual(expectedAction)
    })
})
