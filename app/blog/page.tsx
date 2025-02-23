import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Me");
    }, 2000); // Délai de 2000 millisecondes (2 secondes)
  });

  return (
    <div>
      <h1>Je suis la page blog</h1>
    </div>
  );
}
