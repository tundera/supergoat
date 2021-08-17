// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/**
 *  Next.js configuration object
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    esmExternals: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
