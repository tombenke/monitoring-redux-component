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
        var result = (0, _reducers.monitoring)(undefined, {});
        (0, _expect2.default)(result).toBeInstanceOf(Object);
        (0, _expect2.default)(result).toHaveProperty('getMonitoringIsAliveState');
        (0, _expect2.default)(result).toHaveProperty('isAlive');
    });

    it('getMonitoringIsAliveRequest should return a "FETCHING" state', function () {
        var result = (0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)());
        (0, _expect2.default)(result).toBeInstanceOf(Object);
        (0, _expect2.default)(result).toHaveProperty('getMonitoringIsAliveState');
        (0, _expect2.default)(result).toHaveProperty('isAlive');
    });

    it('getMonitoringIsAliveResponse OK should return an "IDLE" state with monitoring list', function () {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring', 'OK')
        var expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: true
        };
        var result = (0, _reducers.monitoring)((0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)()), (0, _actions.getMonitoringIsAliveResponse)(_fixtures.responseBodyOk));
        (0, _expect2.default)(result).toBeInstanceOf(Object);
        (0, _expect2.default)(result).toHaveProperty('getMonitoringIsAliveState');
        (0, _expect2.default)(result).toHaveProperty('isAlive');
        (0, _expect2.default)(result).toEqual(expectedState);
    });

    it('getMonitoringIsAliveResponse ERR should return an "IDLE" state with monitoring list', function () {
        //TODO: Use mock data from rest-api specification
        //const responseBody = new Error(getMockResponseBody('GET', '/monitoring', 'Err500'))

        var expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: false
        };
        var result = (0, _reducers.monitoring)((0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)()), (0, _actions.getMonitoringIsAliveResponse)(_fixtures.responseErr500));
        (0, _expect2.default)(result).toBeInstanceOf(Object);
        (0, _expect2.default)(result).toHaveProperty('getMonitoringIsAliveState');
        (0, _expect2.default)(result).toHaveProperty('isAlive');
        (0, _expect2.default)(result).toEqual(expectedState);
    });

    it('no server response should return an "IDLE" and isAlive=false state', function () {
        var expectedState = {
            getMonitoringIsAliveState: 'IDLE',
            isAlive: false
        };
        var result = (0, _reducers.monitoring)((0, _reducers.monitoring)((0, _reducers.monitoring)(undefined, {}), (0, _actions.getMonitoringIsAliveRequest)()), (0, _actions.getMonitoringIsAliveResponse)({ error: true, payload: _fixtures.responseNoServer }));
        (0, _expect2.default)(result).toBeInstanceOf(Object);
        (0, _expect2.default)(result).toHaveProperty('getMonitoringIsAliveState');
        (0, _expect2.default)(result).toHaveProperty('isAlive');
        (0, _expect2.default)(result).toEqual(expectedState);
    });
});