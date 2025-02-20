export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="text-2xl">Featured Product</h2>
      {children}
    </>
  );
}
