#!/usr/bin/env node

import favicons from 'favicons'
import fs from 'fs'
import path from 'path'
import siteConfig from 'site-config'

const generateFavicons = () => {
  return new Promise<void>((resolve, reject) => {
    favicons(
      path.resolve(process.cwd(), 'public/images', 'tundera-logo.png'),
      {
        path: '/favicons',
        appName: siteConfig.title,
        appShortName: siteConfig.title,
        appDescription: siteConfig.description,
        developerName: siteConfig.title,
        developerURL: siteConfig.url,
        background: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: false,
          windows: true,
          yandex: false,
        },
        logging: true,
      },
      async (error, { files, images }) => {
        if (error) {
          return reject(error)
        }

        await Promise.all(
          [...images, ...files].map(({ name, contents }) => {
            fs.writeFile(path.resolve(process.cwd(), 'public/favicons', name), contents, reject)
          }),
        )

        return resolve()
      },
    )
  })
}

const main = async () => {
  await generateFavicons()
}

main().finally(() => {
  console.log('Successfully generated favicons ✅')
})
