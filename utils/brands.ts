import { prisma } from "./db";

export async function getAllBrands() {
  const brands = prisma.brand.findMany();
  return brands;
}
