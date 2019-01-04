'use strict';

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _fixtures = require('./fixtures/');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var origin = 'http://localhost';
var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);


//TODO: Use mock data from rest-api specification
//import restApi from 'sensorvis-rest-api'
//const getMockResponseBody = (method, uri, responseName) =>
//    restApi.services.getMockResponseBody(method, restApi.services.getServices()[uri], responseName)

describe('monitoring.actions', function () {
    afterEach(function () {
        _nock2.default.cleanAll();
    });

    it('nothing should happen if getMonitoringIsAliveState is PENDING', function () {
        var expectedActions = [];
        var store = mockStore({ monitoring: { getMonitoringIsAliveState: 'PENDING' } });

        return store.dispatch(actions.getMonitoringIsAlive()).then(function () {
            (0, _expect2.default)(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a getMonitoringIsAlive async action with handling RESPONSE OK', function () {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring/isAlive', 'OK')

        var monitoringServer = (0, _nock2.default)(origin).get('/monitoring/isAlive').reply(200, _fixtures.responseBodyOk);

        var expectedActions = [{ type: 'GET_MONITORING_IS_ALIVE_REQUEST' }, { type: 'GET_MONITORING_IS_ALIVE_RESPONSE', payload: _fixtures.responseBodyOk }];
        var store = mockStore({ monitoring: { getMonitoringIsAliveState: 'IDLE' } });

        return store.dispatch(actions.getMonitoringIsAlive()).then(function () {
            (0, _expect2.default)(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a getMonitoringIsAlive async action with handling RESPONSE ERR', function () {
        //TODO: Use mock data from rest-api specification
        //const responseBody = getMockResponseBody('GET', '/monitoring/isAlive', 'Err500')

        var monitoringServer = (0, _nock2.default)(origin).get('/monitoring/isAlive').reply(500, _fixtures.responseErr500);

        var expectedActions = [{ type: 'GET_MONITORING_IS_ALIVE_REQUEST' }, { type: 'GET_MONITORING_IS_ALIVE_RESPONSE', payload: _fixtures.responseErr500 }];
        var store = mockStore({ monitoring: { getMonitoringIsAliveState: 'IDLE' } });

        return store.dispatch(actions.getMonitoringIsAlive()).then(function () {
            (0, _expect2.default)(store.getActions()).toEqual(expectedActions);
        });
    });

    it('there is no server response', function () {

        var expectedActions = [{ type: 'GET_MONITORING_IS_ALIVE_REQUEST' }, { type: 'GET_MONITORING_IS_ALIVE_RESPONSE', error: true, payload: _fixtures.responseNoServer }];
        var store = mockStore({ monitoring: { getMonitoringIsAliveState: 'IDLE' } });

        return store.dispatch(actions.getMonitoringIsAlive()).then(function () {
            (0, _expect2.default)(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create an GET_MONITORING_IS_ALIVE_REQUEST action', function () {
        var expectedAction = {
            type: 'GET_MONITORING_IS_ALIVE_REQUEST'
        };
        (0, _expect2.default)(actions.getMonitoringIsAliveRequest()).toEqual(expectedAction);
    });

    it('should create an GET_MONITORING_IS_ALIVE_RESPONSE OK action', function () {
        var expectedAction = {
            type: 'GET_MONITORING_IS_ALIVE_RESPONSE',
            payload: {}
        };
        (0, _expect2.default)(actions.getMonitoringIsAliveResponse({})).toEqual(expectedAction);
    });

    it('should create an GET_MONITORING_IS_ALIVE_RESPONSE ERR action', function () {
        var expectedAction = {
            type: 'GET_MONITORING_IS_ALIVE_RESPONSE',
            error: true,
            payload: new Error({})
        };
        (0, _expect2.default)(actions.getMonitoringIsAliveResponse(new Error({}))).toEqual(expectedAction);
    });
});