// app/photo/[id]/page.tsx
export default function PhotoPage({ params }: { params: { id: string } }) {
    return (
      <div>
        <h1>Photo {params.id}</h1>
        <p>Ceci est la page normale.</p>
      </div>
    );
  }