import * as _ from 'lodash'
import expect from 'expect'
import { defaultState } from './fixtures/'
import { monitoringIsAliveSelector, getMonitoringIsAliveStateSelector } from './selectors'

describe('monitoring.selectors', () => {
    it('monitoringIsAlive', () => {
        expect(monitoringIsAliveSelector(defaultState)).toEqual(defaultState.monitoring.isAlive)
    })

    it('getMonitoringIsAliveStateSelector', () => {
        expect(getMonitoringIsAliveStateSelector(defaultState)).toEqual('IDLE')
    })
})
