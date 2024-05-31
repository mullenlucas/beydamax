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

model Users {
  id         Int      @id @default(autoincrement()) @unique
  name       String
  password   String
  email      String   @unique
  createdAt  DateTime @default(now())
  role       Role
  tools      Tools[] // Add a back-relation field
   rentings   Rentings[]
}

model Tools {
  id          Int      @id @default(autoincrement()) @unique
  name        String
  description String
  category    String
  price       Int
  stock       Int
  image       String
  createdAt   DateTime @default(now())
  rentedBy    Int?
  user        Users?    @relation(fields: [rentedBy], references: [id], onDelete: Cascade)
  rentings    Rentings[]
}

model Rentings {
  id          Int       @id @default(autoincrement()) @unique
  userId      Int
  toolId      Int
  rentedFrom  DateTime
  rentedUntil DateTime
  isOut       Boolean   @default(true)
  cameBack    DateTime?

  user        Users     @relation(fields: [userId], references: [id], onDelete: Cascade)
  tool        Tools     @relation(fields: [toolId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([toolId])
}

enum Role {
  admin
  renter
}
```

Generate prisma client:
Keeps the prisma client updated

```
npx prisma generate
```

Migrate DB:
Will keep SQL and database synchronized

```
npx prisma migrate dev --name init
```

Visualize tables:

```
npx prisma studio
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
