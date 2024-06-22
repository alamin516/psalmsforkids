import Image from "next/image";

const AboutWidget = () => {
  return (
    <div className="widget mb-8 xs:text-center md:px-[15px]">
      <div className="widget">
        <div className="text-sm uppercase mb-4 font-henny font-semibold">
          About
        </div>
        <div className="textwidget">
          <Image
            width={173}
            height={50}
            src={"/images/Psalms For Kids ™ logo.webp"}
            alt="About Psalms for Kids"
            className="max-w-full h-auto align-middle border-0"
          />
          <div className="text-xs leading-5 w-11/12 xs:w-full m-0">
            Welcome to the wonderful world of Psalms for kids where you will
            experience a great adventure with content that promotes biblical
            principles and honours Jesus Christ. Our aim is to connect children
            all over the world to engage in the Bible in a language they
            understand. We are a multilingual devotional website committed to
            spiritual growth that educates, informs and inspires.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWidget;
