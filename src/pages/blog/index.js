import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { BlogLayout, BlogPostHeader, BlogPostFooter } from '@/components/BlogLayout';

export default function BlogIndex({ posts }) {
  return (
    <BlogLayout>
      <h1 className="text-3xl font-bold mb-8 dark:text-light">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Thoughts on software, engineering, and building things.
      </p>
      <div>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow dark:bg-gray-800/50">
              <h2 className="text-2xl font-semibold mb-2 dark:text-light">{post.meta.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {post.meta.date} — {post.meta.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </BlogLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
  return {
    props: {
      posts,
    },
  };
}