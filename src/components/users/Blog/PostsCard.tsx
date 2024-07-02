import Image from 'next/image'
import React from 'react'


interface PostProps {
    id: number,
    title: string,
    imageUrl: string,
    description: string,
    link: string
}

interface Props {
    post: PostProps;
  }

const PostsCard: React.FC<Props> = ({post}) => {
  return (
    <div key={post.id} className="flex flex-col md:flex-col lg:flex-row xl:flex-row border border-gray-300 overflow-hidden w-full">
          <Image width={300} height={257} src={post.imageUrl} alt={post.title} className="w-full lg:w-2/5 object-cover" />
          <div className="p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-henny mb-2">{post.title}</h2>
              <p className="text-sm lg:text-base mb-4">{post.description}</p>
            </div>
            <a href={post.link} className="bg-black text-sm text-white py-1 px-4 text-center self-start">
              Continue Reading
            </a>
          </div>
        </div>
  )
}

export default PostsCard