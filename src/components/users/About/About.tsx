/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-10 lg:pt-20 md:pt-16">
      <div className="container max-w-7xl text-sm text-gray-600 leading-[26px]">
        <div className="lg:flex gap-10">
          <Image
            width={300}
            height={217}
            src={"/images/about/Welcome.webp"}
            alt="Welcome"
            className="w-full md:w-auto lg:w-auto"
          />
          <div className="pt-4 text-left">
            <h3 className="font-henny text-sm mb-3">
              Don't worry, you're in safe hands
            </h3>
            <h2 className="font-henny text-xl mb-5 font-semibold leading-10">
              Welcome to psamls For Kids
            </h2>
            <p className="text-justify ">
              Welcome to the wonderful world of Psalms for kids where you will
              experience a great adventure with content that promotes biblical
              principles and honours Jesus Christ. Jesus Christ is the central
              figure of Christianity and is believed by Christians to be the Son
              of God, the Messiah, and the savior of the world. Through his
              life, death, and resurrection he demonstrated God’s plan of
              salvation for humanity. Jesus was also a teacher who is still
              revered today by millions of people around the world.
            </p>
          </div>
        </div>
        <div className="py-5">
          <h2 className="font-henny text-xl mb-5 font-semibold leading-10">
            Psalms Writers
          </h2>
          <p className="text-justify mb-3">
            The Book of Psalms is a book in the Jewish and Christian Bible. It
            is the first book of the Ketuvim (“Writings”), the third section of
            the Tanakh (Hebrew Bible). The title is derived from the Greek
            translation, psalmoi, meaning “instrumental music” and, by
            extension, “the words accompanying the music”. The Book of Psalms is
            a collection of 150 ancient poems and prayers celebrating the
            praises of God. The text expresses a wide variety of emotional
            states, from joy and exultation to anger and despair. The Psalms are
            arranged by various topics and moods, such as faithfulness,
            humility, lament, lamentation, rebellion, and deliverance from
            enemies. In addition to the many praises, prayers, and hymns, the
            Psalms also contain some of the most profound insights into the
            spiritual life. The Psalms have influenced literature, music, and
            art throughout the centuries, and their profound influence is still
            instrumental today. Scholars believe that these Psalms, which
            comprise the largest book of the Bible, were written over many
            centuries by a variety of authors, While their exact authorship
            remains a mystery, King David contributed to many psalms written.
            Other people who wrote Psalms were Moses, Solomon, etc.
          </p>
          <p className="text-justify mb-3">
            The story of King David is one of the most significant and familiar
            stories of the Bible. He was the youngest son of Jesse, a humble
            shepherd and descendant of Ruth and Boaz. Samuel, a great prophet of
            Israel, anointed David as the King of Israel at a very young age.
            David is described in the Hebrew Bible as the second king of the
            United Kingdom of Israel and Judah; after Saul and Ishbaal. David
            was generally renowned for his great leadership and strength as a
            warrior.
          </p>
          <p className="text-justify mb-3">
            As a young boy, David fought and defeated the Philistine giant
            Goliath with a single stone from a sling. Years later he was seen as
            a great military leader, conquering many cities and defeating all
            oppositions in battle. The prophet Nathan declared to David that his
            kingdom will endure forever and will never end. As a result he was
            given the city of Jerusalem and established his capital there. David
            reigned for 40 years, ruling from Hebron until Jerusalem was
            established as Israel’s capital.
          </p>
          <p className="text-justify mb-3">
            David defeated enemies of Israel who included the Amalekites,
            Moabites, Edomites, and Philistines. His victory over the
            Philistines was a major milestone, establishing the importance of
            Jerusalem as a major city. David was a strong military leader,
            leading Israel in many battles and expanding the size and power of
            the nation. He was later on succeeded by his son, Solomon, who
            reigned as king of Israel.
          </p>
          <p className="text-justify mb-3">
            In his spare time David was also a great musician, writing many of
            the Psalms and even playing the harp. King David wrote the psalms in
            order to express his love for God and to praise and thank Him for
            His goodness and faithfulness. He composed the psalms as a means of
            connecting to God in a deeply spiritual and emotional way, offering
            up prayers of hope, sorrow, joy, fear and praise. By writing his
            feelings and struggles in the psalms, King David hoped to encourage
            his fellow believers and increase their faith. Much of the later
            part of David’s life was spent battling his own family and betrayal
            which gave him inspiration to write these psalms. He used poetry to
            express deep emotion and to communicate with God. His psalms are
            uplifting and often provide comfort and strength to those who may be
            struggling.
          </p>
          <p className="text-justify mb-3">
            The Psalms are widely considered to be among the most beautiful and
            powerful expressions of faith and praise in all of scripture. The
            Psalms offer a unique insight into the human condition, the
            relationship between God and humanity, the ultimate plan of the
            divine and the importance of seeking spiritual protection in moments
            of darkness and despair. Themes of hope, forgiveness, restoration,
            mercy, and grace are woven throughout its inspired words. The Psalms
            have served as a source of strength and comfort to believers for
            thousands of years, inspiring them to press on when all hope appears
            lost and to trust in the Lord’s benevolent care. As such, their
            impact on the world of faith cannot be understated.
          </p>
          <p className="text-justify mb-3">
            The Bible is considered to be a product of divine inspiration and a
            record of the relationship between God and humans by Christians,
            Jews, Samaritans, and Rastafarians. It is the world’s best-selling
            and the most highly treasured of all the books in the Old Testament.
            It is widely considered to be the most popular and influential book
            of all time. Published in numerous languages and distributed widely
            around the world, the Bible is central to many religious and
            spiritual beliefs and is no doubt one of the most influential books
            ever written. About 50 Bibles are sold every minute and it is
            estimated that more than one billion copies have been published so
            far.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
