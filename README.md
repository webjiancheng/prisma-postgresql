This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


# 📝 Next.js + Prisma + PostgreSQL Todo/Article App

这是一个基于 **Next.js 15**、**Prisma ORM** 和 **PostgreSQL（部署在 AWS RDS 上）** 的全栈应用，包含以下功能：

- ✅ 用户系统（User）
- ✅ 清单系统（List & ListItem）
- ✅ 文章管理（Article 列表 + 详情）
- ✅ API 接口由 Next.js App Router 提供

---

## 📦 技术栈

- **Next.js 15**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL (AWS RDS)**
- **Tailwind CSS**

---

## 🚀 快速启动

### 1. 安装依赖

```bash
npm install
npx run dev 
npx prisma db push
、、、
npx prisma studio 