import { Slider } from "@/components/ui/slider";

export function PriceFilter() {
  return <Slider defaultValue={[33]} max={100} step={1} />;
}
