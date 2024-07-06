"use client";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  title: string;
  path: string;
  classes: string;
  dropdown?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    path: "/",
    classes: "",
    dropdown: [],
  },
  {
    title: "About",
    path: "/about",
    classes: "",
    dropdown: [
      {
        title: "About",
        path: "#",
        classes: "",
        dropdown: [],
      },
      {
        title: "Welcome",
        path: "#",
        classes: "",
        dropdown: [],
      },
      {
        title: "Mission",
        path: "#",
        classes: "",
        dropdown: [],
      },
      {
        title: "Bible",
        path: "#",
        classes: "",
        dropdown: [
          {
            title: "Old Testament",
            path: "#",
            classes: "",
          },
          {
            title: "New Testament",
            path: "#",
            classes: "",
          },
        ],
      },
      {
        title: "Testimonials",
        path: "#",
        classes: "",
        dropdown: [],
      },
    ],
  },
  {
    title: "Shop",
    path: "/shop",
    classes: "",
    dropdown: [],
  },
  {
    title: "Kids Lab",
    path: "#",
    classes: "",
    dropdown: [
      {
        title: "Toon Bible",
        path: "#",
        classes: "",
      },
      {
        title: "God People",
        path: "#",
        classes: "",
      },
      {
        title: "Psalms Facts",
        path: "#",
        classes: "",
      },
    ],
  },
  {
    title: "Blog",
    path: "/blog",
    classes: "",
    dropdown: [],
  },
  {
    title: "Contact",
    path: "/contact",
    classes: "",
    dropdown: [],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // sticky top-0 z-50 w-full border-b border-border/40 bg-[#212f3c] text-white
    <header className="absolute top-0 z-[9999] w-full border-b border-border/40 glass-button text-white">
      <div className="container flex h-[72px] max-w-7xl items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              width={150}
              height={50}
              src={"/images/Psalms For Kids ™ logo.webp"}
              priority={true}
              className="w-auto h-auto"
              alt="Psalms For Kids ™ logo"
            />
          </Link>
        </div>
        {/* <nav className="hidden md:flex">
          {menuItems.map((item, i) => (
            <div key={i} className="relative group">
              <Link
                className={`${item.classes} transition-colors text-white text-sm px-4 hover:text-[#C1178C] leading-[72px] cursor-pointer`}
                href={item.path}
              >
                {item.title}
              </Link>
              {item.dropdown.length > 0 && (
                <ul className="absolute left-0 mt-0 hidden w-48 glass-button text-black border border-gray-300 rounded shadow-lg group-hover:block z-50">
                  {item.dropdown.map((dropdownItem, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-[#C1178C] hover:text-white relative group"
                    >
                      <Link href={dropdownItem.path} className="block">
                        {dropdownItem.title}
                      </Link>
                      {dropdownItem?.dropdown?.length > 0 && (
                        <ul className="absolute -right-[102%] mt-0 top-0 hidden w-48 glass-button text-black border border-gray-300 rounded shadow-lg group-hover:block z-50">
                          {dropdownItem?.dropdown?.map((sub_dropdown, index) => (
                            <li
                              key={index}
                              className="p-2 hover:bg-[#C1178C] hover:text-white"
                            >
                              <Link href={sub_dropdown.path} className="block">
                                {sub_dropdown.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav> */}

        <nav className="hidden md:flex">
          {menuItems.map((item, i) => (
            <div key={i} className="relative group">
              <Link
                className={`${item.classes} transition-colors text-white text-sm px-4 hover:text-[#C1178C] leading-[72px] cursor-pointer`}
                href={item.path}
              >
                {item.title}
                {item.dropdown && item.dropdown.length > 0 && (
                  <ChevronDown className="inline ml-1 w-4" />
                )}
              </Link>
              {item.dropdown && item.dropdown.length > 0 && (
                <ul className="absolute left-0 mt-0 hidden w-48 glass-button text-black border border-gray-300 rounded shadow-lg group-hover:block z-50">
                  {item.dropdown.map((dropdownItem, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-[#C1178C] hover:text-white relative group"
                    >
                      <Link
                        href={dropdownItem.path}
                        className="block flex items-center justify-between"
                      >
                        {dropdownItem.title}
                        {dropdownItem.dropdown &&
                          dropdownItem.dropdown.length > 0 && (
                            <ChevronRight className="inline ml-1 w-4" />
                          )}
                      </Link>
                      {dropdownItem.dropdown &&
                        dropdownItem.dropdown.length > 0 && (
                          <ul className="absolute left-full top-0 mt-0 hidden w-48 glass-button text-black border border-gray-300 rounded shadow-lg group-hover:block z-50">
                            {dropdownItem.dropdown.map(
                              (subDropdown, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="p-2 hover:bg-[#C1178C] hover:text-white"
                                >
                                  <Link
                                    href={subDropdown.path}
                                    className="block"
                                  >
                                    {subDropdown.title}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#C1178C] focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6"/>:<Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#212f3c] text-white absolute top-[72px] left-0 w-full h-[calc(100vh-72px)]">
          <nav className="flex flex-col p-4">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <Link
                  className={`${item.classes} block py-2 transition-colors text-white hover:text-[#C1178C]`}
                  href={item.path}
                >
                  {item.title}
                </Link>
                {item.dropdown && item.dropdown.length > 0 && (
                  <ul className="pl-4">
                    {item.dropdown.map((dropdownItem, index) => (
                      <li key={index} className="py-1">
                        <Link
                          href={dropdownItem.path}
                          className="block transition-colors text-white hover:text-[#C1178C]"
                        >
                          {dropdownItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
