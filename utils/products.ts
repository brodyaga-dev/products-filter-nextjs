import { prisma } from "./db";

type Filter = Record<string, any>;

export async function getAllProducts(filter: Filter) {
  const categories = Array.isArray(filter.categories)
    ? filter.categories
    : filter.categories
    ? [filter.categories]
    : [];

  const brands = Array.isArray(filter.brands)
    ? filter.brands
    : filter.brands
    ? [filter.brands]
    : [];

  const filters = {
    ...(categories.length
      ? {
          categories: {
            some: {
              name: {
                in: categories,
              },
            },
          },
        }
      : {}),

    ...(brands.length
      ? {
          brand: {
            name: {
              in: brands,
            },
          },
        }
      : {}),
  };

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
              ...filters,
            },
          }
        : {}),
    });
    return products;
  } catch (error) {
    console.log(error);
  }
}
