const { kebabCase } = require('lodash')

/** @type {import('plop').PlopGenerator} */
module.exports = {
  description: '🖼️ SVG',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'SVG name:',
      description: 'e.g. "keiko-test.svg"'
    },
    {
      type: 'editor',
      name: 'svg',
      message: 'Copy the desired SVG code'
    }
  ],
  actions: ({ name }) => {
    return [
      {
        type: 'add',
        path: '../src/svg/{{kebabCase name}}.svg',
        template: '{{{svg}}}'
      },
      {
        type: 'modify',
        path: '../src/svg/SvgList.tsx',
        transform: (content) => {
          const lines = content.split('\n')
          const start = lines.findIndex((line) => line.includes('export const svgs = {'))
          const end = lines.findIndex((line) => line.includes('}'), start)

          const sorted = lines
            .slice(start + 1, end)
            .concat(`  ['${kebabCase(name)}']: require('./svgs/${kebabCase(name)}.svg'),`)
            .sort()

          lines.splice(start + 1, end - start - 1, ...sorted)

          return lines.join('\n')
        }
      }
    ]
  }
}
