import Link from 'next/link';

export const BlogLayout = ({ children }) => (
  <div className="max-w-3xl mx-auto px-4 py-8 dark:bg-dark">
    {children}
  </div>
);

export const BlogPostHeader = ({ meta }) => (
  <header className="mb-8">
    <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
      ← Back to Blog
    </Link>
    <h1 className="text-4xl font-bold mb-2 dark:text-light">{meta.title}</h1>
    <p className="text-gray-600 dark:text-gray-400">
      {meta.date} • {meta.description}
    </p>
  </header>
);

export const BlogPostFooter = () => (
  <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
    <p className="text-center text-gray-500 dark:text-gray-400">Thanks for reading</p>
  </footer>
);