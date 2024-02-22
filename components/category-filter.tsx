"use client";
import { Category } from "@prisma/client";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type CategoryFilterProps = {
  categories: Category[];
};
export function CategoryFilter({ categories }: CategoryFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleFilter(formData: FormData) {
    const categories = formData.getAll("categories");
    const params = new URLSearchParams();
    categories.forEach((category) => {
      params.append("categories", category.toString());
    });
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="grid gap-4">
      <Label>Category</Label>
      <form action={handleFilter} className="grid gap-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-4">
            <Checkbox
              id={category.name}
              name="categories"
              value={category.name}
              defaultChecked={searchParams
                .getAll("categories")
                ?.includes(category.name)}
            />
            <Label
              htmlFor={category.name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.name}
            </Label>
          </div>
        ))}
        <Button type="submit">Apply</Button>
      </form>
    </div>
  );
}
