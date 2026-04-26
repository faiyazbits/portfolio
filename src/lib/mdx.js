import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const { meta } = getPostBySlug(filename);
      return { slug: filename.replace(/\.mdx$/, ''), meta };
    });
  return posts;
}

export async function serializeMDX(content) {
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
}