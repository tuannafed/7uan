/* eslint-disable no-console */
import chalk from 'chalk'
import { execa } from 'execa'
import inquirer from 'inquirer'
import ora from 'ora'

interface CreateOptions {
  type?: 'react' | 'utils'
}

export async function createHook(name: string, options: CreateOptions) {
  const { type } = options

  // Confirm creation
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `Create new ${type} hook "${name}"?`,
      default: true,
    },
  ])

  if (!confirm) {
    console.log(chalk.yellow('Operation cancelled'))

    return
  }

  const spinner = ora(`Creating ${type} hook "${name}"...`).start()

  try {
    // Run turbo generator
    await execa('pnpm', [
      'turbo',
      'gen',
      type === 'react' ? 'hook' : 'util',
      '--name',
      name,
    ])

    spinner.succeed(chalk.green(`Successfully created ${type} hook "${name}"`))
  } catch (error) {
    spinner.fail(chalk.red(`Failed to create ${type} hook "${name}"`))
    throw error
  }
}
