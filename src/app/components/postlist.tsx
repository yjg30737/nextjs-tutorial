import React from 'react';

function PostListPage() {
  const posts = Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    title: `Title ${index + 1}`,
    body: `Content ${index + 1}`,
  }));

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
