import { useRouter } from "next/navigation";
import React from "react";

function OrderProduct() {
  const router = useRouter();
  const handleClick = () => router.push("/");
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Order Now</button>
    </>
  );
}

export default OrderProduct;
