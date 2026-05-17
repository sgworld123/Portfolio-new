import React from 'react';
import { getBlogPosts } from '../services/mockData';
import styles from './Blog.module.css';

const Blog = () => {
  const posts = getBlogPosts();

  return (
    <div className={`container ${styles.blogPage}`}>
      <h1>Blog</h1>
      <div className={styles.blogList}>
        {posts.map(post => (
          <article key={post.id} className={styles.blogItem}>
            <h2>{post.title}</h2>
            <div className={styles.postMeta}>
              {post.date} <span>|</span> {post.tags.join(', ')}
            </div>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
