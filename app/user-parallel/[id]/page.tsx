type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts(userId: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));  
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
}

async function getUserAlbums(userId: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return res.json();
}
export default async function UserParallel({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);
  const [posts, albums] = await Promise.all([postsData, albumsData]);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-extrabold mb-8">User Albums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((album: Album) => (
          <div key={album.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{album.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
