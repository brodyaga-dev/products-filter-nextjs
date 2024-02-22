"use client";

import { Brand } from "@prisma/client";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type BrandFilterProps = {
  brands: Brand[];
};
export function BrandFilters({ brands }: BrandFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleFilter(formData: FormData) {
    const brands = formData.getAll("brands");
    const params = new URLSearchParams();
    brands.forEach((brand) => {
      params.append("brands", brand.toString());
    });
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="grid gap-4">
      <Label>Category</Label>
      <form action={handleFilter} className="grid gap-2">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center gap-4">
            <Checkbox
              id={brand.name}
              name="brands"
              value={brand.name}
              defaultChecked={searchParams
                .getAll("brands")
                ?.includes(brand.name)}
            />
            <Label
              htmlFor={brand.name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {brand.name}
            </Label>
          </div>
        ))}
        <Button type="submit">Apply</Button>
      </form>
    </div>
  );
}
