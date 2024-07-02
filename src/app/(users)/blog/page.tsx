import PageTitle from "@/components/common/PageTitle";
import SimpleLayout from "@/components/layouts/Simple";
import BlogSidebar from "@/components/users/Blog/BlogSidebar";
import Posts from "@/components/users/Blog/Posts";

const page = () => {
  return (
    <SimpleLayout>
      <PageTitle
        image={`/images/page title bg.webp`}
        title={"Blog"}
        description={"We are awesome designer"}
      />
      <div className="py-10 lg:pt-20 md:pt-16 lg:px-0 px-2">
        <div className="container max-w-7xl mx-auto p-0 text-sm text-gray-600 leading-[26px]">
          <div className="grid lg:grid-cols-8 grid-cols-1 gap-10">
            <div className="lg:col-span-6">
                <Posts posts={posts}/>
            </div>
            <div className="lg:col-span-2">
                <BlogSidebar/>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default page;


const posts = [
  {
    "id": 1,
    "title": "James Cleveland - Where Is Your Faith In God",
    "imageUrl": "/images/posts/2.webp",
    "description": "Rev. James Cleveland - \"Where Is Your Faith In God\" Continue listening: https://malaco-music-group.lnk.to/ZXN-tID Lyrics: Verse...",
    "link": "https://malaco-music-group.lnk.to/ZXN-tID"
  },
  {
    "id": 2,
    "title": "Another Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the second post.",
    "link": "https://example.com/link2"
  },
  {
    "id": 3,
    "title": "Third Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the third post.",
    "link": "https://example.com/link3"
  },
  {
    "id": 4,
    "title": "Fourth Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the fourth post.",
    "link": "https://example.com/link4"
  },
  {
    "id": 5,
    "title": "Fifth Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the fifth post.",
    "link": "https://example.com/link5"
  },
  {
    "id": 6,
    "title": "Sixth Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the sixth post.",
    "link": "https://example.com/link6"
  },
  {
    "id": 7,
    "title": "Seventh Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the seventh post.",
    "link": "https://example.com/link7"
  },
  {
    "id": 8,
    "title": "Eighth Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the eighth post.",
    "link": "https://example.com/link8"
  },
  {
    "id": 9,
    "title": "Ninth Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the ninth post.",
    "link": "https://example.com/link9"
  },
  {
    "id": 10,
    "title": "Tenth Post Title",
    "imageUrl": "/images/posts/2.webp",
    "description": "Description for the tenth post.",
    "link": "https://example.com/link10"
  }
]
