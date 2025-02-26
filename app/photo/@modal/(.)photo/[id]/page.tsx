// app/@modal/(.)photo/[id]/page.tsx
export default function PhotoModal({ params }: { params: { id: string } }) {
    return (
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Photo {params.id}</h2>
        <p>Ceci est une modale.</p>
      </div>
    );
  }