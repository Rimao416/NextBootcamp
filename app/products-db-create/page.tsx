import { redirect } from "next/navigation";
import { createProduct } from "../prisma-db";

export default function AddProductPage() {
  async function addProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    createProduct(title, description, price);
    redirect("/products-db");
  }
  return (
    <form action={addProduct} className="space-y-4 p-4 max-w-96">
      <label htmlFor="" className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
      </label>
      <label htmlFor="" className="text-white">
        Description
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="description"
        />
      </label>
      <label htmlFor="" className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
