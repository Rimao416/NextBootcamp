import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: "Product 1", price: 500, description: "Description 1" },
        { title: "Product 2", price: 600, description: "Description 2" },
        { title: "Product 3", price: 700, description: "Description 3" },
        { title: "Product 4", price: 800, description: "Description 4" },
      ],
    });
  }
};
seedProducts();

export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await prisma.product.findMany();
}
export async function getProduct(id: string) { // ✅ id: string
    return await prisma.product.findUnique({ where: { id } });
  }
  
export async function createProduct(
  title: string,
  description: string,
  price: number
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await prisma.product.create({ data: { title, description, price } });
}
export async function updateProduct(
    id: string, // ✅ Correction ici
    title: string,
    description: string,
    price: number
  ) {
    return await prisma.product.update({
      where: { id },
      data: { title, description, price },
    });
  }
  
  export async function deleteProduct(id: string) { // ✅ Correction ici
    return await prisma.product.delete({ where: { id } });
  }
  
