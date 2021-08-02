import { FC } from "react";
import { Post } from "types";

import Link from "next/link";

interface Props {
  posts: Post[];
}

export const Posts: FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.url}>
          <Link href={post.url}>
            <a>
              <h2>{post.frontMatter.title}</h2>
            </a>
          </Link>
          <p>{post.frontMatter.date}</p>
          <p>{post.frontMatter.excerpt}</p>
        </li>
      ))}
    </ul>
  );
};
