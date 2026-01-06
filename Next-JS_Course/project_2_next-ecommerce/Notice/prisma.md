# prisma

<https://www.prisma.io/>

## Step 1: Install Prisma CLI and Client

```bash
npm install prisma --save-dev
```

## Step 2: Initialize Prisma

```bash
npx prisma
npx prisma init
```

## Step 3: Configure Prisma to use PostgreSQL

In the `prisma/schema.prisma` file, set the datasource provider to `postgresql` and configure the database URL in the `.env` file.

## Step 4:  Push the Prisma schema to the database

```bash
npx prisma db push
```
