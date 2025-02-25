import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if(random === 1) throw new Error("Il y'a un truc qui ne va pas");
  const reviewId = await params;
  if (parseInt(reviewId.reviewId) > 5) {
    redirect("/products");
  }

  return (
    <div>
      <h1>Je suis la page produit {reviewId.reviewId}</h1>
    </div>
  );
}
