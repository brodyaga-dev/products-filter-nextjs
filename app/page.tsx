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

export default function Home() {
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
              <BrandFilter />
              <CategoryFilter />
            </CardContent>
          </Card>
        </section>

        {/*  products grid section  */}
        <section className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...new Array(10)].map(() => (
            <ProductCard />
          ))}
        </section>
      </div>
    </div>
  );
}
