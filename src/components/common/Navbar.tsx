import { Facebook, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    dropdown: [],
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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#212f3c] text-white">
      <div className="container flex h-[72px] max-w-7xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image
              width={150}
              height={50}
              src={"/images/Psalms For Kids ™ logo.webp"}
              priority={true}
              className="w-auto h-auto"
              alt="Psalms For Kids ™ logo"
            />
          </Link>
          <nav className="hidden text-white">
            {menuItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  className={`${item.classes} transition-colors  text-white hover:text-[#C1178C]`}
                  href={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link
            className="mr-6 flex items-center space-x-2 lg:hidden md:hidden"
            href="/"
          >
            <Image
              width={200}
              height={200}
              src={"/images/Psalms For Kids ™ logo.webp"}
              priority={true}
              className="max-w-[150px] h-[50px]"
              alt="Psalms For Kids ™ logo"
            />
          </Link>

          <nav className="flex items-center gap-4 text-sm lg:gap-6 text-white">
            {menuItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  className={`${item.classes} transition-colors  text-white hidden lg:block md:block xl:block hover:text-[#C1178C]`}
                  href={item.path}
                >
                  {item.title}
                </Link>
              );
            })}

            <div
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-[#C1178C] h-9 py-2 mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R16u6la:"
              data-state="closed"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle Menu</span>
            </div>


            <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/thepfk">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0 hover:text-[#C1178C]">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://twitter.com/psalmsforkids">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0 hover:text-[#C1178C]">
                <svg
                  className="h-3 w-3 fill-current"
                  height="23"
                  viewBox="0 0 1200 1227"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
