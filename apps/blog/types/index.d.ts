import { MdxNode } from 'next-mdx'

interface Post
  extends MdxNode<{
    title: string
    date?: string
    excerpt?: string
    featured?: boolean
    image?: string
    caption?: string
  }> {
  readingTime?: {
    text: string
    time: number
    words: number
    minutes: number
  }
  relationships: {
    author: Author[]
    category: Category[]
  }
}

type Page = MdxNode<{
  title: string
  excerpt?: string
}>

type Author = MdxNode<{
  name: string
  bio?: string
  picture?: string
}>

type Category = MdxNode<{
  name: string
  excerpt?: string
}>
