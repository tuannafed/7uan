/* eslint-disable no-console */
import chalk from 'chalk'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

interface CreateNextOptions {
  typescript: boolean
  eslint: boolean
  prettier: boolean
  srcDir: boolean
  template: string
}

function copyDirectory(src: string, dest: string) {
  // Create destination directory
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  // Read directory contents
  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    // Skip node_modules and .git directories
    if (entry.name === 'node_modules' || entry.name === '.git') {
      continue
    }

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

export async function createNextTemplate(
  name: string,
  options: CreateNextOptions
): Promise<void> {
  console.log(chalk.blue(`Creating new Next.js project: ${name}`))

  const templatePath = path.join(process.cwd(), `apps/${options.template}`)
  const targetPath = path.join(process.cwd(), name)

  try {
    // Check if template exists
    if (!fs.existsSync(templatePath)) {
      throw new Error(
        `Template directory not found in apps/${options.template}`
      )
    }

    // Copy template to target directory
    copyDirectory(templatePath, targetPath)

    // Update package.json with new project name
    const packageJsonPath = path.join(targetPath, 'package.json')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    packageJson.name = name
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

    // Install dependencies
    console.log(chalk.blue('\nInstalling dependencies...'))
    execSync('npm install', {
      cwd: targetPath,
      stdio: 'inherit',
    })

    // If Prettier is enabled, update VSCode settings
    if (options.prettier) {
      const vscodeDir = path.join(targetPath, '.vscode')
      if (!fs.existsSync(vscodeDir)) {
        fs.mkdirSync(vscodeDir)
      }

      const vscodeSetting = {
        'editor.formatOnSave': true,
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
        '[typescript]': {
          'editor.defaultFormatter': 'esbenp.prettier-vscode',
        },
        '[typescriptreact]': {
          'editor.defaultFormatter': 'esbenp.prettier-vscode',
        },
        'editor.codeActionsOnSave': {
          'source.fixAll.eslint': 'explicit',
        },
      }

      fs.writeFileSync(
        path.join(vscodeDir, 'settings.json'),
        JSON.stringify(vscodeSetting, null, 2)
      )
    }

    console.log(chalk.green(`\nSuccess! Created ${name} at ${targetPath}`))
    console.log('\nInside that directory, you can run several commands:')
    console.log(
      chalk.cyan('\n  npm run dev\n') +
        '    Starts the development server.\n' +
        chalk.cyan('\n  npm run build\n') +
        '    Builds the app for production.\n' +
        chalk.cyan('\n  npm start\n') +
        '    Runs the built app in production mode.\n'
    )
    console.log('We suggest that you begin by typing:')
    console.log(chalk.cyan('\n  cd'), name)
    console.log(chalk.cyan('  npm run dev\n'))
  } catch (error) {
    console.error(chalk.red('Failed to create Next.js project'))
    throw error
  }
}
