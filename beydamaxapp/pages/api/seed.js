import { PRICE, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  //   await prisma.table.deleteMany();
  // await prisma.review.deleteMany();
  // await prisma.item.deleteMany()
  // await prisma.product.deleteMany()
  // await prisma.categoria.deleteMany()
  // await prisma.user.deleteMany();

  await prisma.categoria.createMany({
    data: [{ name: "logistica" }, { name: "cocina" }, { name: "electricidad"}]
  })

  const categorias = await prisma.categoria.findMany()

  const logisticaCategoriaId =
    categorias.find(categoria => categoria.name === "logistica")?.id || 1
  const cocinaCategoriaId =
    categorias.find(categoria => categoria.name === "cocina")?.id || 1

  await prisma.product.createMany({
    data: [
      {
        name: "Pantalla con trípode 100 pulgadas",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        price: 400.99,
        description:
          "Vivaan is Modern Indian Cuisine serving dishes from different regions of India. We carefully select our ingredients and use them to make authentic Indian recipes and our chef puts his modern flair and twists to the dishes.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg"
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "pantalla-tripode-100pulg",
        categoria_id: logisticaCategoriaId
      },
      {
        name: "Inflador de globos",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47417441.jpg",
        price: 1200.00,
        description:
          "With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417455.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417456.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417457.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417458.jpg"
        ],
        open_time: "12:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "ramakrishna-indian-restaurant-ottawa",
        categoria_id: logisticaCategoriaId
      },
      {
        name: "Hidrolavadora eléctrica",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/48545745.jpg",
        price: 1500.00,
        description:
          "At Coconut Lagoon prepare yourselves for a most memorable journey through South Indian cuisine and feast on high quality food of inimitable flavour, aroma and originality in the vibrant setting of Coconut Lagoon.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045353.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48545766.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045356.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49399187.jpg"
        ],
        open_time: "17:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "coconut-lagoon-ottawa",
        categoria_id: cocinaCategoriaId
      },
    ]
  })

  const products = await prisma.product.findMany()

  const hidrolavElectrId =
    products.find(product => product.name === "Hidrolavadora electrica")
      ?.id || 1
  const pantallaCienPulgId =
    products.find(product => product.name === "Pantalla con tripode 100 pulgadas")
      ?.id || 1
  const infladorGlobosId =
    products.find(product => product.name === "Inflador de globos")?.id || 1


  await prisma.item.createMany({
    data: [
      {
        name: "Caja de pantalla",
        description:
          "Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.",
        product_id: pantallaCienPulgId
      },
      {
        name: "Sol Kadhi scallop ceviche",
        description: "Cured scallop served with mangosteen and coconut broth",
        product_id: pantallaCienPulgId
      },
      {
        name: "Butte ka kees",
        description:
          "Bhutte( Corn) Khees( grated) and spiced and tempered served with waffers",
        product_id: infladorGlobosId
      },
      {
        name: "Burrata Paapdi Chaat",
        description:
          "Our house made paapdi served with spiced potatoes and burrata cheese dressed with in house chutneys",
        product_id: infladorGlobosId
      },
      {
        name: "Shaadi Waala Chicken Curry",
        description:
          "Chicken curry usually served in weddings back home (Must Try)",
        product_id: infladorGlobosId
      },
      {
        name: "Shahi Tukda",
        description:
          "Chef's signature dessert : crispy bread poched with flavoured milk and topped with homemade cream made of pistachios, rose.",
          product_id: infladorGlobosId
      },
      {
        name: "Four-In-One Chicken",
        description:
          "Boneless chicken breast pieces marinated with four different kind of texture and Indian spices for each piece and grilled in clay oven",
        product_id: hidrolavElectrId
      },
      {
        name: "Chicken Tikka",
        description:
          "Boneless Chicken marinated overnight with yogurt, Indian spices and cooked in a Tandoor oven",
        product_id: hidrolavElectrId
      },
    ]
  })

  //   const userLaith = await prisma.user.create({
  //     data: {
  //       first_name: "Laith",
  //       last_name: "Harb",
  //       email: "laith@hotmail.com",
  //       city: "ottawa",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userJosh = await prisma.user.create({
  //     data: {
  //       first_name: "Josh",
  //       last_name: "Allen",
  //       email: "josh@hotmail.com",
  //       city: "toronto",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userLebron = await prisma.user.create({
  //     data: {
  //       first_name: "LeBron",
  //       last_name: "James",
  //       email: "lebron@hotmail.com",
  //       city: "niagara",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userCassidy = await prisma.user.create({
  //     data: {
  //       first_name: "Cassidy",
  //       last_name: "Marksom",
  //       email: "cassidy@hotmail.com",
  //       city: "toronto",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   await prisma.review.createMany({
  //     data: [
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
  //         rating: 5,
  //         restaurant_id: vivaanId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
  //         rating: 5,
  //         restaurant_id: bluRistoranteId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
  //         rating: 5,
  //         restaurant_id: elCatrinId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
  //         rating: 4,
  //         restaurant_id: stelvioId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Extremely disappointing in our experience.",
  //         rating: 2,
  //         restaurant_id: laBartolaId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
  //         rating: 5,
  //         restaurant_id: elCatrinId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
  //         rating: 5,
  //         restaurant_id: kamasutraIndianId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Restaurant was loud and crowded. Food is not worth the price.",
  //         rating: 3,
  //         restaurant_id: eldoradoTacoId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
  //         rating: 4,
  //         restaurant_id: vivaanId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
  //         rating: 5,
  //         restaurant_id: sofiaId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
  //         rating: 3,
  //         restaurant_id: curryishTavernId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
  //         rating: 3,
  //         restaurant_id: adrakYorkvilleId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Wonderful food and service.",
  //         rating: 5,
  //         restaurant_id: coconutLagoonId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Great food, great staff. You can’t ask for much more from a restaurant.",
  //         rating: 5,
  //         restaurant_id: bluRistoranteId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
  //         rating: 5,
  //         restaurant_id: RamaKrishnaId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
  //         rating: 4,
  //         restaurant_id: lastTrainToDelhiId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
  //         rating: 4,
  //         restaurant_id: curryishTavernId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
  //         rating: 5,
  //         restaurant_id: pukkaId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Very nice evening spent with special family.",
  //         rating: 5,
  //         restaurant_id: mariachisId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
  //         rating: 4,
  //         restaurant_id: eldoradoTacoId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
  //         rating: 5,
  //         restaurant_id: mariachisId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
  //         rating: 4,
  //         restaurant_id: stelvioId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
  //         rating: 5,
  //         restaurant_id: coconutLagoonId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
  //         rating: 4,
  //         restaurant_id: bluRistoranteId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
  //         rating: 3,
  //         restaurant_id: laBartolaId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
  //         rating: 4,
  //         restaurant_id: eldoradoTacoId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
  //         rating: 4,
  //         restaurant_id: utsavId,
  //         user_id: userCassidy.id,
  //       },
  //     ],
  //   });

  //   await prisma.table.createMany({
  //     data: [
  //       {
  //         restaurant_id: vivaanId,
  //         seats: 4,
  //       },
  //       {
  //         restaurant_id: vivaanId,
  //         seats: 4,
  //       },
  //       {
  //         restaurant_id: vivaanId,
  //         seats: 2,
  //       },
  //     ],
  //   });

  res.status(200).json({ name: "hello" })
}
