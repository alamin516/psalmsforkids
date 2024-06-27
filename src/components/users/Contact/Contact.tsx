import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="py-10 lg:pt-20 md:pt-16">
      <div className="container max-w-2xl text-center text-base text-gray-600 leading-[26px]">
        <p className="mb-4">
          Psalm For Kids is proudly made in Multicultural London, UK. Please
          feel free to post an email with any suggestions, comments, or
          corrections. The feedback received is quite useful as we continue to
          improve our website. We wholeheartedly invite you to become a part of
          our community to help support your child in a growing relationship
          with God. If you find this site useful, then please share the site
          with your friends and family.
        </p>

        <p className="mb-4">
          Email is our preferred means of communication: info@psalmsforkids.com
        </p>

        <p className="mb-3">
          Include a brief description of your issue. The mailbox is monitored
          Monday – Friday 9 am – 5 pm.
        </p>

        <p className="mb-3">
          Bible Version: NIRV (The New International Reader Version Bible for
          early readers is recommended by more Christian schools and churches
          than any other Bible for kids!)
        </p>
        <p className="mb-3">Made in England</p>

        <Image
          width={150}
          height={260}
          src={"/images/contact/man-with-flag.png"}
          alt="man-with-flag"
          className="my-4 mx-auto w-auto h-auto"
        />
        <p className="mb-3">Special Thanks to:</p>
        <p className="mb-3">
          Crossroad kids club for their biblical and informative videos
        </p>
      </div>
      <div className="pt-10">
        <p>
          <iframe
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19854.790396284305!2d-0.14163888233696614!3d51.534333024821386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6eadb3896d%3A0x5aa8ffed63aea5ac!2sIslington%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1680486351514!5m2!1sen!2sbd"
            width="300"
            height="550"
            className="w-full"
          ></iframe>
        </p>
      </div>
    </div>
  );
};

export default Contact;
