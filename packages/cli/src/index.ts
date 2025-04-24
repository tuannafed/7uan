/* eslint-disable no-console */
import chalk from 'chalk'
import { Command } from 'commander'

import { createHook } from './commands/create.js'

export function cli(args: string[]) {
  const program = new Command()

  program.name('7uan').description('CLI tools for 7uan').version('1.0.0')

  program
    .command('create')
    .description('Create a new hook')
    .argument('<name>', 'Name of the hook')
    .option('-t, --type <type>', 'Type of the hook (react|utils)', 'react')
    .action(async (name, options) => {
      try {
        await createHook(name, options)
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(chalk.red(`Error: ${error.message}`))
        } else {
          console.error(chalk.red('An unknown error occurred'))
        }

        process.exit(1)
      }
    })

  program.parse(args)
}
