import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      // remarkGfm,
      // remarkBreaks,
    ],
  },
});

export default withMDX(nextConfig);
