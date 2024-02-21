"use client";
import { filterProducts } from "@/utils/actions";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function BrandFilter({ brands }: { brands: string[] }) {
  return (
    <div className="grid gap-4">
      <Label htmlFor="brand">Brand</Label>
      <Select
        onValueChange={(value) => filterProducts("brand", value)}
        name="brand"
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          {brands?.map((brand) => (
            <SelectItem key={brand} value={brand}>
              {brand}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
