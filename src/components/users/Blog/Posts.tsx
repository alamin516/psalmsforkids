'use client'
import React, { useState } from "react";
import PostsCard from "./PostsCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    const pageSize = 8
    const [currentPage, setCurrentPage] = useState(1);


    // Pagination
    const firstIndex = (currentPage - 1) * pageSize;
    const lastIndex  = firstIndex + pageSize;
    const currentPosts = posts.slice(firstIndex, lastIndex);


    
    const totalPages = Math.ceil(posts.length / pageSize);
    const startPostIndex = firstIndex + 1;
    const lastPostIndex = Math.min(firstIndex + pageSize, posts.length);
    const totalPosts = posts.length

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / pageSize); i++){
        pageNumbers.push(i)
    }




  return (
    <div>
        
        <h3 className="text-base mb-4 uppercase font-henny">total posts : {posts.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-center gap-4">
        {currentPosts.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>

      <div className="my-4 flex justify-between text-sm">
        <div>
        Showing {startPostIndex}{" "} - {" "}{lastPostIndex} of {totalPosts}
        </div>
        <div>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            {currentPage > 1 && (
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className={`flex items-center justify-center px-3 h-6 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  <ArrowLeft/>
                </button>
              </li>
            )}
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => setCurrentPage(number)}
                  className={`${
                    currentPage == number
                      ? "text-white bg-blue-600 border border-blue-600 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  } flex items-center justify-center px-3 h-6 leading-tight `}
                >
                  {number}
                </button>
              </li>
            ))}
            {currentPage !== totalPages && (
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="flex items-center justify-center px-3 h-6 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <ArrowRight/>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;
