import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // prisma.categoria.deleteMany();
/*   const categoria = await prisma.categoria.createMany({
    data: [{ name: "logistica" }, { name: "cocina" }, { name: "electricidad"}]
  })
  console.log(categoria) */
  const categorias = await prisma.categoria.findMany()
  console.log(categorias)
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
