import { sayHello } from "@monorepo/core";
import { getPosts, Post } from "../data/blog";
import { MainLayout } from "src/components/layout/main-layout";
import Image from "next/image";
import { NextSeo } from "next-seo";

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <>
      <NextSeo
        title="[blog-app] nextjs-monorepo example"
        description="See https://github.com/tundera/monorepo"
      />
      <MainLayout>
        <h3>I'm the SSG blog-app</h3>
        <ul>
          <li>{`Foo says: ${sayHello("World")} from @monorepo/core`}</li>
        </ul>
        <h3>Here's the blog posts</h3>
        <ul>
          {posts.map(({ title, slug }) => (
            <article key={slug} className="prose lg:prose-xl">
              <p>{title}</p>
            </article>
          ))}
        </ul>
        <Image
          src={"/shared-assets/images/nextjs-logo.png"}
          alt={"logo"}
          width={400}
          height={240}
        />
      </MainLayout>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      posts: getPosts(),
    },
  };
}
