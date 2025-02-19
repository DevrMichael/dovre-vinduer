import React from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../../src/sanity/lib/client';
import Link from 'next/link';

const BlogPage = ({ blog }) => {
  if (!blog) {
    return <div className="not-found">Artikkel ikke funnet</div>;
  }

  return (
    <div className="blog-page">
      <h1>{blog.title}</h1>
      {blog.mainImage && (
        <img
          src={blog.mainImage.asset.url}
          alt={blog.title}
          className="main-image"
        />
      )}
      <div className="blog-content">
        <PortableText value={blog.body} />
      </div>
      <Link href="/kontakt">
        <button
          className="primaryButton"
          style={{
            margin: '2rem 0',
            padding: '1rem',
            width: '100%',
          }}
        >
          Kontakt oss for mer informasjon
        </button>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "post"]{ slug }`;
  const blogs = await client.fetch(query);

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      mainImage{
        asset->{url}
      },
      publishedAt
    }
  `;
  const blog = await client.fetch(query, { slug });

  if (!blog) {
    return { notFound: true };
  }

  return { props: { blog } };
}

export default BlogPage;
