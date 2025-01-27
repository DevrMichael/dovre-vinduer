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
    <main className="blogs-page">
      <h1>Nyttig informasjon</h1>
      <ul className="articles-grid">
        {posts.map((post) => (
          <li key={post._id} className="article-card">
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="main-image"
              />
            )}
            <div className="content">
              <h2>{post.title}</h2>
              {post.publishedAt && (
                <p>
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(post.publishedAt))}
                </p>
              )}
              <Link href={`/artikler/${post.slug.current}`}>Les mer</Link>
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
