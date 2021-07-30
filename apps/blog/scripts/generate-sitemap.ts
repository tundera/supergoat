import { writeFileSync } from "fs";
import globby from "globby";
import { resolveConfig, format } from "prettier";
import { siteUrl } from "src/data/siteMetadata";

const main = async () => {
  const prettierConfig = await resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.js",
    "data/blog/**/*.mdx",
    "data/blog/**/*.md",
    "public/tags/**/*.xml",
    "!pages/_*.js",
    "!pages/api",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages/", "/")
                  .replace("data/blog", "/blog")
                  .replace("public/", "/")
                  .replace(".js", "")
                  .replace(".mdx", "")
                  .replace(".md", "")
                  .replace("/feed.xml", "");
                const route = path === "/index" ? "" : path;
                if (
                  page === `pages/404.js` ||
                  page === `pages/blog/[...slug].js`
                ) {
                  return;
                }
                return `
                        <url>
                            <loc>${siteUrl}${route}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
