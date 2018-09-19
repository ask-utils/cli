const {expect, test} = require('@oclif/test')

describe('setup', () => {
  test
  .stdout()
  .command(['setup', '-h'])
  .it('runs help', ctx => {
    expect(ctx.stdout).to.contain('asku setup')
  })

  test
  .stdout()
  .command(['setup', 'sam'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
