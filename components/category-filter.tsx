import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export function CategoryFilter() {
  return (
    <div className="grid gap-4">
      <Label>Category</Label>
      {[...new Array(6)].map(() => (
        <div className="flex items-center gap-4">
          <Checkbox id="category" />
          <Label
            htmlFor="category"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Mobile & Accessries
          </Label>
        </div>
      ))}
    </div>
  );
}
