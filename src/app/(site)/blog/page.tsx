import { PencilLine } from "lucide-react";

export default function BlogPage() {
  const posts: Array<{ title: string; slug: string; summary: string; date: string }> = [];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-10 flex items-center gap-4">
        <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-200">
          <PencilLine size={28} />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-sky-800 dark:text-sky-300 leading-tight mb-1">
            Blog & Insights
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300">
            Tutorials, notes, case studies, and thoughts on coding, tech & career.  
            <br />
            <span className="text-sky-700 dark:text-sky-400 font-medium">Coming soon!</span>
          </p>
        </div>
      </header>

      {/* Empty state / Placeholder */}
      {posts.length === 0 && (
        <div className="text-center py-24 opacity-70">
          <div className="text-3xl mb-2">🥁</div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            No blog posts yet.<br />
            Stay tuned!
          </p>
        </div>
      )}

      {/* Exemplo para renderizar posts futuramente
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-8">
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-bold text-sky-800 dark:text-sky-300 group-hover:underline">
                {post.title}
              </h2>
              <span className="block text-sm text-gray-500 mb-1">{post.date}</span>
              <p className="line-clamp-2 text-gray-700 dark:text-gray-300">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
      */}
    </main>
  );
}