// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur mon site !</h1>
      <p>
        <Link href="/photo/200">Voir la photo 1</Link>
      </p>
      <p>
        <Link href="/photo/2">Voir la photo 2</Link>
      </p>
    </div>
  );
}