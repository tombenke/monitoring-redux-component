'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responseNoServer = exports.responseErr500 = exports.responseBodyOk = exports.defaultState = undefined;

var _datafile = require('datafile');

var defaultState = exports.defaultState = (0, _datafile.loadJsonFileSync)(__dirname + '/stateDefault.yml');
var responseBodyOk = exports.responseBodyOk = (0, _datafile.loadJsonFileSync)(__dirname + '/responseBodyOk.yml');
var responseErr500 = exports.responseErr500 = (0, _datafile.loadJsonFileSync)(__dirname + '/responseErr500.yml');
var responseNoServer = exports.responseNoServer = new TypeError("TypeError: The server response is not JSON!");