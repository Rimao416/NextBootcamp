"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, price }),
      });
      if(response.ok){
        router.push("/products-db");
      }
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-96">
      <label htmlFor="" className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="" className="text-white">
        Description
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label htmlFor="" className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={loading}
      >
        Submit
      </button>

    </form>
  );
}
