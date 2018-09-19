ask-utils-cli
=============

Utilify CLI tool for ASK CLI &amp; ask-sdk

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ask-utils-cli.svg)](https://npmjs.org/package/ask-utils-cli)
[![CircleCI](https://circleci.com/gh/hideokamoto/ask-utils-cli/tree/master.svg?style=shield)](https://circleci.com/gh/hideokamoto/ask-utils-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/ask-utils-cli.svg)](https://npmjs.org/package/ask-utils-cli)
[![License](https://img.shields.io/npm/l/ask-utils-cli.svg)](https://github.com/hideokamoto/ask-utils-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ask-utils-cli
$ asku COMMAND
running command...
$ asku (-v|--version|version)
ask-utils-cli/0.0.0 darwin-x64 node-v10.1.0
$ asku --help [COMMAND]
USAGE
  $ asku COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`asku hello`](#asku-hello)
* [`asku help [COMMAND]`](#asku-help-command)
* [`asku setup`](#asku-setup)

## `asku hello`

Describe the command here

```
USAGE
  $ asku hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/hideokamoto/ask-utils-cli/blob/v0.0.0/src/commands/hello.js)_

## `asku help [COMMAND]`

display help for asku

```
USAGE
  $ asku help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.0/src/commands/help.ts)_

## `asku setup`

Describe the command here

```
USAGE
  $ asku setup

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/setup.js](https://github.com/hideokamoto/ask-utils-cli/blob/v0.0.0/src/commands/setup.js)_
<!-- commandsstop -->
