import Link from 'next/link';
import { client } from '../src/sanity/lib/client';

const POSTS_QUERY = `*[_type == "post"]{
  _id,
  title,
  slug,
  "author": author->name,
  mainImage {
    asset->{
      url
    },
    alt
  },
  publishedAt
}`;

export default function BlogsPage({ posts }) {
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Artikler</h1>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li
            key={post._id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-48 object-cover main-image"
              />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              {post.publishedAt && (
                <p className="text-gray-500 text-sm">
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(post.publishedAt))}
                </p>
              )}
              <Link
                href={`/artikler/${post.slug.current}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const posts = await client.fetch(POSTS_QUERY);

  return {
    props: {
      posts,
    },
  };
}
