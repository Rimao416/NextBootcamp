import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>Nos produits sont de grandes qualités</h1>
      <Link href={"/products/1/reviews"}>Voir les avis</Link>   
    </div>
  );
}

export default page;
