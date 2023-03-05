import React from 'react';

function PostListPage() {
  const posts = [
    { id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Post 2', body: 'Lorem ipsum dolor sit amet.' },
    { id: 3, title: 'Post 3', body: 'Lorem ipsum dolor sit amet.' },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <h2 className="text-lg font-medium">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostListPage;
