This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Set up from scratch

### Installation

[Link to installation instructions](https://ui.shadcn.com/docs/installation/next)

### Clerk (for auth)

[Link to Clrek](https://clerk.com/docs)

## Database

Mongodb using Prisma

```
// schema.prisma

model Product {
  id        String     @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  price     Float
  stock     Int
  category  String
  owner     User       @relation(fields: [userId], references: [id])
  userId    String
  reservations Reservation[]
}

model User {
  id        String     @id @default(auto()) @map("_id") @db.ObjectId
  username  String     @unique
  email     String     @unique
  products  Product[]
}

model Reservation {
  id        String     @id @default(auto()) @map("_id") @db.ObjectId
  startDate DateTime
  endDate   DateTime
  product   Product    @relation(fields: [productId], references: [id])
  productId String
}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
