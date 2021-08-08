import fs from 'fs/promises'
import path from 'path'
import RSS from 'rss'
import matter from 'gray-matter'

async function generateRss() {
  const feed = new RSS({
    title: 'Blitz App',
    site_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    feed_url: `${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`,
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'content', 'blog'))

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'content', 'blog', name))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      })
    }),
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

const main = async () => {
  console.log('Generating RSS feed 🚀')
  await generateRss()
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    console.log('RSS feed written to `public/feed.xml`')
    process.exit(0)
  })
