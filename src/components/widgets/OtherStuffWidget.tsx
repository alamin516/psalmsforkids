const OtherStuffWidget = () => {
  const links = [
    { href: "/calendar/", text: "Calendar" },
    { href: "/sales-return-policy/", text: "Sales & Return Policy" },
    { href: "/Advertisement/", text: "Advertisement" },
    { href: "/disclaimer/", text: "Disclaimer" },
    { href: "/terms-of-service/", text: "Terms of Service" },
    { href: "/privacy-policy/", text: "Privacy Policy" },
    { text: "GDPR/CCPR" },
  ];

  return (
    <div className="widget mb-8 w-full md:px-[15px]">
      <div>
        <div className="text-sm uppercase mb-4 font-henny">Other Stuff</div>
        <div className="textwidget">
          <p className="m-0 mb-6">
            {links.map((link, index) => (
              <span key={index}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="text-sm hover:text-pink-500 no-underline"
                  >
                    {link.text}
                  </a>
                ) : (
                  link.text
                )}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherStuffWidget;
