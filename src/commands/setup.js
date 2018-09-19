const {Command, flags} = require('@oclif/command')
const {execFile} = require('child_process')
const fs = require('fs')

const npmInstall = (commands, self) => new Promise((resolve, reject) => {
  execFile('npm', commands, (error, stdout, stderr) => {
    self.log(stderr)
    if (error) {
      self.log(error)
      return reject(error)
    }
    self.log(stdout)
    return resolve(true)
  })
})
const createNpmInstallCommands = (packages, type = 'dev') => {
  switch (type) {
  case 'prod':
  case 'production': {
    const prodCommands = ['i', '-S']
    Array.prototype.push.apply(prodCommands, packages)
    return prodCommands
  }
  default: {
    const devCommands = ['i', '-D']
    Array.prototype.push.apply(devCommands, packages)
    return devCommands
  }
  }
}
const defaultPath = './lambda/custom'

class SetupCommand extends Command {
  async createSamTemplate() {

  }

  async createServerlessYaml() {

  }

  async installLintPackages() {
    this.log('Installing lint packages by npm')
    const packages = ['eslint']
    const commands = createNpmInstallCommands(packages, 'dev')
    try {
      process.chdir(this.path)
    } catch (e) {
      this.log(e)
      this.exit(1)
    }
    try {
      await npmInstall(commands, this)
    } catch (e) {
      this.log(e)
    }
    this.log('Installed lint packages.')
  }

  async updatePackageJsonForLint() {
    let content
    const path = `${this.path}/package.json`
    try {
      content = fs.readFileSync(path, 'utf8')
    } catch (e) {
      if (e.code !== 'ENOENT') {
        this.log(e)
        this.exit(1)
        return
      }
    }
    const pkg = JSON.parse(content)
    if (pkg.scripts.lint) {
      this.log('[Skip] lint command is already defined.')
    }
    pkg.scripts.lint = './node_modules/.bin/eslint *.js'
    try {
      fs.writeFileSync(path, JSON.stringify(pkg, null, '\t'))
    } catch (e) {
      this.log(e)
      this.exit(1)
    }
  }

  async createEslintIgnore() {
    this.log('Add ESLint ignore file.')
    let content = ''
    const path = `${this.path}/.eslintignore`
    try {
      content = fs.readFileSync(path, 'utf8')
      if (/webpack.config.js/g.test(content)) return
    } catch (e) {
      if (e.code !== 'ENOENT') {
        this.log(e)
        this.exit(1)
        return
      }
    }
    content += '\nwebpack.config.js'
    try {
      fs.writeFileSync(path, content)
    } catch (e) {
      this.log(e)
      this.exit(1)
    }
    this.log('ESLint ignore file created.')
  }

  async run() {
    const {args, flags} = this.parse(SetupCommand)
    this.path = flags.path || defaultPath
    switch (args.type) {
    case 'lint': {
      await this.installLintPackages()
      await this.updatePackageJsonForLint()
      await this.createEslintIgnore()
    }
    }
  }
}

SetupCommand.description = `Describe the command here
...
Extra documentation goes here
`

SetupCommand.flags = {
  help: flags.help({char: 'h'}),
  path: flags.string({char: 'p', description: 'working dirctory path'}),
}
SetupCommand.args = [
  {
    name: 'type',
    required: true,
    description: 'lint, sam, serverless, test',
  },
]

module.exports = SetupCommand
