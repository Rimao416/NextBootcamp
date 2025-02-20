// app/docs/[[...slug]]/page.tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
    const { slug } = params;
  
    if (!slug || slug.length === 0) {
      return (
        <div>
          <h1>Bienvenue dans la documentation</h1>
          <p>Choisissez une section pour commencer.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h1>Section : {slug.join(' / ')}</h1>
        <p>Contenu de la section...</p>
      </div>
    );
  }