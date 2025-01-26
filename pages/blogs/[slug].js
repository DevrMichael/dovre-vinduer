import React from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../../src/sanity/lib/client';

const BlogPage = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
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
      <p>{new Date(blog.publishedAt).toDateString()}</p>
      <div className="blog-content">
        <PortableText value={blog.body} /> {/* Render rich text */}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "post"]{ slug }`; // Update "blog" to "post" if necessary
  const blogs = await client.fetch(query);

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const query = `
    *[_type == "post" && slug.current == $slug][0]{ // Update "blog" to "post" if necessary
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
