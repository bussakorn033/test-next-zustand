/**
 * @jest-environment node
 */
const screenshotTest = require('../../shared/utils/screenshotTest')

const setup = {
  'components-icon': [
    'vector-56',
    'general-36',
    'general-36-hero',
    'general-36-error',
    'general-36-success',
    'general-24',
    'general-24-solid',
    'general-16'
  ]
}

screenshotTest(setup)
export {}
