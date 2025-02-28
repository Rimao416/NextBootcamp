import Link from "next/link";

export default function ProductsPage(){
    return(
        <>
            <h1>Featured Products</h1>
            <Link href="/products/1">Product</Link>
            <Link href="/products/2">Product</Link>
            <Link href="/products/3">Product</Link>
        </>
    )
}