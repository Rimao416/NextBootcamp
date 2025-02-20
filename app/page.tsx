import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <div className="flex flex-col gap-4">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Product</Link>
      </div>
    </>
  );
}
