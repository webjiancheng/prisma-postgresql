import { prisma } from '@/lib/prisma';

export default async function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return <div>无效的文章 ID</div>;
  }

  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) {
    return <div>文章未找到</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="mt-4">{article.content}</p>
    </div>
  );
}