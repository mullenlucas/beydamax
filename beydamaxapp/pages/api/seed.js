import { PRICE, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Clearing existing data
    await prisma.item.deleteMany();
    await prisma.restaurant.deleteMany();
    await prisma.location.deleteMany();
    await prisma.cuisine.deleteMany();

    // Creating new data
    await prisma.location.createMany({
      data: [{ name: "ottawa" }, { name: "toronto" }, { name: "niagara" }],
    });

    await prisma.cuisine.createMany({
      data: [{ name: "indian" }, { name: "italian" }, { name: "mexican" }],
    });

    // Fetching data for later use
    const locations = await prisma.location.findMany();
    const cuisines = await prisma.cuisine.findMany();

    const indianCuisineId =
      cuisines.find((cuisine) => cuisine.name === "indian")?.id || 1;
    const mexicanCuisineId =
      cuisines.find((cuisine) => cuisine.name === "mexican")?.id || 1;
    const italianCuisineId =
      cuisines.find((cuisine) => cuisine.name === "italian")?.id || 1;

    const ottawaLocationId =
      locations.find((location) => location.name === "ottawa")?.id || 1;
    const torontoLocationId =
      locations.find((location) => location.name === "toronto")?.id || 1;
    const niagaraLocationId =
      locations.find((location) => location.name === "niagara")?.id || 1;

    // Creating restaurants
    await prisma.restaurant.createMany([
      {
        name: "Restaurant 1",
        locationId: ottawaLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: "Restaurant 2",
        locationId: torontoLocationId,
        cuisineId: mexicanCuisineId,
      },
      {
        name: "Restaurant 3",
        locationId: niagaraLocationId,
        cuisineId: italianCuisineId,
      },
    ]);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}