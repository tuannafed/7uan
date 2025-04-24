import type { PlopTypes } from '@turbo/gen'
import { format } from 'date-fns'
import path from 'path'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const usehooksSrcPath = path.resolve('packages/react-hooks/src')
  const utilsSrcPath = path.resolve('packages/utils/src')

  // Hook generator
  plop.setGenerator('hook', {
    description: 'Create a post',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'post name please (eg: "use test")',
      },
    ],
    actions: [
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: 'templates/hook/hook.ts.hbs',
      },
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.test.ts',
        templateFile: 'templates/hook/hook.test.ts.hbs',
      },
      {
        data: {
          date: format(new Date(), 'yyyy-MM-dd'),
        },
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.md',
        templateFile: 'templates/hook/hook.mdx.hbs',
      },
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/{{camelCase name}}.demo.tsx',
        templateFile: 'templates/hook/hook.demo.tsx.hbs',
      },
      {
        type: 'add',
        path: usehooksSrcPath + '/{{camelCase name}}/index.ts',
        templateFile: 'templates/hook/index.ts.hbs',
      },
      {
        type: 'append',
        path: usehooksSrcPath + '/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
    ],
  })

  // Utility generator
  plop.setGenerator('util', {
    description: 'Create a utility function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Utility function name please (eg: "convertToCamelCase")',
      },
    ],
    actions: [
      {
        type: 'add',
        path: utilsSrcPath + '/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: 'templates/util/util.ts.hbs', // Template for the utility file
      },
      {
        type: 'add',
        path: utilsSrcPath + '/{{camelCase name}}/{{camelCase name}}.test.ts',
        templateFile: 'templates/util/util.test.ts.hbs', // Template for the test file
      },
      {
        data: {
          date: format(new Date(), 'yyyy-MM-dd'),
        },
        type: 'add',
        path: utilsSrcPath + '/{{camelCase name}}/{{camelCase name}}.md',
        templateFile: 'templates/util/util.mdx.hbs', // Template for the documentation file
      },
      {
        type: 'add',
        path: utilsSrcPath + '/{{camelCase name}}/index.ts',
        templateFile: 'templates/util/index.ts.hbs', // Template for the index file
      },
      {
        type: 'append',
        path: utilsSrcPath + '/index.ts',
        templateFile: 'templates/index.ts.hbs', // Template for updating the global utilities index
      },
    ],
  })
}
