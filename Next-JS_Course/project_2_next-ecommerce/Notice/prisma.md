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

## Step 5: Create Model

In the `prisma/schema.prisma` file, define your data models. For example:

```prisma
model Product {
  id        Int      @id @default(autoincrement())
  name      String
  description String
}
```

## Step 6: migrate the database

```bash
npx prisma migrate dev --name add_product
npx prisma migrate dev --name add_category
npx prisma generate
```

## Step 7: Open Prisma Studio

```bash
npx prisma studio
```

## Step 8: Seed the database

Create a `prisma/seed.js` file and add your seed data logic. Then run:

### Step 9: Install dependencies tsx

```bash
npm i -D tsx
```

### Step 10: Update package.json

Add the following script to your `package.json`:

```json
"scripts": {
  "seed": "tsx prisma/seed.ts"
}
```

### Step 11: Run the seed script

```bash
npm run seed
```
