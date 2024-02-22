import { prisma } from "./db";

type Filter = Record<string, any>;

export async function getAllProducts(filter: Filter) {
  try {
    const products = await prisma.product.findMany({
      include: {
        brand: {
          select: {
            name: true,
          },
        },
        categories: {
          select: {
            name: true,
          },
        },
      },
      ...(Object.keys(filter).length
        ? {
            where: {
              brand: filter.brand,
            },
          }
        : {}),
    });
    return products;
  } catch (error) {
    console.log(error);
  }
}
