'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _actions = require('./actions');

var _reducers = require('./reducers');

var _fixtures = require('./fixtures/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: Use mock data from rest-api specification
//import restApi from 'monitoring-rest-api'
//const getMockResponseBody = (method, uri, responseName) =>
//    restApi.services.getMockResponseBody(method, restApi.services.getServices()[uri], responseName)

describe('monitoring.reducers', function () {
    it('should return the initial state', function () {
        (0, _expect2.default)((0, _reducers.monitoring)(undefined, {})).toBeA('object').toIncludeKeys(['getMonitoringIsAliveState', 'isAlive']);
    });

    it('getMonitoringIsAliveRequest should return a "FETCHING" state', function () {
        (0, _expect2.default)((0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)())).toBeA('object').toIncludeKeys(['getMonitoringIsAliveState', 'isAlive']);
    });

    it('getMonitoringIsAliveResponse OK should return an "IDLE" state with monitoring list', function () {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring', 'OK')
        var expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: true
        };
        (0, _expect2.default)((0, _reducers.monitoring)((0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)()), (0, _actions.getMonitoringIsAliveResponse)(_fixtures.responseBodyOk))).toBeA('object').toIncludeKeys(['getMonitoringIsAliveState', 'isAlive']).toEqual(expectedState);
    });

    it('getMonitoringIsAliveResponse ERR should return an "IDLE" state with monitoring list', function () {
        //TODO: Use mock data from rest-api specification
        //const responseBody = new Error(getMockResponseBody('GET', '/monitoring', 'Err500'))

        var expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: false
        };
        (0, _expect2.default)((0, _reducers.monitoring)((0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)()), (0, _actions.getMonitoringIsAliveResponse)(_fixtures.responseErr500))).toBeA('object').toIncludeKeys(['getMonitoringIsAliveState', 'isAlive']).toEqual(expectedState);
    });

    it('no server response should return an "IDLE" and isAlive=false state', function () {
        var expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: false
        };
        (0, _expect2.default)((0, _reducers.monitoring)((0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)()), (0, _actions.getMonitoringIsAliveResponse)({ error: true, payload: _fixtures.responseNoServer }))).toBeA('object').toIncludeKeys(['getMonitoringIsAliveState', 'isAlive']).toEqual(expectedState);
    });
});