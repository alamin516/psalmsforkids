import Image from "next/image";

const LatestBlogPostWidget = () => {
  return (
    <div className="widget mb-8 md:px-[15px]">
      <div className="widget">
        <div className="text-sm uppercase mb-4 font-henny">
          Latest Blog Post
        </div>
        <ul className="latest-post relative top-3 xs:text-left list-none p-0 m-0">
          {[
            {
              link: "https://psalmsforkids.com/learn-english-with-disney-cinderella/",
              imgSrc:
                "https://psalmsforkids.com/wp-content/uploads/2024/06/1719057370_maxresdefault-81x46.jpg",
              imgAlt: "",
              text: "Learn English With Disney |…",
            },
            {
              link: "https://psalmsforkids.com/a-prayer-when-church-people-reject-you-your-daily-prayer-june-22/",
              imgSrc:
                "https://psalmsforkids.com/wp-content/uploads/2024/06/A-Prayer-When-Church-People-Reject-You-Your-Daily-81x42.jpg",
              imgAlt: "",
              text: "A Prayer When Church People…",
            },
            {
              link: "https://psalmsforkids.com/how-to-equip-your-teen-volunteers-to-take-the-lead-in-childrens-ministry/",
              imgSrc:
                "https://psalmsforkids.com/wp-content/uploads/2024/06/How-to-Equip-Your-Teen-Volunteers-to-Take-the-Lead-81x35.jpg",
              imgAlt: "",
              text: "How to Equip Your Teen…",
            },
            {
              link: "https://psalmsforkids.com/daily-bible-verse-hebrews-725-scripturefortoday-bibleverse-scriptureoftheday-biblepassages/",
              imgSrc:
                "https://psalmsforkids.com/wp-content/uploads/2024/06/1718974005_maxresdefault-81x46.jpg",
              imgAlt: "",
              text: "Daily Bible Verse: Hebrews 7:25…",
            },
          ].map((post, index) => (
            <li
              key={index}
              className="border-b border-[#6f6f6f] py-4 w-full flex items-center"
            >
              <figure className="w-18 pr-4">
                <a href={post.link}>
                  <Image
                    width="60"
                    height="35"
                    src={post.imgSrc}
                    alt={post.imgAlt}
                    className="max-w-full h-auto align-middle border-0"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </figure>
              <div className="text-xs leading-5 relative top-[-1px]">
                <a
                  href={post.link}
                  className="hover:text-pink-500 no-underline hover:underline"
                >
                  {post.text}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestBlogPostWidget;
