import { PrismaClient, Product } from "@prisma/client";
const prisma = new PrismaClient();

const brands = [
  {
    name: "Fire voltt",
  },
  {
    name: "Van Heusen",
  },
  {
    name: "Eybogler",
  },
  {
    name: "Levi's",
  },
  {
    name: "Nusyl",
  },
];

const categories = [
  {
    name: "t-shirt",
  },
  {
    name: "Smartwatch",
  },
];
const products = [
  {
    brand: "Levi's",
    description: `ABFRL, Aditya Birla Fashion and Retail Ltd,7th Floor, Skyline Icon Business Park, 86-92, Off A.K. Road, Marol Village, Andheri (East), Mumbai, Maharashtra 400059`,
    image: "https://m.media-amazon.com/images/I/51Yvs102CgL._SL1500_.jpg",
    title: "Allen Solly Men's Slim Fit Shirt",
    price: 3999,
    categories: ["t-shirt"],
  },
  {
    brand: "Eybogler",
    description: `Fabric: Cotton Blend ; Premium Export Quality Branded t-shirt; Unique Collection to your wardrobe casuals a hit of effortless cool with this best-looking t shirt.`,
    image: "https://m.media-amazon.com/images/I/51byp5tQ86L._SL1000_.jpg",
    title: "EYEBOGLER Polo Neck Half Sleeve Striped Print Casual Men Tshirt",
    price: 256,
    categories: ["t-shirt"],
  },
  {
    brand: "Nusyl",
    description: `Combine Sales Pvt Ltd, Combine Sales Pvt Ltd, B-1, Radhika Kunj, L.IG Khajrana Link Road, Indore (M.P) - 452010`,
    image: "https://m.media-amazon.com/images/I/41qpsB-njtL.jpg",
    title: "Nusyl Girls Solid Color Tshirt (NUGCTSF001)",
    price: 299,
    categories: ["t-shirt"],
  },
  {
    brand: "Eybogler",
    description: `Seven Rocks International, Cheema Chowk, Ludhiana., Men Rocks Pvt Ltd, #276, near Cheema Chowk, Industrial Area- A, Ludhiana, Punjab 141003`,
    image: "https://m.media-amazon.com/images/I/51EI1UA7FKL._SL1165_.jpg",
    title:
      "EYEBOGLER Women's Striped Regular fit t-shirt (T335HS_Green M) EYEBOGLERWomentunict-shirt",
    price: 182,
    categories: ["t-shirt"],
  },
  {
    brand: "Van Heusen",
    description: `ABFRL, ROCKET KOMMERCE LLP,NO:1/1,5TH FLOOR,VINAYAKA TOWERS,1ST CROSS,GANDHINAGAR-560009,BANGALORE,Karnataka,India`,
    image: "https://m.media-amazon.com/images/I/51EI1UA7FKL._SL1165_.jpg",
    title: "Van Heusen Men t-shirt",
    price: 1819,
    categories: ["t-shirt"],
  },
  {
    brand: "Fire voltt",
    description: `【1.83” HD Large Touch Screen】- Fire-Boltt Dazzle Plus comes with a 1.83” HD Full Touch Display for smooth swipes and clear vision. A High Resolution of 240*284 pixel for best display experience`,
    image: "https://m.media-amazon.com/images/I/61IMVMLW76L._SX679_.jpg",
    title: "Fire-Boltt Dazzle 1.83",
    price: 1049,
    categories: ["Smartwatch"],
  },
];

async function main() {
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.brand.createMany({
    data: brands,
  });

  for await (const product of products) {
    await prisma.product.create({
      data: {
        ...product,
        brand: {
          connect: {
            name: product.brand,
          },
        },
        categories: {
          connect: product.categories.map((category) => ({
            name: category,
          })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
