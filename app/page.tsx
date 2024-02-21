import { BrandFilter } from "@/components/brand-filter";
import { CategoryFilter } from "@/components/category-filter";
import { PriceFilter } from "@/components/price-filter";
import { ProductCard } from "@/components/product-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllBrands, getAllProducts } from "@/utils/products";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const products = await getAllProducts({
    brand: searchParams?.brand,
  });

  const brands = await getAllBrands();

  return (
    <div>
      <div className="grid grid-cols-12 gap-8">
        {/* filters sidebar section  */}
        <section className="col-span-12 md:col-span-3">
          <Card className="md:sticky top-0">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>
                Refine product listings based on price, brand, and category.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <PriceFilter />
              {brands?.length ? <BrandFilter brands={brands} /> : null}
              <CategoryFilter />
            </CardContent>
          </Card>
        </section>

        {/*  products grid section  */}
        <section className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </section>
      </div>
    </div>
  );
}
