#!/usr/bin/env node

// Inspired by:
// <https://github.com/saojs/sao/issues/50>
// <https://github.com/nuxt-community/create-nuxt-app/blob/master/packages/create-nuxt-app/package.json>

import path from 'path'
import cac from 'cac'
import sao from 'sao'
import update from 'update-notifier'

import pkg from './package'

const cli = cac()

cli
  .command('<name>', 'Generate a new project')
  .action((name) => {
    const folderName = name
    const targetPath = path.resolve(folderName)
    console.log(`> Generating project in ${targetPath}`)

    const templatePath = path.dirname(require.resolve('./package'))

    return sao({
      template: templatePath,
      targetPath,
    })
  })
  .example('lad my-new-project')

cli.version(pkg.version)
cli.help()
cli.parse()

update({ pkg }).notify()
