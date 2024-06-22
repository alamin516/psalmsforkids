import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const BibleVerseWidget = () => {
  return (
    <div className="widget mb-8 w-full">
      <div className="widget widget_dailyverseswidget">
        <div className="text-sm uppercase mb-4 font-henny">
          Bible Verse of the Day
        </div>
        <div>
          <div className="text-sm">
            Hear, O Israel: The LORD our God, the LORD is one. Love the LORD
            your God with all your heart and with all your soul and with all
            your strength.
          </div>
          <div className="dailyVerses bibleVerse">
            <Link
              href="https://dailyverses.net/2024/6/22"
              rel="noopener"
              target="_blank"
              className="font-bold"
            >
              Deuteronomy 6:4-5
            </Link>
          </div>
        </div>
      </div>
      <div id="block-9" className="widget widget_block">
        <div
          style={{ height: "23px" }}
          aria-hidden="true"
          className="wp-block-spacer"
        ></div>
      </div>
      <div id="text-2" className="widget widget_text">
        <div className="widget-title font-montserrat text-xs text-gray-500 uppercase mb-4 font-semibold">
          Follow Us
        </div>
        <div className="textwidget">
          <div className="socials flex items-center gap-5">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.target}
                rel={link.rel}
                className={link.className}
              >
                {link.iconClass.includes("facebook") && (
                  <Facebook className={link.iconClass} />
                )}
                {link.iconClass.includes("twitter") && (
                  <Twitter className={link.iconClass} />
                )}
                {link.iconClass.includes("instagram") && (
                  <Instagram className={link.iconClass} />
                )}
                <span className={link.bgSpanClass}></span>
                <span className={link.borderSpanClass}></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleVerseWidget;

const socialLinks = [
  {
    href: "https://www.facebook.com/thepfk/",
    target: "_blank",
    rel: "noopener",
    className:
      "relative flex justify-center items-center w-10 h-10 rounded-full text-white transition duration-300",
    iconClass: "icons facebook z-50",
    bgSpanClass:
      "absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 rounded-full transition-transform duration-300 transform scale-110",
    borderSpanClass:
      "absolute inset-0 border-2 border-opacity-20 border-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full transition-transform duration-300 transform scale-100",
  },
  {
    href: "https://twitter.com/psalmsforkids",
    target: "_blank",
    rel: "noopener",
    className:
      "relative flex justify-center items-center w-10 h-10 rounded-full text-white transition duration-300",
    iconClass: "icons twitter z-50",
    bgSpanClass:
      "absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 rounded-full transition-transform duration-300 transform scale-110",
    borderSpanClass:
      "absolute inset-0 border-2 border-opacity-20 border-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full transition-transform duration-300 transform scale-100",
  },
  {
    href: "#",
    target: "_blank",
    rel: "noopener",
    className:
      "relative flex justify-center items-center w-10 h-10 rounded-full text-white transition duration-300",
    iconClass: "icons instagram z-50",
    bgSpanClass:
      "absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 rounded-full transition-transform duration-300 transform scale-110",
    borderSpanClass:
      "absolute inset-0 border-2 border-opacity-20 border-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full transition-transform duration-300 transform scale-100",
  },
];
