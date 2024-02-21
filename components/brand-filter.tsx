import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function BrandFilter() {
  return (
    <div className="grid gap-4">
      <Label htmlFor="brand">Brand</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          {[...new Array(6)].map(() => (
            <SelectItem value="apple">Apple</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
