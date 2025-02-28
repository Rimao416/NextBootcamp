import { getProducts } from "../prisma-db";

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{product.title}</div>
          <div className="text-sm">
            <div>Price : {product.price}</div>
            <div>Description : {product.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
