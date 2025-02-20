import { notFound } from "next/navigation";
export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const reviewId = await params;
  if (parseInt(reviewId.reviewId) > 5) return notFound();
  return (
    <div>
      <h1>Je suis la page produit {reviewId.reviewId}</h1>
    </div>
  );
}
