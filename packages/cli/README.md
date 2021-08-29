# cli

Monorepo CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/tundera/cli/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g cli
$ monorepo COMMAND
running command...
$ monorepo (-v|--version|version)
cli/0.1.0 darwin-x64 node-v14.16.0
$ monorepo --help [COMMAND]
USAGE
  $ monorepo COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`monorepo hello [FILE]`](#monorepo-hello-file)
- [`monorepo help [COMMAND]`](#monorepo-help-command)

## `monorepo hello [FILE]`

describe the command here

```
USAGE
  $ monorepo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ monorepo hello
  hello world from ./src/hello.ts!
```

_See code:
[src/commands/hello.ts](https://github.com/tundera/cli/blob/v0.1.0/src/commands/hello.ts)_

## `monorepo help [COMMAND]`

display help for monorepo

```
USAGE
  $ monorepo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code:
[@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
