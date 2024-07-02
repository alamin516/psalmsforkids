import React from 'react';

const BlogSidebar = () => {
  return (
    <div className="w-full p-4 border border-gray-300">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Search</h2>
        <input
          type="text"
          placeholder="Enter your keywords..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Christian Children</span>
            <span>12</span>
          </li>
          <li className="flex justify-between">
            <span>Daily Verses</span>
            <span>282</span>
          </li>
          <li className="flex justify-between">
            <span>Faith</span>
            <span>370</span>
          </li>
          <li className="flex justify-between">
            <span>Lifestyle</span>
            <span>22</span>
          </li>
          <li className="flex justify-between">
            <span>Mentoring</span>
            <span>307</span>
          </li>
          <li className="flex justify-between">
            <span>News</span>
            <span>1,231</span>
          </li>
          <li className="flex justify-between">
            <span>Video</span>
            <span>1,719</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Tag Cloud</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-200 rounded">Advertisement</span>
          <span className="px-2 py-1 bg-gray-200 rounded">Children</span>
          <span className="px-2 py-1 bg-gray-200 rounded">Blog</span>
          <span className="px-2 py-1 bg-gray-200 rounded">Kidzone</span>
          <span className="px-2 py-1 bg-gray-200 rounded">Media</span>
          <span className="px-2 py-1 bg-gray-200 rounded">Psalm</span>
          <span className="px-2 py-1 bg-gray-200 rounded">Video</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Archive</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>June 2024</span>
            <span>225</span>
          </li>
          <li className="flex justify-between">
            <span>May 2024</span>
            <span>8</span>
          </li>
          <li className="flex justify-between">
            <span>April 2024</span>
            <span>161</span>
          </li>
          <li className="flex justify-between">
            <span>March 2024</span>
            <span>272</span>
          </li>
          <li className="flex justify-between">
            <span>February 2024</span>
            <span>315</span>
          </li>
          <li className="flex justify-between">
            <span>January 2024</span>
            <span>279</span>
          </li>
          <li className="flex justify-between">
            <span>December 2023</span>
            <span>291</span>
          </li>
          <li className="flex justify-between">
            <span>November 2023</span>
            <span>320</span>
          </li>
          <li className="flex justify-between">
            <span>October 2023</span>
            <span>293</span>
          </li>
          <li className="flex justify-between">
            <span>September 2023</span>
            <span>288</span>
          </li>
          <li className="flex justify-between">
            <span>August 2023</span>
            <span>200</span>
          </li>
          <li className="flex justify-between">
            <span>July 2023</span>
            <span>325</span>
          </li>
          <li className="flex justify-between">
            <span>June 2023</span>
            <span>257</span>
          </li>
          <li className="flex justify-between">
            <span>May 2023</span>
            <span>288</span>
          </li>
          <li className="flex justify-between">
            <span>April 2023</span>
            <span>315</span>
          </li>
          <li className="flex justify-between">
            <span>March 2023</span>
            <span>7</span>
          </li>
          <li className="flex justify-between">
            <span>February 2023</span>
            <span>2</span>
          </li>
          <li className="flex justify-between">
            <span>August 2017</span>
            <span>9</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
