import React from 'react'
import PostsCard from './PostsCard';

interface PostProps {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    link: string;
  }
  
  interface PostsProps {
    posts: PostProps[];
  }
  
  const Posts: React.FC<PostsProps> = ({ posts }) => {
    return (
      <div className="grid grid-cols-1 justify-center gap-4">
        {posts.slice(0,5).map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    );
  };
  
  export default Posts;