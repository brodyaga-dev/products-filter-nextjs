import { Card, CardContent } from "./ui/card";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  brand: {
    name: string;
  };
  categories: {
    name: string;
  }[];
  price: number;
};
export function ProductCard({
  brand,
  image,
  title,
  price,
  categories,
}: ProductCardProps) {
  return (
    <Card className="flex flex-col gap-2">
      <img
        alt={title}
        className="aspect-square object-fill rounded-t-lg border border-gray-200 dark:border-gray-800"
        height={400}
        src={image}
        width={400}
      />
      <CardContent className="flex flex-col gap-1">
        <h3 className="font-semibold text-lg md:text-xl line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{brand.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {categories.map((c) => c.name).join(",")}
        </p>
        <h4 className="font-semibold text-base md:text-lg">Rs {price}</h4>
      </CardContent>
    </Card>
  );
}
