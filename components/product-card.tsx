import { Card, CardContent } from "./ui/card";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  brandName: string;
};
export function ProductCard(props: ProductCardProps) {
  return (
    <Card className="flex flex-col gap-2">
      <img
        alt="Sneaker 1"
        className="aspect-square object-cover rounded-t-lg border border-gray-200 dark:border-gray-800"
        height={400}
        src="https://plus.unsplash.com/premium_photo-1701172277688-32d05010526a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
        width={400}
      />
      <CardContent className="flex flex-col gap-1">
        <h3 className="font-semibold text-lg md:text-xl">
          Classic Canvas Sneakers
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Timeless style
        </p>
        <h4 className="font-semibold text-base md:text-lg">$49.99</h4>
      </CardContent>
    </Card>
  );
}
