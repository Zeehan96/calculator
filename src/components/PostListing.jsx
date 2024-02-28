// PostListing.js
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Post 1', content: 'Content for post 1' },
  { id: 2, title: 'Post 2', content: 'Content for post 2' },
  // Add more posts as needed
];

const PostListing = () => {
  return (
    <div>
      <h2>Post Listing</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Link to={`/post/${post.id}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostListing;
