"use client"
import { usePathname } from "next/navigation";

function notFound() {
  const pathname=usePathname()
  const productId=pathname.split("/")[2]
  const reviewId=pathname.split("/")[4]
  return (
    <div>
      Review {reviewId} du produit {productId} n'existe pas 
    </div>
  );
}

export default notFound;
