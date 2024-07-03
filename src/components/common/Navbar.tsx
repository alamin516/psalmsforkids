"use client";
import { Facebook, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
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
    dropdown: [],
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#212f3c] text-white">
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
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, i) => (
            <div key={i} className="relative group">
              <Link
                className={`${item.classes} transition-colors text-white hover:text-[#C1178C]`}
                href={item.path}
              >
                {item.title}
              </Link>
              {item.dropdown.length > 0 && (
                <ul className="absolute left-0 mt-0 hidden w-48 glass-button text-black border border-gray-300 rounded shadow-lg group-hover:block z-50">
                  {item.dropdown.map((dropdownItem, index) => (
                    <li key={index} className="p-2 hover:bg-[#C1178C] hover:text-white">
                      <Link href={dropdownItem.path} className="block">
                        {dropdownItem.title}
                      </Link>
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
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#212f3c] text-white absolute top-[72px] left-0 w-full h-calc[100vh-72px]">
          <nav className="flex flex-col p-4">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <Link
                  className={`${item.classes} block py-2 transition-colors text-white hover:text-[#C1178C]`}
                  href={item.path}
                >
                  {item.title}
                </Link>
                {item.dropdown.length > 0 && (
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
