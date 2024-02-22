import { prisma } from "./db";

export async function getAllBrands() {
  const brands = prisma.brand.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return brands;
}
