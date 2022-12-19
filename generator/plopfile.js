/* eslint-disable @typescript-eslint/no-var-requires */
const fuzzypathPrompt = require('inquirer-fuzzy-path')
const { startCase } = require('lodash')

const svg = require('./svg')

module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setPrompt('fuzzypath', fuzzypathPrompt)

  plop.setHelper('hookify', (value) => {
    return `use${startCase(value).replace(' ', '')}`
  })

  plop.setGenerator('svg', svg)
}
