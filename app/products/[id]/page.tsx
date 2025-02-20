export default async function ProductDefails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = await params;
  return (
    <div>
      <h1>Je suis la page produit {productId.id}</h1>
    </div>
  );
}
