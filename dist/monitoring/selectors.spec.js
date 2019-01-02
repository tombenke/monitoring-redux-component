'use strict';

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _fixtures = require('./fixtures/');

var _selectors = require('./selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('monitoring.selectors', function () {
    it('monitoringIsAlive', function () {
        (0, _expect2.default)((0, _selectors.monitoringIsAliveSelector)(_fixtures.defaultState)).toEqual(_fixtures.defaultState.monitoring.isAlive);
    });

    it('getMonitoringIsAliveStateSelector', function () {
        (0, _expect2.default)((0, _selectors.getMonitoringIsAliveStateSelector)(_fixtures.defaultState)).toEqual('IDLE');
    });
});