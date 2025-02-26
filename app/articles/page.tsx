import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div>
      <h1>Liste des Articles</h1>
      <ul>
        <li>
          <Link href="/articles/1">Article 1</Link>
        </li>
        <li>
          <Link href="/articles/2">Article 2</Link>
        </li>
      </ul>
    </div>
  );
}
