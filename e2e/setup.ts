import { cleanup, init } from 'detox'
import adapter from 'detox/runners/jest/adapter'

const config = require('../package.json').detox

jest.setTimeout(120000)

// NOTE(mw): not sure why this doesn't work even though we have @types/jasmine
/* eslint-disable no-undef */
jasmine.getEnv().addReporter(adapter)

beforeAll(async (): Promise<void> => {
  await init(config, { initGlobals: false })
})

beforeEach(async (): Promise<void> => {
  await adapter.beforeEach()
})

afterAll(async (): Promise<void> => {
  await adapter.afterAll()
  await cleanup()
})
