import { prisma } from "./db";

type Filter = Record<string, any>;

export async function getAllBrands() {
  try {
    const brands = new Set<string>();
    const products = await prisma.product.findMany({
      select: {
        brand: true,
      },
    });

    products.forEach((product) => brands.add(product.brand));
    return [...brands];
  } catch (error) {
    console.log(error);
  }
}
export async function getAllProducts(filter: Filter) {
  try {
    const products = await prisma.product.findMany(
      Object.keys(filter).length
        ? {
            where: {
              brand: filter.brand,
            },
          }
        : undefined
    );
    return products;
  } catch (error) {
    console.log(error);
  }
}
