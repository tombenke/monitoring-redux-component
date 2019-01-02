import { loadJsonFileSync } from 'datafile'

export const defaultState = loadJsonFileSync(__dirname + '/stateDefault.yml')
export const responseBodyOk = loadJsonFileSync(__dirname + '/responseBodyOk.yml')
export const responseErr500 = loadJsonFileSync(__dirname + '/responseErr500.yml')
