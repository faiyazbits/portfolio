import { getPostBySlug, getAllPosts, serializeMDX } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { BlogLayout, BlogPostHeader, BlogPostFooter } from '@/components/BlogLayout';
import MDXComponents from '@/components/blog/MDXComponents';

const components = {
  ...MDXComponents,
  h1: props => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: props => <h2 className="text-2xl font-semibold mb-3" {...props} />,
  h3: props => <h3 className="text-xl font-medium mb-2" {...props} />,
  p: props => <p className="mb-4 leading-relaxed" {...props} />,
  ul: props => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
  ol: props => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
  li: props => <li {...props} />,
  a: props => <a className="text-primary hover:underline" {...props} />,
  blockquote: props => <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />,
  code: props => <code className="bg-gray-200 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm" {...props} />,
  pre: props => <pre className="bg-gray-200 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto" {...props} />,
};

export default function BlogPost({ source, meta }) {
  return (
    <BlogLayout>
      <BlogPostHeader meta={meta} />
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote {...source} components={components} />
      </div>
      <BlogPostFooter />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug, meta, content } = getPostBySlug(params.slug);
  const source = await serializeMDX(content);
  return {
    props: {
      source,
      meta,
      slug,
    },
  };
}