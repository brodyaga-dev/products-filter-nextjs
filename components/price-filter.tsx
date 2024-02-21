import { Slider } from "@/components/ui/slider";
import { Label } from "./ui/label";
import { useState } from "react";

export function PriceFilter() {
  return (
    <div className="grid gap-4">
      <Label htmlFor="price">Price range</Label>
      <Slider id="price" defaultValue={[33]} max={100} step={1} />
    </div>
  );
}
