import { Author } from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  const filteredPosts = posts.filter((post) => post.id % 10 === 1);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
            <Author userId={post.userId} />
          </div>
        ))}
      </div>
    </div>
  );
}
