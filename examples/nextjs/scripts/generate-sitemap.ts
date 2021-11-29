#!/usr/bin/env node

import fs from 'fs'
import globby from 'globby'
import prettier from 'prettier'

const generateSiteMap = async () => {
  const prettierConfig = await prettier.resolveConfig('../prettier.config')
  const pages = await globby([
    '**/pages/*.tsx',
    'content/**/*.mdx',
    '!content/*.mdx',
    '!**/pages/_*.tsx',
    '!**/api',
    '!**/pages/404.tsx',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('content', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                const route = path === '/index' ? '' : path
                return `
                        <url>
                            <loc>${`https://${process.env.NEXT_PUBLIC_BASE_URL}${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}

const main = async () => {
  console.log('Generating sitemap 🚀')
  await generateSiteMap()
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    console.log('Sitemap written to `public/sitemap.xml`')
    process.exit(0)
  })
