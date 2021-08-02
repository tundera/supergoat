import Image from "next/image";
import Link from "next/link";
import { getAllNodes, getMdxPaths, getNode } from "next-mdx/server";

import { Author, Post } from "types";
import { Layout } from "@/components/layout";
import { LayoutGrid } from "@/components/layout-grid";

export interface AuthorPageProps {
  author: Author;
  posts: Post[];
}

export default function AuthorPage({ author, posts }: AuthorPageProps) {
  return (
    <Layout>
      <LayoutGrid>
        <div
          display="grid"
          col="1|250px 1fr"
          gap="10"
          gridColumn="wide-start/wide-end"
        >
          <aside>
            {author.frontMatter.picture && (
              <figure overflow="hidden" borderRadius="lg" display="block">
                <Image
                  src={author.frontMatter.picture}
                  layout="responsive"
                  width={250}
                  height={250}
                />
              </figure>
            )}
          </aside>
          <div>
            <h1 variant="heading.h1">{author.frontMatter.name}</h1>
            {author.frontMatter.bio ? (
              <p variant="text.lead" my="6">
                {author.frontMatter.bio}
              </p>
            ) : null}
          </div>
        </div>
        {posts.length ? (
          <div pt="12" gridColumn="wide-start/wide-end">
            <h3 variant="heading.h6" pb="4" borderBottomWidth="1" mb="4">
              Posts by {author.frontMatter.name}
            </h3>
            <ul>
              {posts.map((post) => (
                <li key={post.slug} mb="2">
                  <Link href={post.url} passHref>
                    <a variant="heading.h4 text.link">
                      {post.frontMatter.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </LayoutGrid>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("author"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const author = await getNode<Author>("author", context);

  if (!author) {
    return {
      notFound: true,
    };
  }

  const posts = await getAllNodes<Post>("post");

  return {
    props: {
      author,
      posts: posts.filter((post) =>
        post.relationships.author.some(({ slug }) => slug === author.slug)
      ),
    },
  };
}
