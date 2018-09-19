const {Command, flags} = require('@oclif/command')

class SetupCommand extends Command {
  async run() {
    const {flags} = this.parse(SetupCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/dc_hideokamoto/develop/cli/ask-utils-cli/src/commands/setup.js`)
  }
}

SetupCommand.description = `Describe the command here
...
Extra documentation goes here
`

SetupCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}
SetupCommand.args = [
  {
    name: 'type',
    required: true,
    description: 'lint, sam, serverless, test',
  },
]

module.exports = SetupCommand
