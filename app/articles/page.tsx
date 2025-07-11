"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
type Article = {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export default function ArticleListPage() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">📝 文章列表</h1>
      <ul className="space-y-4">
        {articles.map((article: Article) => (
          <li key={article.id} className="border p-4 rounded hover:shadow-md">
            <Link
              href={`/articles/${article.id}`}
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {article.title}
            </Link>
            <p className="text-gray-500 text-sm">
              {new Date(article.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
