// PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  // Fetch post details based on the ID, or use any logic to get the details

  return (
    <div>
      <h2>Post Detail</h2>
      <p>Display details for post with ID {id}</p>
    </div>
  );
};

export default PostDetail;
