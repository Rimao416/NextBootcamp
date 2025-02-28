import { createProduct } from "@/app/prisma-db";
export async function POST(request: Request) {
  const { title, description, price } = await request.json();
  const product = await createProduct(title, description, price);
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}

